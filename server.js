const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Welcome to my hotel.');
});







//import the route file
const personroutes = require('./routes/personroutes.js');
const menuroutes = require('./routes/menuroutes.js');

//use the routers

app.use('/person',personroutes);
app.use('/menu',menuroutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
