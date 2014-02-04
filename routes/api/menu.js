var database = require("../database");
var api = module.exports = {};

api.read = database.read("menus");

