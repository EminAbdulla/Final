const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./Routes/Final.routes");
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb+srv://Emin:emin2004@cluster0.uwlnvcj.mongodb.net/")
  .then(() => {
    console.log("connected to db");
  });
app.use("/final", router);
app.listen(8000, () => {
  console.log("app running on 8000");
});