const express = require('express');
const path = require('path')
const fs = require('fs');
const app = express();
const port = 8000;

// EXPRESS RELATED STUFF
app.use(express.static('static'));  // for seving static files
app.use("/static", express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded());

// PUG SPECEFIC STUFF 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    const con = "This is the best content"
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{
    const con = "This is the best content"
    const params = {}
    res.status(200).render('contact.pug', params);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started succesfully at port ${port}`);
})