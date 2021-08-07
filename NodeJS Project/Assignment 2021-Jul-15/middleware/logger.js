let logArray = [];
function log(req, res, next) {
    const logMessage = `Request recieved: ${req.headers.host}${req.url} method:${req.method}`;
    logArray.push(logMessage);
    console.log(logArray);

    next();
}

module.exports = log;