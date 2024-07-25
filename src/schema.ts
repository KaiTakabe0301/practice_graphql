import { prisma } from ".";

export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;

export const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: (_: any, args: { name: string; email: string }) => {
      return prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
        },
      });
    },
  },
};
