var express = require("express");
var http = require("http");
var path = require("path");
var cons = require("consolidate");
var app = express();

// assign the swig engine to .html files
app.engine("html", cons.swig);

// all environments
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require("less-middleware")({ src: path.join(__dirname, "public") }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) { res.render("index") });
app.get("/dele", function (req, res) { res.render("delete") });
app.get("/save", function (req, res) { res.render("save") });

require("./routes").start(app, http);
