import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import 'dotenv/config.js'
import mongoose from 'mongoose'
import typeDefs from './schema.js'
import resolvers from './resolvers.js'
main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect(process.env.MONGO_URI)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: 8000 },
  })

  console.log(`🚀  Server ready at: ${url}`)
}
