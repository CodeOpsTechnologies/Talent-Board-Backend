const { addProfile, listProfiles, getFilters } = require("./talentBoard");
const { getInputParams, HttpMethods } = require("../Utils/requestHelper");
const {
  badRequestResponse
} = require("../Utils/proxyResponseCodes").responseMessages;

exports.handler = async event => {
  console.log("Input to the lambda", event);
  console.log("Extracted input params:", getInputParams(event));

  const { body, resource, httpMethod } = getInputParams(event);

  // Routing of APIs
  if (httpMethod === HttpMethods.POST && resource === "/talent") {
    if (body) return addProfile(body);
    return badRequestResponse(`No input provided.`);
  }

  if (httpMethod === HttpMethods.POST && resource === "/talent/profiles") {
    return listProfiles({
      limit: body && body.limit ? Number(body.limit) : 20,
      offset: body && body.offset ? Number(body.offset) : 0,
      searchTerm: body && body.searchTerm ? body.searchTerm : null,
      sort: body && body.sort ? body.sort : "+name",
      filterBy: body && body.filterBy ? body.filterBy : null
    });
  }

  if (httpMethod === HttpMethods.GET && resource === "/talent/filters") {
    return getFilters();
  }

  return badRequestResponse("Invalid path");
};
