import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type User {
    name: String!
  }

  type Query {
    viewer: [User]!
  }
`
