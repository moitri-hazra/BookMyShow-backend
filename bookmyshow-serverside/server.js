const express = require("express");
const app = express();
const { connection } = require("./db/connection");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const bookingRoute = require("./Routes/movieRoute");

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

connection(); // Connect to the MongoDB database

// Home page route
app.get("/", async (req, res) => {
  res.send("hi i am home page");
});

// Booking API route
app.use("/api", bookingRoute);

// Start the server
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
