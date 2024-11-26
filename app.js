const express = require("express");
const path = require("path");
const cors = require("cors");

const expenseRoutes = require("./routes/expenses");
const sequelize = require("./util/database");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/expenses", expenseRoutes);

sequelize
  .sync()
  .then((result) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("sequelize err", err);
  });
app.listen(3000);
