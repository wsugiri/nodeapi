var config = module.exports = {};
config.env = 'development';
config.hostname = 'dev.example.com';

//mongo database
config.mongo = {};
config.mongo.uri = process.env.MONGO_URI || 'localhost:27017';
config.mongo.db = 'mongodb';
config.mongo.cnstring = "mongodb://" + config.mongo.uri + "/" + config.mongo.db;


