//Install express server
const express = require('express');
const path = require('path');
var bodyParser = require("body-parser");
const app = express();
const pg = require('pg')
app.use(bodyParser.json());

var CONTACTS_COLLECTION = "todos";

var db;
const config = {
    user: 'gtimpgwatvnyol',
    database: 'de3smnuvvre1it',
    password: '6b47ed8387b55c90ccf77268f912d651b6d84a1e2f89b23d11dda847f8f4ccfa',
    port: 5432
};

// Serve only the static files form the dist directory
app.use(express.static('./dist/demo-listing'));


// Start the app by listening on the default Heroku port

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

app.listen(process.env.PORT || 4200, function () {
    console.log('Server is running.. on Port something');
});