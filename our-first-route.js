export default async function routes (fastify, options) {
    const collection = fastify.mongo.db.collection('test_collection')
  
    fastify.get('/', async (request, reply) => {
      return { hello: 'world' }
    })
  
   fastify.get('/todo', async (request, reply) => {
      const result = await collection.find().toArray()
      if (result.length === 0) {
        throw new Error('No documents todo found')
      }
      return result
    })
    

  }
