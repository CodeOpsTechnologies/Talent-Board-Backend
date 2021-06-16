const faker = require("faker");

const {
  addProfile,
  getFilters,
  listProfiles
} = require("../TalentBoard/talentBoard");
const { defaultTimeout } = require("./testUtils/common-utils");

describe("TalentBoard - TalentBoard test cases for Add Profile", () => {
  describe("add profile test case", () => {
    test(
      "[positive] add profile test case with all mandatory fields provided",
      async () => {
        const request = {
          name: faker.name.findName(),
          skills: ["DynamoDB", "S3"],
          industry: "Computer Software",
          jobRole: "Serverless Consultant",
          proficiencyLevel: 1,
          relocation: false,
          state: "Karnataka",
          city: "bangalore",
          experience: 1,
          linkedinUrl: faker.internet.url(),
          visibilityDuration: 1
        };
        const data = await addProfile(request);
        expect(data).toHaveProperty("statusCode", 201);
      },
      defaultTimeout
    );

    test(
      "[Negative] add profile test case with all mandatory fields is not provided",
      async () => {
        const request = {
          name: faker.name.findName(),
          skills: ["DynamoDB", "S3"],
          industry: "IT",
          jobRole: "Serverless Consultant",
          proficiencyLevel: 1,
          relocation: false,
          state: "Karnataka",
          city: "bangalore",
          experience: 1,
          linkedinUrl: faker.internet.url()
        };
        const data = await addProfile(request);
        expect(data).toHaveProperty("statusCode", 400);
      },
      defaultTimeout
    );
  });

  describe("listProfiles test cases", () => {
    test(
      "[Positive] List all profiles of users",
      async () => {
        const data = await listProfiles({
          limit: 20,
          offset: 0,
          sort: "+name"
        });
        data.body = JSON.parse(data.body);
        expect(data.body.profiles.length).toBeGreaterThan(0);
      },
      defaultTimeout
    );

    test(
      "[Positive] List all profiles of users with filters provided",
      async () => {
        const data = await listProfiles({
          limit: 20,
          offset: 0,
          sort: "+name",
          filterBy: {
            city: ["bengaluru"],
            skills: ["serverless"],
            industry: ["Computer Software"],
            proficiencyLevel: ["Beginner"],
            experience: [1]
          }
        });
        expect(data).toHaveProperty("statusCode", 200);
      },
      defaultTimeout
    );

    test(
      "[Positive] List all profiles of users with filters provided",
      async () => {
        const data = await listProfiles({
          limit: 20,
          offset: 0,
          sort: "+name",
          searchTerm: "serverless"
        });
        expect(data).toHaveProperty("statusCode", 200);
      },
      defaultTimeout
    );
  });

  describe("getFilters test case", () => {
    test(
      "[Positive] getFilters test case",
      async () => {
        const data = await getFilters();
        expect(data).toHaveProperty("statusCode", 200);
      },
      defaultTimeout
    );
  });
});
