const User = require("./todo");
const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config();

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB database');
  } catch (err) {
    console.error('Error connecting to MongoDB database:', err.message);
  }
}
export const disconnectFromDB = async () => {
  try {
    mongoose.disconnect();
    console.log('Successfully disconnected from MongoDB database');
  } catch (e) {
    console.log('Error disconnecting from MongoDB database:', e.message);
  }
}
