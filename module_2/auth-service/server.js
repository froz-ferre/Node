const http = require('http');
const fs = require('fs');
const url = require('url');
const db = require('./db/db-adapter');

const PORT = 3000;

const server = http.createServer(async (req, res) => {

  const urlObj = url.parse(req.url, true);

  switch (urlObj.pathname) {
    case '/': {
      fs.readFile(__dirname + '/assets/home.html', (err, data) => {
        if (err) {
          res.writeHead(500);
          res.write('Oops! Server error :C');
          res.end(JSON.stringify(err));
        }

        res.writeHead(200);
        res.end(data);
      });
      break;
    }
    case '/register': {
      const query = urlObj.query;

      if (!Object.keys(query).length) {
        fs.readFile(__dirname + '/assets/register.html', (err, data) => {
          if (err) {
            res.writeHead(500);
            res.write('Oops! Server error :C');
            res.end(JSON.stringify(err));
          }

          res.writeHead(200);
          res.end(data);
        });
        break;
      }

      const { name, lastname, login, password, email, birthday } = query;
      if (login && password && name && lastname && email && birthday) {
        try {
          const newUser = await db.addUser(name, lastname, login, password, email, birthday);
          const result = `
            Status: OK,
            Account registered: ${JSON.stringify(newUser.rows[0])}
          `;
          res.writeHead(200);
          res.end(result);
        } catch (err) {
          console.log(err);
          res.writeHead(500);
          res.end('Server error');
        }

        break;
      }

      res.writeHead(400);
      res.end('BAD REQUEST');
      break;
    }
    case '/login': {
      const query = urlObj.query;

      if (!Object.keys(query).length) {
        fs.readFile(__dirname + '/assets/login.html', (err, data) => {
          if (err) {
            res.writeHead(500);
            res.write('Oops! Server error :C');
            res.end(JSON.stringify(err));
          }

          res.writeHead(200);
          res.end(data);
        });
        break;
      }

      const { login, password } = query;
      if (login && password) {
        try {
          const user = await db.getUser(login, password);
          const result = user.rows[0] ? `
            Status: OK,
            Logged in as: ${JSON.stringify(user.rows[0])}
          `
          : `
            Status: Failed
            Login or password incorrect!
          `;
          res.writeHead(200);
          res.end(result);
        } catch (err) {
          console.log(err);
          res.writeHead(500);
          res.end('Server error');
        }

        break;
      }

      res.writeHead(400);
      res.end('BAD REQUEST');
      break;
    }
    default: {
      fs.readFile(__dirname + '/assets/404.html', (err, data) => {
        if (err) {
          res.writeHead(500);
          res.write('Oops! Server error :C');
          res.end(JSON.stringify(err));
        }

        res.writeHead(200);
        res.end(data);
      });
      break;
    }
  }
});

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
