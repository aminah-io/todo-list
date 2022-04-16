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


app.get('/', (req, res) => {
  let today = new Date();
  let theDay = today.getDay();
  let actualDay;
  
  switch(theDay) {
    case 0:
      actualDay = 'Sunday';
      break;
    case 1:
      actualDay = 'Monday';
      break;
    case 2:
      actualDay = 'Tuesday';
      break;
    case 3:
      actualDay = 'Wednesday';
      break;
    case 4:
      actualDay = 'Thursday';
      break;
    case 5:
      actualDay = 'Friday';
      break;
    case 6:
      actualDay = 'Saturday';
      break;
    default:
      console.log(`Error! The current day is equal to ${theDay}`);
  }
  
  res.render('list', { weekDay: actualDay });
  // if (today.getDay() === 6 || today.getDay() === 0) {
  //   res.send(`It's the weekend baby!`)
  // } else if (today.getDay() === 5) {
  //   res.send(`IT'S FRIDAY BABAY!`)
  // } else {
  //   res.send(`Welp, gotta party on a week day anyway BABY!`)
  // }
})



app.listen(port, () => {
  console.log(`Listening on port ${port}, baby, YEAH!`);
})