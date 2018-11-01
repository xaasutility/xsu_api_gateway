var express = require('express');

module.exports = function(app) {
    var router = express.Router();
    router.route('/')
        .get(function(req, res) {
            res.send('root!');
        });
    return router;
};
