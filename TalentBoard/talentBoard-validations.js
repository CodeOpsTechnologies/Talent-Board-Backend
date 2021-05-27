const { mandatoryFieldsValidation } = require("../Utils/validators");

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
  return errors;
};

const listProfilesValidation = (limit, offset) => {
  const errors = [];
  const mandatoryFields = ["limit", "offset"];
  const res = mandatoryFieldsValidation(mandatoryFields, { limit, offset });
  if (res.length) errors.push(`Mandatory fields missing: ${res.join(",")}`);
  return errors;
};

module.exports = {
  addProfileValidation,
  listProfilesValidation
};
