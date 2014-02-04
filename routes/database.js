var mongojs = require("mongojs");
var cfg = require("./config");
module.exports = {
    save: function(name) {
        return function(req, res) {
            // var data = req;
            console.log(req);
            res.send("save");
        }
    },
    read: function(name, filter, order) {
        return function(req, res) {
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
}
