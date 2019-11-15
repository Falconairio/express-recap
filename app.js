const express = require('express');
const app = express();

app.use(express.static('public'))

//ROUTES

app.get('/',(req, res, next) => {
    console.log(__dirname );
  
    res.sendFile(__dirname + '/public/views/index.html');
})

app.get('/about', (req, res) => {
  console.log(__dirname );
  
  res.sendFile(__dirname + '/public/views/about.html');
})


//START SERVER

app.listen(3000, () => console.log("server running"));