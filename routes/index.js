const async 		= require('async');
const graphql 		= require('./graphql');
/* GET home page. */
module.exports = function(app) {
	graphql(app);
	app.get('/', function(req, res) {
		res.send('Server is healthy');
	});

	app.post('/', function(req, res) {
		console.log(req.body);
		res.send('Post requests are healthy');
	});
}
