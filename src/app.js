import fs from 'node:fs';
import { ApolloServer } from '@apollo/server';

const typeDefs = fs.readFileSync('schema.graphql').toString();

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
