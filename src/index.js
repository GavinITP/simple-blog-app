const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Blog = require("./models/Blog");

dotenv.config();

// express app
const app = express();

// connect to mongodb
const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((_result) => {
    console.log("connected to db");
    // listen for request after connected to db
    app.listen(3000, () => {
      console.log("running...");
    });
  })
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

// middleware & static files
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/add-blog", (_req, res) => {
  const blog = new Blog({
    title: "Where to travel in Thailand",
    snippet: "asdfadsf",
    body: "132412341234",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (_req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-blog/:blogId", (req, res) => {
  const blogId = req.params.blogId;

  Blog.findById(blogId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (_req, res) => {
  res.redirect("/blogs");
});

app.get("/blogs", (_req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/about", (_req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (_req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 page
app.use((_req, res) => {
  res.status(404).render("404", { title: "404" });
});
