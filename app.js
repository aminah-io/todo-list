require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser).

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let today = new Date();

  if (today.getDay() === 6 || today.getDay() === 0) {
    res.send(`It's the weekend baby!`)
  } else if (today.getDay() === 5) {
    res.send(`IT'S FRIDAY BABAY!`)
  } else {
    res.send(`Welp, gotta party on a week day anyway BABY!`)
  }
})



app.listen(port, () => {
  console.log(`Listening on port ${port}, baby, YEAH!`);
})