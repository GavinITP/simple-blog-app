const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// do every time req comes in, but when it reaches this
// like default in switch case
app.use((req, res) => {
  // res.status() returns res
  res.status(400).sendFile("./views/404.html", { root: __dirname });
});
