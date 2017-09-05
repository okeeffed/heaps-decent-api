const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString
} = graphql;

const GithubType = new GraphQLObjectType({
	name:  'GithubType',
	fields: () => ({
		link: { type: GraphQLString },
		name: { type: GraphQLString }
	})
});

module.exports = GithubType;
