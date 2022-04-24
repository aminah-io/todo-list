require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
const ejs = require('ejs');
const mongoose = require('mongoose');
const { ifError } = require('assert');
const { ESRCH } = require('constants');
const date = require(__dirname + '/date');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@practice.rui7u.mongodb.net/todoListDB`);

const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 6,
    required: [true, 'Please enter an item please!']
  }
});

const Item = mongoose.model("Item", itemsSchema);


//----------- Global variables -----------
let items = [];
let year = date.getYear();

//----------- 
app.get('/', (req, res) => {
  let day = date.getDate();
  Item.find({}, function(err, foundItems) {
    if (err) {
      console.log(err);
    } else {
      res.render('list', { weekDay: day, listItems: foundItems, theYear: year });
    }
  })
})

app.post('/', (req, res) => {
  const item = req.body.newItem;

  const itemToAdd = new Item({
    name: item
  })

  itemToAdd.save()

  res.redirect('/')
})

app.post('/delete', (req, res) => {
  const checkedItemId = req.body.checkbox;
  Item.findByIdAndRemove(checkedItemId, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully deleted item.");
    }
  })
  res.redirect('/')
})

app.get('/about', (req, res) => {
  res.render('about', { theYear: year });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}, baby, YEAH!`);
})