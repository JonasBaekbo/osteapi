module.exports = (server) => {
    server.get('/customers', function (req, res, next) {
        res.send({"kundenr": 1234, "navn": "Jonas Bækbo"});
        return next();
       });
    }