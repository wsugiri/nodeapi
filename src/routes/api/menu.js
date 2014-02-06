var database = require("../../libs/database");
var api = module.exports = {};

api.read = database.read("menus");

