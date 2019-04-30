//Install express server
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const { DATABASE_URL } = process.env;
const server = http.createServer((req, res) => {
  const client = new Client({
    connectionString: DATABASE_URL,
  });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  client.connect()
    .then(() => client.query('SELECT * FROM todos'))
    .then((result) => {
      res.end(`${result.rows[0].name}\n`);
      client.end();
    })
    .catch(() => {
      res.end('ERROR');
      client.end();
    });
});
// Serve only the static files form the dist directory
app.use(express.static('./dist/demo-listing'));

app.get('/*', function(req,res) {
    const { Client } = require('pg');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);


 