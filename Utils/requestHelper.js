// Helper function to extract the query params, body and path params from the input
const getInputParams = event => {
  const {
    queryStringParameters: queryParams,
    body: requestBody,
    pathParameters: pathParams,
    resource,
    httpMethod,
    requestContext: context
  } = event;
  if (context) console.log("Authorizer Values", context);
  return {
    queryParams,
    body: requestBody ? JSON.parse(requestBody) : null,
    pathParams,
    resource,
    httpMethod,
    context
  };
};

const HttpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
};

module.exports = { getInputParams, HttpMethods };
