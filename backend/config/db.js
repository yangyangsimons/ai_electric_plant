const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DNS);
    console.log(`Mongodb connected : ${conn.connection.host}`.cyan.bold);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
