const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
// const mongoose = require('mongoose');
const UserType = require('./user_type');

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addSong: {
			type: UserType,
			args: {
				id: { type: GraphQLString }
			},
			resolve(parentValue, { id }) {
				// return (new Song({ title })).save()
			}
		}
	}
});

module.exports = mutation;
