// ESM
import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from 'fastify-mongodb'
// const MONGODB_URLtodo='mongodb://127.0.0.1:27017/todo' // this works fine
// test with the next line fails
const MONGODB_URLtodo='mongodb://admin:<Password>@SG-test-fastify-50496.servers.mongodirector.com:27017/todo?ssl=true&connectTimeoutMS=10000&authSource=admin&authSource=admin' // &authMechanism=SCRAM-SHA-1'
async function dbConnector (fastify, options) {
  fastify.register(fastifyMongo, {
    
    url:MONGODB_URLtodo
  })
}

export default fastifyPlugin(dbConnector)
