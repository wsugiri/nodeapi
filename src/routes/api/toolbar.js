var database = require("../../libs/database");
var api = module.exports = {};

api.save = database.save("toolbars", ["name"]);
api.read = database.read("toolbars", null, { idx: 1 });
api.dele = database.dele("toolbars", ["name"]);
