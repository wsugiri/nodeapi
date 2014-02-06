var fs = require('fs');
var path = require('path');

exports.start = function (app, http) {
    app.set('port', process.env.PORT || 3000);

    fs.readdir(path.join(__dirname, "./api"), function (err, files) {
        for (var i in files) {
            var controller = files[i].substr(0, files[i].length - 3);
            for (var action in require(path.join(__dirname, "./api", controller))) {
                var link = "/api/" + controller + "/" + action + "/:id?";
                app.post(link, require(path.join(__dirname, "./api", controller))[action]);
            }
        }

        http.createServer(app).listen(app.get('port'), function () {
            console.log('Express server listening on port ' + app.get('port'));
        });
    });
}
