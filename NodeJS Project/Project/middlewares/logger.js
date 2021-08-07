function log(req, res, next) {
    console.log(`Request recieved: ${req.headers.host}${req.url} method:${req.method}`);
    console.info(`url: ${req.url} origin url: ${req.originalUrl}`);
    // console.info(req);

    //Async example
    console.log("First to go!");
    setTimeout(() => {
        console.log("Middle to go .... Maybe?");
    }, 4000);
    console.log("Last to go!");

    //Callbacks
    getBearDataFromDb(1, function (data) {
        console.log(data);
    });

    function getBearDataFromDb(bearId, callback) {
        setTimeout(() => {
            console.log('Reading Bear data from Db');
            let dbData = { id: bearId, name: 'New Bear From Db' }
            callback(dbData);
        }, 2000);
    }

    next();
}

module.exports = log;