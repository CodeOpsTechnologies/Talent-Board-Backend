/* eslint-disable no-param-reassign,no-return-assign,prefer-destructuring */
// noinspection ES6MissingAwait

const {
  createResponse,
  internalServerError,
  badRequestResponse,
  okResponse
} = require("../Utils/proxyResponseCodes").responseMessages;
const { addProfileValidation } = require("./talentBoard-validations");
const { TalentBoardUserStatus } = require("../Utils/constants");
const {
  executeQuery,
  getInsertQuery,
  getOrderByClause
} = require("../Utils/DB/query-utils");
const {
  getCityFilter,
  getIndustryFilter,
  getSkillsFilter
} = require("./talentBoard-helpers");

// Function to create a new user profile to talent board
async function addProfile(event) {
  console.log("Input to add profile", event);

  // Input parameters validation for mandatory parameters
  const validationResult = addProfileValidation(event);
  if (validationResult.length) return badRequestResponse(validationResult);

  // Calculating expireAfter field (expireAfter field will keep track as to when the profile should expire)
  const days = event.visibilityDuration;
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);

  // Applying transformations to required parameters
  event.expireAfter = currentDate.toISOString().split("T")[0];
  event.skills = JSON.stringify(event.skills);
  event.profileStatus = TalentBoardUserStatus.ACTIVE;

  // Columns to insert into DB
  const columns = [
    "name",
    "skills",
    "industry",
    "jobRole",
    "proficiencyLevel",
    "relocation",
    "state",
    "city",
    "experience",
    "linkedinUrl",
    "visibilityDuration",
    "expireAfter",
    "profileStatus"
  ];

  // Generating insert query to insert user profile
  const insertQuery = getInsertQuery({ tableName: "TalentBoard", columns });

  // Inserting user profile to DB
  return executeQuery(insertQuery, event)
    .then(() => {
      return createResponse(`User profile created successfully!`);
    })
    .catch(err => {
      return internalServerError({
        error: err,
        moduleName: "TalentBoard",
        apiPath: "TalentBoard-AddProfile",
        input: JSON.stringify(event)
      });
    });
}

// Function to list all of the user profiles present in the talent board
async function listProfiles(event) {
  console.log("Input to listProfiles:", event);

  const { limit, offset, sort, filterBy } = event;

  let searchTerm = event.searchTerm;

  let searchClause = "";
  let filterClause = "";

  // Construction of search clause (where clause for search functionality)
  if (searchTerm) {
    searchTerm = searchTerm.replace(/['"]+/g, "");

    // List of columns on which search term is searchable on
    const searchableColumns = [
      "name",
      "industry",
      "jobRole",
      "proficiencyLevel",
      "state",
      "linkedinUrl",
      "skills"
    ];

    searchClause = `(${searchableColumns
      .map(column => `LOWER(${column}) LIKE LOWER("%${searchTerm}%")`)
      .join(" OR ")})`;
  }

  // Construction of filter clause based on filter type (where clause for filters)
  if (filterBy) {
    const filterClauseConditions = [];

    const { skills, city, industry, proficiencyLevel, experience } = filterBy;

    if (skills && skills.length)
      filterClauseConditions.push(
        `(${skills
          .map(skill => `JSON_CONTAINS(skills, '["${skill}"]')`)
          .join(" OR ")})`
      );

    if (industry && industry.length)
      filterClauseConditions.push(
        `industry IN (${industry.map(i => `"${i}"`).join(",")})`
      );

    if (city && city.length)
      filterClauseConditions.push(
        `city IN (${city.map(c => `"${c}"`).join(",")})`
      );

    if (proficiencyLevel && proficiencyLevel.length) {
      filterClauseConditions.push(
        `proficiencyLevel IN (${proficiencyLevel.map(p => `"${p}"`).join(",")})`
      );
    }

    if (experience && experience.length)
      filterClauseConditions.push(`experience IN (${experience.join(",")})`);

    filterClause = filterClauseConditions.join(" AND ");
  }

  const whereClauseConditions = [];

  if (searchClause !== "") whereClauseConditions.push(searchClause);
  if (filterClause !== "") whereClauseConditions.push(filterClause);

  // Mandatory where condition to fetch only active users data
  whereClauseConditions.push(`profileStatus = ${TalentBoardUserStatus.ACTIVE}`);

  // Construction of where clause based on all other clauses constructed above
  const whereClause = whereClauseConditions.length
    ? `WHERE ${whereClauseConditions.join(" AND ")}`
    : "";

  // Order by clause
  const orderBy = getOrderByClause(sort);

  // Limit clause
  const limitClause = `LIMIT :offset, :limit`;

  // Columns to be fetched from DB
  const requestedColumns = [
    "name",
    "skills",
    "industry",
    "jobRole",
    "proficiencyLevel",
    "visibilityDuration",
    "relocation",
    "state",
    "city",
    "experience",
    "linkedinUrl"
  ];

  // Query to fetch all the data based on all the constructed clauses above
  const query = `SELECT ${requestedColumns.join(
    ","
  )} FROM TalentBoard ${whereClause} ${orderBy} ${limitClause}`;

  // Query to get count of records for the requested data
  const countQuery = `SELECT COUNT(*) as count FROM TalentBoard ${whereClause} ${orderBy}`;

  const promises = [
    executeQuery(query, { limit, offset }),
    executeQuery(countQuery)
  ];

  return Promise.all(promises)
    .then(response => {
      const profiles = response[0];
      const { count } = response[1][0];

      // constructing final response having count and profiles of users
      const finalResponse = {};

      profiles.forEach(
        profile => (profile.skills = JSON.parse(profile.skills))
      );

      finalResponse.count = count;
      finalResponse.profiles = profiles;

      return okResponse(finalResponse);
    })
    .catch(error => {
      internalServerError({
        error,
        moduleName: "TalentBoard",
        apiPath: "TalentBoard-ListProfiles",
        input: JSON.stringify(event)
      });
    });
}

// Function to get all of the filter options
async function getFilters() {
  // Using promises to get all the filters asynchronously
  const promises = [getCityFilter(), getIndustryFilter(), getSkillsFilter()];

  return Promise.all(promises).then(promiseResponse => {
    const cities = promiseResponse[0];
    const industries = promiseResponse[1];
    const skills = promiseResponse[2];

    return okResponse({ cities, industries, skills });
  });
}

module.exports = {
  addProfile,
  listProfiles,
  getFilters
};
