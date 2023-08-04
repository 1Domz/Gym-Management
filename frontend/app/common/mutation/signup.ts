import { gql } from '@apollo/client'

export const signUp = gql`
  mutation Mutation(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    Signup(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    ) {
      firstname
      lastname
      email
      password
    }
  }
`
