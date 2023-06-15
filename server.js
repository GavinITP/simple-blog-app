const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  const num = _.random(10, 100);
  console.log(num);

  const greet = () => {
    console.log("hello");
  };

  res.setHeader("Content-type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me": // redirect
      res.statusCode = 301;
      res.setHeader("location", "/about");
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  fs.readFile(path, (err, data) => {
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
