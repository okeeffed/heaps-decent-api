const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLList,
	GraphQLEnumType,
	GraphQLFloat,
	GraphQLInt,
	GraphQLNonNull,
	GraphQLBoolean
} = graphql;

const BeerType = new GraphQLObjectType({
	name:  'BeerType',
	fields: () => ({
		beer: { type: GraphQLString },
		brewery: { type: GraphQLString },
		style: { type: GraphQLString },
		abv: { type: GraphQLString },
		ibu: { type: GraphQLString },
		my_rating: { type: GraphQLString },
		global_rating: { type: GraphQLString },
		first_checkin: { type: GraphQLString },
		last_checkin: { type: GraphQLString },
		image: { type: GraphQLString }
	})
});

module.exports = BeerType;
