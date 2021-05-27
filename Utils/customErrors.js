class SendEmailError extends Error {
  constructor(errorDetails) {
    super("Failed to send email");
    this.errorDetails = errorDetails;
  }
}

const DB_ERRORS = {
  DUPLICATE_KEY_ERROR: 1062
};

module.exports = {
  DB_ERRORS,
  SendEmailError
};
