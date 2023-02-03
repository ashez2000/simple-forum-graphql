import { ApolloServer } from '@apollo/server';
import { typeDefs } from './gql/schema';

import { Query } from './gql/resolvers/Query';
import { ThreadMutation } from './gql/resolvers/mutation/thread.mutation';

const resolvers = {
  Query,
  Mutation: {
    ...ThreadMutation,
  },
};

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
