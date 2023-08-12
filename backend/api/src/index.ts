import { ApolloServer } from '@apollo/server'
import mongoose from 'mongoose'
import typeDefs from './schema.js'
import resolvers from './resolvers.js'
import 'dotenv/config.js'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express'
import http from 'http'
import pkg  from 'body-parser'
import cors from 'cors'

const { json} = pkg


main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect(process.env.MONGO_URI)

  const app = express()
  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
  })

  await server.start()

  app.use(
    '/gym-management',
    cors<cors.CorsRequest>({
      origin: [ 'http://localhost:3000', 'https://studio.apollographql.com'],
      credentials: true,
    }),
    json(),
    expressMiddleware(server)
  )

  await new Promise<void>((resolve) => httpServer.listen({ port: 8000}, resolve))
  console.log(`🚀 Server ready at http://localhost:8000/gym-management`)


}
