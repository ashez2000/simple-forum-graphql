export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    threads: [Thread!]!
  }

  type Thread {
    id: ID!
    content: String!
    createdAt: String!
    user: User!
  }

  type ThreadPayload {
    errors: [String!]!
    thread: Thread
  }

  type Query {
    threads: [Thread!]!
  }

  type Mutation {
    threadCreate(content: String!): ThreadPayload!
    threadDelete(id: String!): ThreadPayload!
  }
`;
