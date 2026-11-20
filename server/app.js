// Core Module
const path = require("path");
require("dotenv").config();

// External Module
const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");
const rootDir = require("./utils/pathUtil");
const todoItemsRouter = require("./routes/todoItemsRouterjs");

const MONGO_URI =
  "mongodb+srv://sudipsamanta8583_db_user:iOLWGEHPcEuhYmUf@cluster0.pfd22yk.mongodb.net/<database>";

require("node:dns").setServers(["1.1.1.1", "8.8.8.8"]);

const errorsController = require("./controlers/errors");

const app = express();

app.use(express.urlencoded({ extended: true }));


app.use(express.json());
app.use(cors());


app.use("/api/todo",todoItemsRouter);

app.use(errorsController.pageNotFound);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(MONGO_URI, { dbName: "ToDoApp" })
  .then(() => {
    console.log("Connected to Mongoose");
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error while connecting to Mongoose: ", err.message);
    process.exit(1);
  });
