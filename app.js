const os = require("os");
console.log(os.platform(), os.homedir());

const { names, ages } = require("./people");
console.log(names, ages);

console.log(__dirname);
console.log(__filename);
