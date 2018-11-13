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
    router.route('/softwares')
        .get(function(req, res) {
            const uri = process.env.PRICING_SERVICE + '/api/softwares'

            Request.get(uri, (error, response, body) => {
                if(error) {
                    return console.dir(error);
                }
                res.json(JSON.parse(body));
            });
        }).post(function(req, res) {
            const uri = process.env.PRICING_SERVICE + '/api/softwares';

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

    router.route('/services')
        .get(function(req, res) {
            const uri = process.env.PRICING_SERVICE + '/api/services'

            Request.get(uri, (error, response, body) => {
                if(error) {
                    return console.dir(error);
                }
                res.json(JSON.parse(body));
            });
        }).post(function(req, res) {
            const uri = process.env.PRICING_SERVICE + '/api/services';

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

    router.route('/items')
        .get(function(req, res) {
            const uri = process.env.PRICING_SERVICE + '/api/items?parentId='+req.query.parentId+'&parentType='+req.query.parentType;

            Request.get(uri, (error, response, body) => {
                if(error) {
                    return console.dir(error);
                }
                res.json(JSON.parse(body));
            });
        })
        .post(function(req, res) {
            const uri = process.env.PRICING_SERVICE + '/api/items';

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
