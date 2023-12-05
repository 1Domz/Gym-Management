const typeDefs = `#graphql

  type User {
    _id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    Signup(firstname: String!, lastname: String!, email: String!, password: String!): User
    Login(email: String!, password: String!): AuthPayload
  }

  `

export default typeDefs
