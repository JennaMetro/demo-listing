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

app.get('/*', function(req,res) {
    const { Client } = require('pg');

});

// Start the app by listening on the default Heroku port


const pool = new pg.Pool(config);

app.get('/', (req, res, next) => {
   pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       client.query('SELECT * FROM todos', function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
       })
   })
});

app.listen(process.env.PORT || 4000, function () {
    console.log('Server is running.. on Port something');
});