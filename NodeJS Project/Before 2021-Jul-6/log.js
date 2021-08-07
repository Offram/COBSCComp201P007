var log = {
  logWarningMessage: function (message) {
    console.log("WARNING: " + message);
  },
  logErrorMessage: function (message) {
    console.log("ERROR: " + message);
  },
  logInfoMessage: function (message) {
    console.log("INFO: " + message);
  },
  secretCode: "Genie in the bottle",
};

// logInfoMessage("System is shutting down due to a crash!");

// module.exports.logInfoMessage = logInfoMessage;
// module.exports.logErrorMessage = logErrorMessage;
// module.exports.logWarningMessage = logWarningMessage;
// module.exports.secretCode = "Genie in the bottle";

module.exports = log;
