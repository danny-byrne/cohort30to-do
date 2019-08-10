const express = require('express');
const path = require('path');
const app = express();
// const pool = require('./database.js');
const bodyParser = require('body-parser');
const dbController = require('./controllers.js');

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, './client')));
//app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

app.post('/add', dbController.add, (req, res) => {
    res.json(res.locals.id)
})


app.post('/delete', dbController.delete, (req, res)=> {
    res.json("You deleted.")
})




app.listen(3000, () => console.log('listening on port:3000'));

