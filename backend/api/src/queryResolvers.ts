import { Users } from './model.js'

const queryResolvers = {
  users: async () => await Users.find(),
}

export default queryResolvers
