// stream =
// don't have to take data all at once
// deliver it like a waterfall

// small chunk of data = buffer

const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// read for each chuck
readStream.on("data", (chunk) => {
  console.log("---new chunk---");
  console.log(chunk.toString());

  writeStream.write("---NEW CHUNK---\n");
  writeStream.write("555\n" + chunk);
});

// pipe (read and write stream)
readStream.pipe(writeStream);
