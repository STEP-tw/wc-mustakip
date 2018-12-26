const {getWordsCount} = require("./src/wcLib.js");
const fs = require("fs");

const main = function() {
  args = process.argv.slice(2);
  console.log(getWordsCount(args, fs));
};

main();
