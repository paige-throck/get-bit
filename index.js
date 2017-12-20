'use strict';

// Setting up express, path, and body parser.
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 8888;

// Requiring the code for the accounts, jokes, and perofmrnaces routes.
const accountsRoute = require('./routes/accounts.js');
const jokesRoute = require('./routes/jokes.js');
const performanesRoute = require('./routes/performances.js');

// Disabling the x-powered-by: Express header, for security.
app.disable('x-powered-by');

// Telling the application that when the status route is used, it will look in the public folder for resources.
app.use('/static', express.static(path.join(__dirname, 'public')));

// Telling our applications where the template files are located.
app.set('views', './views');

// Telling express what view engine we're using.
app.set('view engine', 'ejs');

// Middleware. Body-Parser and Morgan.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('short'));

app.use('/accounts', accountsRoute);
app.use('/jokes', jokesRoute);
app.use('/performances', performanesRoute);

// Rendering the EJS for the landing page for a request to root.
app.get('/', (req,res) => {
  res.render(path.join(__dirname, 'views/index.ejs'), {
  });
});


// Turning on listening on the specified port.
app.listen(port, () => {
  console.log('Listening on port', port);
});


module.exports = app;