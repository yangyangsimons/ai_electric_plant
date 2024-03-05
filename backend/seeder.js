const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const { faker } = require("@faker-js/faker");
//Load env vars
dotenv.config({ path: "./config/config.env" });

// load models
const user = require("./models/User");

// connect database
mongoose.connect(process.env.DNS);

// import into db
const importData = async () => {
  const roles = ["user", "publisher"];
  const userIds = [];

  // create users
  for (i = 1; i < 100; i++) {
    const userObj = {
      name: `test${i}`,
      email: `test${i}@localhost.com`,
      password: "123456",
      role: roles[Math.floor(Math.random() * roles.length)],
    };
    let u = await user.create(userObj);
  }
  // exit from the process
  console.log("Data imported".green.inverse);
  process.exit();
};

const deleteData = async () => {
  try {
    await user.deleteMany();
    console.log("Data destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.log(error.message);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] == "-d") {
  deleteData();
}
