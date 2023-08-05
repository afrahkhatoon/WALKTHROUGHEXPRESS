const http = require("http");
const menProductData = require("./men'sProductData");
const womenProductData = require("./women'sProductData");

const PORT = 3140;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Welcome to Men & Women Dummy Data");
  } else if (req.url == "/men") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(menProductData));
    console.log("ProductData is : ", menProductData);
  } else if (req.url == "/women") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(womenProductData));
    console.log("ProductData is : ", womenProductData);

  } else {
    res.end("Page Not Found!");
  }
});

server.listen(PORT, () => {
  console.log(`Server Running at ${HOSTNAME}:${PORT}`);
});