// const axios = require('axios');
// const graphql = require('graphql');
// const Untappd = require('../controllers/untappd');

// const {
// 	GraphQLObjectType,
// 	GraphQLList,
// 	GraphQLID,
// 	GraphQLInt,
// 	GraphQLBoolean,
// 	GraphQLString
// } = graphql;

// const BeerType = require('./beer_type');

// const NRLRoundType = new GraphQLObjectType({
// 	name: 'NRLRoundDetailsType',
// 	fields: () => ({
// 		beers: {
// 			type: BeerType,
// 			resolve(parentValue) {
// 				return Untappd.fetch()
// 					.then(res => res.beers)
// 					.catch(err => console.log(err));
// 			}
// 		}
// 	})
// });

// module.exports = NRLRoundType;
