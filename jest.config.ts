import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",  // Ensures ts-jest is used for TypeScript files
  testEnvironment: "jsdom",  // This is useful for front-end testing in Jest
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",  // Ensure ts-jest is used to handle TypeScript files
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: [
    "**/src/**/*.test.ts",
    "**/src/**/*.test.tsx"
  ],
};

export default config;
