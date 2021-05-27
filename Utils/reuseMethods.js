const getTimeStamp = (UTCSeconds = null) => {
  return UTCSeconds
    ? new Date(parseInt(UTCSeconds, 10))
        .toISOString()
        .slice(0, 23)
        .replace("T", " ")
    : new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
};

module.exports = {
  getTimeStamp
};
