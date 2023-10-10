const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'src', 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Require and use the routes defined in src/routes/index.js
const indexRouter = require('./src/routes/index');
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
