import { ApolloServer } from '@apollo/server';
import { typeDefs } from './schema';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
