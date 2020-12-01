require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
var path = require('path');

var folderBuild = path.join(__dirname, '...', 'client', 'build');
var buildIndex = path.join(__dirname, '...', 'client', 'build', 'index.html');

//Settings
app.use(cors());
const port = process.env.PORT || 3001;
const host = process.env.APP_HOST || '127.0.0.1';

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/api', require('./server/routes/index'));
app.listen(port, host);

app.use(express.static(folderBuild));

app.get('/', function(req, res) {
    res.sendFile(buildIndex);
});

console.log(`run server ${host}:${port}`);