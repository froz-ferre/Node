const postgre = require('./postgre-connection');

class DbAdapter {
  addUser(name, lastname, login, password, email, birthday) {
    return postgre.query('INSERT INTO users (firstname, lastname, login, password, email, birthday, created) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, lastname, login, password, email, birthday, new Date()]);
  }

  getUser(login, password) {
    return postgre.query('SELECT firstname, lastname, login FROM users WHERE login = $1 AND password = $2;', [login, password]);
  }
}

module.exports = new DbAdapter();
