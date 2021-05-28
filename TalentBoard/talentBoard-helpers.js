const {
  getSelectQuery,
  getOrderByClause,
  executeQuery
} = require("../Utils/DB/query-utils");

// Getting all the distinct cities present in db (used to list `cities` filter)
const getCityFilter = () => {
  const cityQuery = getSelectQuery({
    tableName: "TalentBoard",
    columns: ["DISTINCT city"],
    orderByClause: getOrderByClause("+city")
  });
  return executeQuery(cityQuery).then(response =>
    response.map(cities => cities.city)
  );
};

// Getting all the distinct industries present in the db (used to list `industry` filter)
const getIndustryFilter = () => {
  const industryQuery = getSelectQuery({
    tableName: "TalentBoard",
    columns: ["DISTINCT industry"],
    orderByClause: getOrderByClause("+industry")
  });
  return executeQuery(industryQuery).then(response =>
    response.map(industry => industry.industry)
  );
};

/*
 Getting all the skills present in the db and then filtering duplicate skills,
  as skills is an json type of db column (used to list `skills` filter)
*/
const getSkillsFilter = () => {
  const skillsQuery = getSelectQuery({
    tableName: "TalentBoard",
    columns: ["skills"]
  });
  return executeQuery(skillsQuery).then(response =>
    // parsing skills stringified array and removing duplicates
    [...new Set(response.flatMap(skill => JSON.parse(skill.skills)))].sort()
  );
};

module.exports = {
  getCityFilter,
  getIndustryFilter,
  getSkillsFilter
};
