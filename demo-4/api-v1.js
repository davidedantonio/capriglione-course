async function routes (fastify, options) {
  fastify.route({
    method: 'GET',
    url: '/',
    onRequest: async (request, reply) => {
      fastify.log.info("onRequest")
    },
    preParsing: async (request, reply) => {
      fastify.log.info("preParsing")
    },
    preValidation: async (request, reply) => {
      fastify.log.info("preValidation")
    },
    preHandler: async (request, reply) => {
      fastify.log.info("preHandler")
    },
    preSerialization: async (request, reply) => {
      fastify.log.info("preSerialization")
    },
    onResponse: async (request, reply) => {
      fastify.log.info("onResponse")
    },
    handler: async (request, reply) => {
      return { hello: 'world' }
    }
  })
}

module.exports = routes