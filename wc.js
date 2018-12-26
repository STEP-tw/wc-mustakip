const {getWordsCount} = require("./src/wcLib.js");
const {parseInput} = require("./src/parseInput.js");
const fs = require("fs");

const main = function() {
  let args = parseInput(process.argv.slice(2));
  console.log(getWordsCount(args, fs));
};

main();
