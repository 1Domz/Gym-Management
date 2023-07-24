import { createUser } from './mutation/createUser.js'

const mutationResolvers = {
  Signup: async (_, { firstname, lastname, email, password }) =>
    createUser(firstname, lastname, email, password),
}

export default mutationResolvers
