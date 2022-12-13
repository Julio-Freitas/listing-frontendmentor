const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    // replicate path mappings as in tsconfig.json
    '^~lib/(.*)$': '<rootDir>/lib/$1',
    '^~components/(.*)$': '<rootDir>/components/$1'
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    'react-intersection-observer/test-utils'
  ],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.d.ts',
    '!src/**/mock.ts',
    '!src/**/types.ts',
    '!src/**/*.enum.ts',
    '!src/**/types/*',
    '!src/components/index.ts',
    '!src/mocks/*',
    '!src/styles/*',
    '!src/config/*',
    '!src/pages/api/**/*',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx'
  ],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest'
  },
  globals: {
    'ts-jest': {
      isolatedModules: false,
      tsConfig: './tsconfig.jest.json'
    }
  }
};

module.exports = createJestConfig(customJestConfig);
