const fs = require("fs");

// (asynchronous = take some times before doing callback function)

// read
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) console.log(err);
  else {
    console.log(data); // buffer
    console.log(data.toString()); // text
  }
});

// write
fs.writeFile("./docs/blog1.txt", "Here is my written message", () => {
  console.log("file was written");
});

// create new file if it doesn't exist
fs.writeFile("./docs/blog2.txt", "Here is my written message", () => {
  console.log("file was written in blog2");
});

// create directories (handle error if it already exist)

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) console.log(err);
    else console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) console.log(err);
    else console.log("folder deleted");
  });
}

// delete
if (fs.existsSync("./docs/deleteMe.txt")) {
  fs.unlink("./docs/deleteMe.txt", (err) => {
    if (err) console.log(err);
    else console.log("file deleted");
  });
}
