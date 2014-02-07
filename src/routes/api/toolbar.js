var database = require("../../libs/database");
var api = module.exports = {};

api.save = database.save("toolbars", ["name"], { idx: "int", int: "int", float: "float", date: "date" });
api.read = database.read("toolbars", ["name"], { idx: 1 });
api.dele = database.dele("toolbars", ["name"]);
