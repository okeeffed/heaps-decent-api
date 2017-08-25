const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
// const UserType = require('./user_type');
const Untappd = require('../controllers/untappd');

const BeerType = require('./beer_type');

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: () => ({
		beers: {
			type: new GraphQLList(BeerType),
			resolve(parentValue) {
				return Untappd.fetch()
					.then(res => res.beers)
					.catch(err => console.log(err));
			}
		}
	})
});

module.exports = RootQuery;
