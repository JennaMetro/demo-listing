//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/demo-listing'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/demo-listing/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

var pg = require('pg');
 
app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {   
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
      console.log("toimi");
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});
 