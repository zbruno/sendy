const Listr = require('listr');
const execa = require('execa');
const split = require('split');
const { merge, Observable } = require('rxjs');
const { filter } = require('rxjs/operators');
const streamToObservable = require('@samverschueren/stream-to-observable');

const exec = (cmd, args) => {
  const cp = execa(cmd, args);

  return merge(
    streamToObservable(cp.stdout.pipe(split())),
    streamToObservable(cp.stderr.pipe(split())),
    cp,
  ).pipe(filter(Boolean));
};

const tasks = new Listr([
  {
    title: 'Ping npm registry',
    task: async () => {
      const subprocess = execa('npm', ['ping']);

      setTimeout(() => {
        subprocess.cancel();
      }, 15000);

      try {
        await subprocess;
      } catch (error) {
        throw new Error('Connection to npm registry failed');
      }
    },
  },
  {
    title: 'Ensure logged in',
    task: async () => {
      const { stdout } = await execa('npm', ['whoami']);

      if (stdout !== 'zachbruno') {
        throw new Error('Unauthorized.');
      }
    },
  },
  {
    title: 'Ensure clean git directory',
    task: async () => {
      const { stdout } = await execa('git', ['status', '--porcelain']);

      if (stdout !== '') {
        throw new Error('Unclean working tree. Commit or stash changes first.');
      }
    },
  },
  {
    title: 'Git local up to date',
    task: async () => {
      const { stdout } = await execa('git', ['rev-list', '--count', '--left-only', '@{u}...HEAD']);

      if (stdout !== '0') {
        throw new Error('Remote history differ. Please pull changes.');
      }
    },
  },
  {
    title: 'Lint JS',
    task: () => exec('npx', ['eslint', 'src/']),
  },
  {
    title: 'Test JS',
    task: () => exec('npm', ['test']),
  },
  {
    title: 'Build style assets',
    task: () => exec('npm', ['build-styles']),
  },
  {
    title: 'Build bundle assets',
    task: () => exec('rollup', ['-c']),
  },
  {
    title: 'Build Storybook',
    task: () => exec('npm', ['build-storybook']),
  },
  {
    title: 'Deploy Storybook',
    task: () => exec('npm', ['deploy-storybook']),
  },
  {
    title: 'Incrementing version',
    task: () => exec('npm', ['version', 'patch']),
  },
  {
    title: 'Committing files',
    task: () => new Observable(observer => {
      observer.next('Adding files');
      execa('git', ['add', '.']);
      observer.next('Committing files');
      execa('git', ['commit', '-m', '"Adding built assets"']);
    }),
  },
  {
    title: 'Pushing commits',
    task: () => exec('git', ['push']),
  },
]);

tasks.run();
