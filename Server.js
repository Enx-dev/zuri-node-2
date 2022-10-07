const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/home") {
    res.writeHead(302, { Location: "/" });
    res.end();
  }
  if (url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (!err) {
        res.write(data);
        res.end();
      }
    });
  }
  if (url === "/about") {
    fs.readFile(path.join(__dirname, "about.html"), (err, data) => {
      if (!err) {
        res.write(data);
        res.end();
      }
    });
  }
  if (url === "/contact") {
    fs.readFile(path.join(__dirname, "contact.html"), (err, data) => {
      if (!err) {
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(3000);
console.log("live server");
