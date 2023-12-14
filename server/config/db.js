const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongodb succcessfully ${conn.connection.host}`);
  } catch (error) {
    console.log(`Erorr in mongodb ${error}`);
  }
};

export default connectDB;
