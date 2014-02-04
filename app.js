var express = require("express");
var http = require("http");
var app = express();


require("./routes").start(app, http);
