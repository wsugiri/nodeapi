var database = require("../routes/database");
var async = require('async');

module.exports = {
    save: function (docs, callback) {
        docs.forEach(function (doc) {
            initial(doc.name, doc.data);
        });
    }
}

function initial(name, data) {
    var conn = database.open();
    var coll = conn.collection(name);

    coll.remove(function (err) {
        if (err)
            throw err;

        async.each(data, function (route, callback) {
            console.log(route);
            coll.save(route, callback);
        });

        conn.close();
    });
}
