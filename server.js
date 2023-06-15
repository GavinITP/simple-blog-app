const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("req comes in");
  res.setHeader("Content-type", "text/html");

  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end("Error happened");
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for req");
});
