module.exports = {
  globalSetup: "<rootDir>/__test__/setup.ts",
  globalTeardown: "<rootDir>/__test__/teardown.ts",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  }
};
