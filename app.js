const express = require("express");

const app = express();

// view engine
app.set("view engine", "ejs");

app.listen(3000);

app.use((req, res, next) => {
  console.log("new request made");
  console.log("host:", req.hostname);
  console.log("path:", req.path);
  console.log("method:", req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Hi I'm second middleware");
  next();
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];

  res.render("index", { title: "Home", blogs: blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create new blog" });
});

// do every time req comes in, but when it reaches this
// like default in switch case
app.use((req, res) => {
  // res.status() returns res
  res.status(400).render("404", { title: "404" });
});
