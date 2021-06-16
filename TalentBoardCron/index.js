const {
  updateResponse,
  internalServerError
} = require("../Utils/proxyResponseCodes").responseMessages;
const { TalentBoardUserStatus } = require("../Utils/constants");
const { getTimeStamp } = require("../Utils/reuseMethods");
const { executeQuery, getUpdateQuery } = require("../Utils/DB/query-utils");

const handler = async () => {
  console.log("Marking talentboard user profiles inactive");

  const updateAttributes = { profileStatus: TalentBoardUserStatus.EXPIRED };

  const whereClause = `expireAfter < "${getTimeStamp()}" AND profileStatus = ${
    TalentBoardUserStatus.ACTIVE
  }`;

  const updateQuery = getUpdateQuery(
    "TalentBoard",
    updateAttributes,
    whereClause
  );

  return executeQuery(updateQuery, updateAttributes)
    .then(async response => {
      console.log("response", response);
      return updateResponse();
    })
    .catch(error => {
      return internalServerError({
        error,
        moduleName: "TalentBoard",
        apiPath: "TalentBoard-Mark talent board user profile inactive"
      });
    });
};

module.exports = {
  handler
};
