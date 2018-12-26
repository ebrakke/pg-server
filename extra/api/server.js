// Require the framework and instantiate it
const fastify = require("fastify")();
const db = require("./db");

// Declare a route
fastify.get("/games", async (request, reply) => {
  const games = await db.getGames();
  return games;
});

fastify.post("/games", async (req, rep) => {
  await db.addGame({ winner_id: 1, time: 30 });
  return true;
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
