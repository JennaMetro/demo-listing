const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/demo-listing'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'./dist/demo-listing/index.html'));
});

app.listen(process.env.PORT || 8080);