const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
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
      res.statusCode = 200;
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for req");
});
