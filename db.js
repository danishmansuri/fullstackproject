const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // MongoDB Atlas Connection String
    await mongoose.connect(
      "mongodb+srv://hp5211804:grwEn5.uZnH8TXA@jobportaldb.py4d0aa.mongodb.net/?retryWrites=true&w=majority&appName=jobportaldb",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully"); // Successful connection message
  } catch (error) {
    console.error("MongoDB connection failed:", error.message); // Error if connection fails
    process.exit(1); // Exit if connection fails
  }
};

module.exports = connectDB;
