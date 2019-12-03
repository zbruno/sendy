import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

const path = require('path');

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
      name: 'sendyUi',
    },
    {
      file: 'dist/bundle.es.js',
      format: 'esm',
    },
  ],
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: [path.resolve(__dirname, '.'), 'node_modules'],
      },
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    sizeSnapshot(),
  ],
  external: [
    'prop-types',
    'react',
  ],
};
