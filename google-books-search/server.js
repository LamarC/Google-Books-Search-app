const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json);

if(process.env.NODE_EVN === "production") {
    app.use(express.static("client/build"));
}

//Routes
app.use(routes);

//Connect to Mongo DB
const moongoose = require("mongoose");
moongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });