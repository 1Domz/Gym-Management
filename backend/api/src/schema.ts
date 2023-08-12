const typeDefs = `#graphql

  type User {
    firstname: String!
    lastname: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    Signup(firstname: String!, lastname: String!, email: String!, password: String!): User
  }

  `

export default typeDefs
