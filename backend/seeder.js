const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const Pizza = require("./Models/pizzaModel");
const Pizzas = require("./data/pizza-data");
const connectDB = require("./config/config");

//dotenv connect
dotenv.config();
connectDB();

//import Data
const importData = async () => {
  try {
    await Pizza.deleteMany();
    const sampleData = Pizzas.map((pizza) => {
      return { ...pizza };
    });
    await Pizza.insertMany(sampleData);
    console.log("Data Imported".bgGreen.white);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed.white);
    process.exit(1);
  }
};
const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
