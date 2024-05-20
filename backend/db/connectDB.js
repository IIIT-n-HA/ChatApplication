const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Connected to database.");
  } catch (error) {
    console.log("Error connecting to database.", error.message);
  }
};

module.exports = connectDB;
