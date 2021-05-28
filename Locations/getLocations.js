const countriesData = require("./countries.json");
const statesData = require("./StatesData.json");
const citiesData = require("./CitiesData.json");
const { okResponse } = require("../Utils/proxyResponseCodes").responseMessages;

async function getLocation(event) {
  console.log("Input to lambda", event);
  if (event.state) {
    return okResponse(citiesData[event.state]);
  }
  if (event.country) {
    return okResponse(statesData[event.country]);
  }
  return okResponse(countriesData.countryNames);
}

module.exports = {
  getLocation
};
