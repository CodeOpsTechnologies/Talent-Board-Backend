require("dotenv").config();

process.env.STAGE = "Test";

module.exports = {
  modulePathIgnorePatterns: ["./__tests__/testUtils"],
  testEnvironment: "node"
};
