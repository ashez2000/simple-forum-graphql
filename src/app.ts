import { ApolloServer } from '@apollo/server';
import { typeDefs } from './schema';

import { Query } from './gql/resolvers/Query';
import { Mutation } from './gql/resolvers/Mutation';

const resolvers = {
  Query,
  Mutation,
};

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
