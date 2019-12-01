module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/index.js',
  ],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  coverageThreshold: {
    global: {
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/__snapshots__', '/vendor/'],
};
