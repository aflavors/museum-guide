const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
//const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

//Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Add routes
app.use(routes);

//Connect to the Mongo DB museumguideobjects
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/museumguideobjects", 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

//Start the API server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
