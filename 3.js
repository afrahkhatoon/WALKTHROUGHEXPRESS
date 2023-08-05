const express = require("express");

const app = express();

const PORT = 3000;
const HOSTNAME = "loacalhost";

app.get("/", (req, res) => {
  res.json({ msg: "I am homepage" });
});

app.get("/about", (req, res) => {
  res.json({ msg: "I am about Page" });
});

app.get("/contact", (req, res) => {
  res.json({ email: "supports@pwskills.com" });
});

app.listen(PORT, () => {
  console.log(`Server Running at ${HOSTNAME}:${PORT}`);
});