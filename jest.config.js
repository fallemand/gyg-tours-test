module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testRegex: '\\/tests\\/unit\\/.*(test|spec)\\.jsx?$',
  collectCoverage: true,
  coverageReporters: [
    'lcov',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/tests/unit/setup/styleMock.js',
    '\\.(png)$': '<rootDir>/tests/unit/setup/styleMock.js',
  },
  collectCoverageFrom: [
    '*.{js}',
    'api/**/*.{js,jsx}',
    'app/**/*.{js,jsx}',
    'services/**/*.{js,jsx}',
  ],
  setupFiles: ['<rootDir>/tests/unit/setup/setup.js'],
};
