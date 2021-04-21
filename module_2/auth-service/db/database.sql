CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(100),
  login VARCHAR(50),
  password VARCHAR(30),
  birthday TIMESTAMP,
  created TIMESTAMP
);
