const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const { faker } = require("@faker-js/faker");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
const User = require("./models/User");

// Handle unhandled promise rejections
process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error);
  process.exit(1);
});

// Connect to the database with error handling
mongoose.connect(process.env.DNS)
  .then(() => console.log('MongoDB Connected Successfully'.green))
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1); // Exit if connection fails
  });

console.log("Seeding data...".yellow);

// Function to import data into the database
const importData = async () => {
  try {
    console.log('Importing data...');
    const roles = ["user", "publisher"];

    // Create users
    for (let i = 1; i <= 100; i++) {
      const userObj = {
        name: `test${i}`,
        email: `test${i}@localhost.com`,
        password: "123456",
        role: roles[Math.floor(Math.random() * roles.length)],
      };
      await User.create(userObj);
    }
    console.log("Data imported".green.inverse);
  } catch (error) {
    console.error('Error importing data:', error);
  } finally {
    process.exit();
  }
};

// Function to delete data from the database
const deleteData = async () => {
  try {
    console.log('Deleting data...');
    await User.deleteMany();
    console.log("Data destroyed".red.inverse);
  } catch (error) {
    console.error('Error deleting data:', error);
  } finally {
    process.exit();
  }
};

// Call the desired function based on command line argument
if (process.argv[2] === "-i") {
  importData().catch(err => {
    console.error('Error during data import:', err);
    process.exit(1);
  });
} else if (process.argv[2] === "-d") {
  deleteData().catch(err => {
    console.error('Error during data deletion:', err);
    process.exit(1);
  });
} else {
  console.log("Invalid command. Use -i to import data or -d to delete data.".red);
  process.exit(1);
}
