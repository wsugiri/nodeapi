﻿var MongoClient = require('mongodb').MongoClient;
var cfg = require("../config");

module.exports = {
    save: function (name, keys, types) {
        return function (req, res) {
            var query = {};

            for (var i in keys) {
                var key = keys[i];
                query[key] = req.body[key];
            };

            for (var key in types) {
                console.log(key, types, types[key]);
                switch (types[key]) {
                    case "int":
                        req.body[key] = parseInt(req.body[key]);
                        break;
                    case "float":
                        req.body[key] = parseFloat(req.body[key]);
                        break;
                    case "date":
                        req.body[key] = new Date(req.body[key]);
                        break;
                    default:
                        break;
                }
            }

            res.send(req.body);
            MongoClient.connect(cfg.mongo.cnstring, function (err, db) {
                if (err) throw err;

                db.collection(name).findAndModify(query, {}, req.body, { upsert: true }, function (err, doc) {
                    if (err) throw err;
                    res.send(doc);
                });
            });
        }
    },
    read: function (name, filter, order) {
        return function (req, res) {
            var query = {};

            for (var key in filter) {
                query[key] = req.params[filter[key]];
            };

            MongoClient.connect(cfg.mongo.cnstring, function (err, db) {
                if (err) throw err;

                var cursor = db.collection(name).find(query).sort(order);
                cursor.toArray(function (err, docs) {
                    if (err) throw err;
                    res.send(docs);
                });
            });
        }
    },
    dele: function (name, keys) {
        return function (req, res) {
            var query = {};

            for (var i in keys) {
                var key = keys[i];
                query[key] = req.body[key];
            };

            MongoClient.connect(cfg.mongo.cnstring, function (err, db) {
                if (err) throw err;

                res.send(query);
                db.collection(name).remove(query, {}, function (err, doc) {
                    if (err) throw err;
                    res.send(doc);
                });
            });
        }
    },
}
