const { SECRET_ARN, CLUSTER_ARN, REGION, DB_NAME } = process.env;

const DBClient = require("data-api-client")({
  secretArn: SECRET_ARN,
  resourceArn: CLUSTER_ARN,
  database: DB_NAME,
  region: REGION
});

module.exports = {
  DBClient
};
