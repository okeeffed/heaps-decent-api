const expressGraphQL = require('express-graphql');
const schema = require('../schema/schema');

/* GET home page. */
module.exports = function(app) {
	app.use('/graphql', expressGraphQL({
		schema,
		graphiql: true
	}));
}
