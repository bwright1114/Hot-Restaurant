// this is to help direct the user so we know what page to deliver them
var path = require('path');

module.exports = function (app) {

	app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/tables.html'));
});

	app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/reserve.html'));
});

	app.use( function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});

	
}