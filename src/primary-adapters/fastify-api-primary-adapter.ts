import fastify from 'fastify';
import { JsonStoreSecondaryAdapter } from '../secondary-adapters/json-store-secondary-adapter';
import { FastifyService } from '../business/greeting-service';

export default function createApp(options = {}) {
  const app = fastify(options)
  const jsonStore = new JsonStoreSecondaryAdapter();
  const fastifyService = new FastifyService(jsonStore);

  app.get('/hello', async () => {
    return { hello: 'World!' }
  })

  app.post('/greet', async (request, reply) => {
    const { name } = request.body as { name: string };
    try {
      const response = fastifyService.greet(name);
      return reply.send(response);
    } catch (error) {
      if (error instanceof Error) {
        reply.status(400).send({ error: error.message });
      } else {
        reply.status(400).send({ error: 'An unexpected error occurred' });
      }
    }
  });

  return app;
}