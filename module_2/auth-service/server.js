const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {

  switch (req.url) {
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
    case '/login': {
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
