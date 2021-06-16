const TalentBoardUserStatus = {
  ACTIVE: 1,
  EXPIRED: 2
};

// This is a mapping for visibility duration (the number of days, profile stays active)
const VisibilityDurationMapping = {
  1: 15,
  2: 30,
  3: 45,
  4: 60,
  5: 90
};

module.exports = {
  TalentBoardUserStatus,
  VisibilityDurationMapping
};
