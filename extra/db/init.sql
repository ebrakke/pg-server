CREATE USER docker;
CREATE DATABASE powergrid;

\connect powergrid

DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS games;

CREATE TABLE games (
  id serial not null,
  winner_id integer not null,
  time integer not null
);

CREATE TABLE players (
  id serial not null
);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO docker;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO docker;
ALTER USER docker WITH PASSWORD 'password';
