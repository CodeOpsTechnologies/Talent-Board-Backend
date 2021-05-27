// noinspection UnnecessaryLocalVariableJS

const { DBClient } = require("./DBConnection");

// Function to execute custom queries
const executeQuery = (sql = "", namedValues = {}) => {
  console.log("Execute Query -", sql);
  return DBClient.query({
    sql,
    parameters: namedValues
  }).then(res => ("records" in res ? res.records : res));
};

// Function to generate INSERT queries
const getInsertQuery = ({ tableName, columns }) => `INSERT INTO ${tableName} 
        (${columns.join(",")}) 
        VALUES ( ${columns.map(c => ":".concat(c)).join(",")} )`;

// Function to generate SELECT queries
const getSelectQuery = ({
  tableName,
  columns = ["*"],
  whereClause = null,
  orderByClause = "",
  groupByClause = ""
}) =>
  `SELECT ${columns.join(",")} FROM ${tableName} ${
    whereClause ? `WHERE ${whereClause}` : ""
  } ${groupByClause} ${orderByClause}`;

// Function to generate UPDATE queries
const getUpdateQuery = (tableName, updates, whereClause = null) => {
  const updateClause = Object.keys(updates)
    .map(col => `${col} = :${col}`)
    .join(",");
  return `UPDATE ${tableName} SET ${updateClause} ${
    whereClause ? `WHERE ${whereClause}` : ""
  }`;
};

// Function to get order by clause used in queries
const getOrderByClause = sortOrder => {
  const sortDirection = sortOrder.startsWith("-") ? "DESC" : "ASC";
  const orderByClause = `ORDER BY ${sortOrder.substr(1)} ${sortDirection}`;
  return orderByClause;
};

module.exports = {
  executeQuery,
  getInsertQuery,
  getSelectQuery,
  getUpdateQuery,
  getOrderByClause
};
