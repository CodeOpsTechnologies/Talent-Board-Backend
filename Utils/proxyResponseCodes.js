const { STAGE } = process.env;

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true
};

const okResponse = (body = "success") => ({
  statusCode: 200,
  body: JSON.stringify(body),
  headers
});

const internalServerError = (error = "Internal Server Error") => ({
  statusCode: 500,
  body: STAGE === "prod" ? "Internal Server Error" : JSON.stringify(error),
  headers
});

const resourceNotFound = (body = "Requested resource not found") => ({
  statusCode: 404,
  body: JSON.stringify(body),
  headers
});

const createResponse = (data = "Requested data created successfully") => ({
  statusCode: 201,
  body: JSON.stringify(data),
  headers
});

const updateResponse = (data = "Update successful") => ({
  statusCode: 200,
  body: JSON.stringify(data),
  headers
});

const deleteResponse = data => ({
  statusCode: 204,
  body: JSON.stringify(data),
  headers
});

const badRequestResponse = data => ({
  statusCode: 400,
  body: JSON.stringify(data),
  headers
});

const forbiddenResponse = (body = "Access denied") => ({
  statusCode: 403,
  body: JSON.stringify(body),
  headers
});

const timedOutResponse = (body = "Timed out") => ({
  statusCode: 200,
  body: JSON.stringify(body),
  headers
});

const badOriginRequestResponse = data => ({
  statusCode: 502,
  body: JSON.stringify(data),
  headers
});

module.exports.responseMessages = {
  internalServerError,
  okResponse,
  resourceNotFound,
  createResponse,
  updateResponse,
  deleteResponse,
  badRequestResponse,
  forbiddenResponse,
  timedOutResponse,
  badOriginRequestResponse
};
