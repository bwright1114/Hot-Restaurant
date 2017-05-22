// this for the data to help determine what data the user see and what nuser is able to post to our server to store
var tableData = require ('../data/table-data.js');
var waitListData = require ('../data/waitingList-data.js');

module.exports = function (app) {


	app.get('/api/tables', function (req, res) {
		res.json(tableData);
	});

	app.get('/api/waitlist', function (req, res) {
		res.json(waitListData);
	});

	app.post( '/api/tables', function(req, res){
		if(tableData.length < 5) {
			tableData.push(req.body);
			res.json(true);
		} else{
			waitListData.push(req.body);
			res.json(false)
		}
	});

	app.post('/api/clear', function(){
		tableData = [];
		waitlist = [];

		console.log('tableData');
		console.log('waitListData')
	});
}