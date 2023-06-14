const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request comes in");
}); // callback function that run every time request come in

//localhost:3000
server.listen(3000, "localhost", () => {
  // loopback ip , port = door into server
  console.log("listening for request on port 3000");
});
