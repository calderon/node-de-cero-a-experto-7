const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(
  express.static('public')
);

app.get('/', (req, res) =>
  res.render('home', {
    name: 'Daniel Calderón',
    title: 'Curso de Node'
  })
);

app.get('/generic', (req, res) =>
  res.render('generic', {
    name: 'Daniel Calderón',
    title: 'Curso de Node'
  })
);

app.get('/elements', (req, res) =>
  res.render('elements', {
    name: 'Daniel Calderón',
    title: 'Curso de Node'
  })
);

app.get('*', (req, res) =>
  res.render('404', {
    name: 'Daniel Calderón',
    title: 'Page not found'
  })
);

app.listen(port, () =>
  console.log(`Listening ${port}`)
);
