/* eslint-disable no-param-reassign */
const { getLocation } = require("./getLocations");
const { getInputParams } = require("../Utils/requestHelper");

exports.handler = async event => {
  console.log("Input to the lambda-", event);
  console.log("Extracted input params-", getInputParams(event));

  const { queryParams } = getInputParams(event);

  return getLocation({
    country:
      queryParams && "country" in queryParams ? queryParams.country : null,
    state: queryParams && "state" in queryParams ? queryParams.state : null
  });
};
