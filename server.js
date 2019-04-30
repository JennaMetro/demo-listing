//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/demo-listing'));

app.get('/*', function(req,res) {
    const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT * FROM todos;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
res.sendFile(path.join(__dirname,'/dist/demo-listing/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);


 