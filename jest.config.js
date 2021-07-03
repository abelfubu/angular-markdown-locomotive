module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@utils/(.*)': '<rootDir>/src/app/utils/$1',
    '@env/(.*)': '<rootDir>/src/environments/$1',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
}
