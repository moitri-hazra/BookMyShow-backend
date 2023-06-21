const mongoose = require("mongoose");
require("dotenv").config();

// Get the MongoDB URI from the environment variables or use a default local URL
const mongoLiveURI =
  process.env.MONGO_URL || "mongodb+srv://moitriHazra:<8942898688Moi>@cluster0.dzxavsq.mongodb.net/?retryWrites=true&w=majority";

// Function to connect to the MongoDB database
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoLiveURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

// Call the connectToMongo function to establish the database connection
connectToMongo().catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Export the connectToMongo function to make it accessible outside the module
exports.connection = connectToMongo;
