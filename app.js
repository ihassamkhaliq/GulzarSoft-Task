const express = require('express')
const cors = require('cors')
const ejs = require('ejs')
const cookieParser = require('cookie-parser')
const app = express()
const routes = require('./routes/index')
app.use(express.json())
app.use(cors())
app.use(cookieParser())

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/index', function(req, res) {
    res.render('pages/index');
  });

  app.get('/list', function(req, res) {
    res.render('pages/list');
});

app.use("/",routes)


app.listen(3000,console.log("I'm at Local Host 3000"))