const { Client } = require("pg");
const get_client = () =>
  new Client({
    user: "docker",
    password: "password",
    database: "powergrid",
    host: "localhost"
  });

const getGames = async () => {
  const client = get_client();
  await client.connect();
  const games = await client.query("SELECT * FROM games");
  client.end();

  return games.rows;
};

const addGame = async game => {
  const client = get_client();
  await client.connect();

  await client.query("INSERT INTO games (winner_id, time) VALUES ($1, $2)", [
    game.winner_id,
    game.time
  ]);
  client.end();
  return true;
};

module.exports = {
  getGames,
  addGame
};
