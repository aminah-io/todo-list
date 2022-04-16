require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
const ejs = require('ejs');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

//----------- Global variables -----------
let items = [];

app.get('/', (req, res) => {
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }
  
  let today = new Date;
  let actualDate = today.toLocaleDateString('en-US', options);


  res.render('list', { weekDay: actualDate, listItems: items });
})

app.post('/', (req, res) => {
  let item = req.body.newItem
  items.push(item);

  res.redirect('/')
})



app.listen(port, () => {
  console.log(`Listening on port ${port}, baby, YEAH!`);
})