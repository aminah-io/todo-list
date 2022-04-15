require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('some words')
})



app.listen(port, () => {
  console.log(`Listening on port ${port}, baby, YEAH!`);
})