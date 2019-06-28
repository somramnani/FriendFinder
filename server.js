
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());




// Routes
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`


// Starting the server, syncing our models ------------------------------------/
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
module.exports = app;
