const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
// const UserType = require('./user_type');
const Untappd 		= require('../controllers/untappd');
const Github 		= require('../controllers/github');

const BeerType = require('./beer_type');
const GithubType = require('./github_type');

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
		},
		github_repos: {
			type: new GraphQLList(GithubType),
			resolve(parentValue) {
				return Github.fetch()
					.then(res => res.repos)
					.catch(err => console.log(err));
			}
		}
	})
});

module.exports = RootQuery;
