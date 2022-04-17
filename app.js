require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
const ejs = require('ejs');
const date = require(__dirname + '/date');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

//----------- Global variables -----------
let items = [];
let year = date.getYear();

app.get('/', (req, res) => {
  let day = date.getDate();
  
  res.render('list', { weekDay: day, listItems: items, theYear: year });
})

app.post('/', (req, res) => {
  let item = req.body.newItem
  items.push(item);

  res.redirect('/')
})

app.get('/about', (req, res) => {
  res.render('about', { theYear: year });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}, baby, YEAH!`);
})