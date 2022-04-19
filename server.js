require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ success: true, message: "this is root method." });
});

app.listen(80, () =>
  console.log(`server is running on port: ${process.env.PORT}`)
);
