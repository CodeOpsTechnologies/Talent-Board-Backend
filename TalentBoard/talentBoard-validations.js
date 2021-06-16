const { industries } = require("./industries");

const addProfileValidation = data => {
  const errors = [];
  const addProfileMandatoryField = [
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
    "visibilityDuration"
  ];
  const mandatoryFieldsValidationForTalentBoard = (
    mandatoryFieldsArray,
    dataObj
  ) =>
    mandatoryFieldsArray.filter(
      field =>
        !Object.keys(dataObj).includes(field) ||
        dataObj[field] === null ||
        dataObj[field] === ""
    );
  const missingParameters = mandatoryFieldsValidationForTalentBoard(
    addProfileMandatoryField,
    data
  );

  if (missingParameters.length)
    errors.push(
      `Mandatory parameter is missing: ${missingParameters.join(",")}`
    );

  if (!industries.includes(data.industry))
    errors.push(`Invalid industry selected`);

  return errors;
};

module.exports = {
  addProfileValidation
};
