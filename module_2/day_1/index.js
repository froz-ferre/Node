const { task1, task2 } = require('./demo_1/tasks');
const http = require('http');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true, true);
  const task = parsedUrl.pathname.replace('/', '');
  const params = parsedUrl.query;

  res.writeHead(200, { 'Content-Type' : 'text/html' });
  switch (task) {
    case 'task1':
      res.write(`<h1><pre>${task1.build(+params.h || 2, +params.w || 2, params.s || '*')}</pre></h1>`);
      break;
    case 'task2':
      res.write(`<h1>${task2.check({a: params.a || 10, b: params.b || 10}, {c: params.c || 8, d: params.d || 8})}</h1>`);
      break;
    default:
      res.writeHead(404, { 'Content-Type' : 'text/html' });
      res.write('<h1>404 - Unknown task :C</h1>');
      break;
  }

  res.end();
});
server.listen(PORT);
console.log(`Server started on port: ${PORT}`);
