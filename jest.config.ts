export default {
    rootDir: './',
    clearMocks: true,
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@src(.*)$': '<rootDir>/src$1',
        '^.+\\.(css|less|scss)$': 'babel-jest'
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
    setupFilesAfterEnv: ['<rootDir>src/jestSetup.ts'],
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
}