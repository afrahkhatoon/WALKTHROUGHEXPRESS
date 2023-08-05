const express = require("express");

const app = express();

const PORT = 3000;
const HOSTNAME = "localhost";

let counter = 0;

app.get("/", (req, res) => {
  res.json({ counter: counter });
});

app.get("/increment", (req, res) => {
  res.json({ counter: ++counter });
});

app.get("/decrement", (req, res) => {
  res.json({ counter: --counter });
});

app.listen(PORT, () => {
  console.log(`Server Running at ${HOSTNAME}:${PORT}`);
});