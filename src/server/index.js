// Setup empty JS object to act as endpoint for all routes
projectData = {};

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Setup Server
const port = 3000;
const server = app.listen(port, listening);
//console.log to debug
function listening() {
    console.log('The server is running');
    console.log('Running on localhost: ${port}');
};

// POST route
const data = [];
app.post('/add', addInfo);

function addInfo(req, res) {
  projectData['date'] = req.body.date;
  projectData['temp'] = req.body.temp;
  projectData['content'] = req.body.content;
  res.send(projectData);
}

app.get('/all', getInfo);

function getInfo(req, res) {
  res.send(projectData);
}

//NEED TO REVIEW. ADDED FROM SETUP IN FEND 5.2.13
app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})