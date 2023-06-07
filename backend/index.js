const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");

//config dotenv
dotenv.config();

//connection mongodb
connectDB();
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`
      .bgMagenta.white
  );
});
