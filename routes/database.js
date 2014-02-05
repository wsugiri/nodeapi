var mongojs = require("mongojs");
var cfg = require("./config");
module.exports = {
    open: function () {
        return new mongojs(cfg.mongo.cnstring);
    },
    save: function (name) {
        return function (req, res) {
            var conn = new mongojs(cfg.mongo.cnstring);
            conn.collection(name).save(req.body, function (err, doc) {
                if (err) throw err;

                res.send(doc);
            });
        }
    },
    read: function (name, filter, order) {
        return function (req, res) {
            var params = {};

            for (var key in filter) {
                params[key] = req.params[filter[key]];
            };

            var conn = new mongojs(cfg.mongo.cnstring);
            conn.collection(name).find(params).sort(order, function (err, docs) {
                if (err)
                    throw (err);

                conn.close();
                res.send(docs);
            })
        }
    },
    dele: function (name) {
        return function (req, res) {
            var conn = new mongojs(cfg.mongo.cnstring);
            conn.collection(name).remove(req.body, function (err, doc) {
                if (err) throw err;

                res.send(doc);
            });
        }
    },
}
