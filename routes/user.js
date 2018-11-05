const express = require('express');
const env = require('dotenv').config();
const _ = require('lodash');
const Request = require('request');

module.exports = function(app) {
    const router = express.Router();
    router.route('/')
        .get(function(req, res) {
            res.json();
        });
    router.route('/oauth')
        .post(function(req, res) {
            const uri = process.env.USER_SERVICE + '/api/oauth'

            Request.post({
                'headers': { 'content-type': 'application/json' },
                'url': uri,
                'body': JSON.stringify(req.body)
            }, (error, response, body) => {
                if(error) {
                    return console.dir(error);
                }
                res.json(JSON.parse(body));
            });
        });
        
    return router;
};
