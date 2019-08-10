const express = require('express');
const path = require('path');
const app = express();
// const pool = require('./database.js');
const bodyParser = require('body-parser');
const dbController = require('./controllers.js');

//body parser for handling body requests
app.use(bodyParser.json());

//server static elements like the .css file
app.use(express.static(path.resolve(__dirname, './client')));

//server the html page 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

//define middleware for handling post requests
//request body is the JSON of ourInput
app.post('/add', dbController.add, (req, res) => {
  //response converted from json
    res.json(res.locals.id)
    //returned from the fetch request, back to index.js
})


app.post('/delete', dbController.delete, (req, res)=> {
    res.json("You deleted.")
})




app.listen(3000, () => console.log('listening on port:3000'));

