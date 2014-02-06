var MongoClient = require('mongodb').MongoClient;
var async = require('async');
var cfg = require("../config/config");

module.exports = {
    save: function (docs, callback) {
        docs.forEach(function (doc) {
            initial(doc.name, doc.data);
        });
    }
}

function initial(name, data) {
    MongoClient.connect(cfg.mongo.cnstring, function (err, db) {
        if (err) throw err;

        var coll = db.collection(name);
        var syncfuncs = [];
        coll.remove(function (err) {
            if (err) throw err;
            var funcs = [];

            async.each(data, function (doc, db) {
                coll.insert(doc, db);
            }, close(db));
        });

        function close(db) {
            return function (err) {
                if (err) throw err;
                db.close();
            }
        }
    });
}
