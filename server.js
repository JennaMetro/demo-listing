//Install express server
const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static('./dist/demo-listing'));

// app.get('/*', function(req,res) {
//     const { Client } = require('pg');

// });

// app.listen(process.env.PORT || 8080);


 
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