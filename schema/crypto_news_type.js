const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} = graphql;

const NewsType = new GraphQLObjectType({
	name:  'NewsType',
	fields: () => ({
		title: { type: GraphQLString },
		link: { type: GraphQLString }
	})
});

const CryptoNewsType = new GraphQLObjectType({
	name:  'CryptoNewsType',
	fields: () => ({
		coindesk: {
			type: new GraphQLList(NewsType),
			resolve(parentValue) {
				console.log(parentValue);
				return parentValue.coindesk.articles;
			}
		},
		bitcoin_mag: {
			type: new GraphQLList(NewsType),
			resolve(parentValue) {
				return parentValue.bitcoinMag.articles;
			}
		}
	})
});

module.exports = CryptoNewsType;
