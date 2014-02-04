var database = require("../database");
var api = module.exports = {};

api.save = database.save("toolbars");
api.read = database.read("toolbars", null, { idx: 1 });
