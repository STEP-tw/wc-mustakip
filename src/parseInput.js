const {flat} = require("./util.js");
const hasOption = x => x.startsWith("-");
const isFile = x => !x.startsWith("-");
const allowedOptions = ["l", "w", "c"];

const extractEachOption = function(optionGroup) {
  return optionGroup.slice(1).split("");
};

const unique = function(elementsTillNow, currentElement) {
  if (!elementsTillNow.includes(currentElement)) {
    elementsTillNow.push(currentElement);
    return elementsTillNow;
  }
  return elementsTillNow;
};

const arrangeOptions = function(options) {
  let arrangedOptions = allowedOptions.filter(x => options.includes(x));
  return arrangedOptions;
};

const parseInput = function(userInput) {
  let options;
  let file;
  if (hasOption(userInput[0])) {
    let possibleOptions = userInput.filter(hasOption);
    possibleOptions = possibleOptions.map(extractEachOption);
    possibleOptions = flat(possibleOptions);
    let options = possibleOptions.reduce(unique, []);
    options = options.filter(x => allowedOptions.includes(x));
    options = arrangeOptions(options);

    file = userInput.filter(isFile);
    return {file, options};
  }
  return {
    options: ["l", "w", "c"],
    file: userInput
  };
};

module.exports = {
  parseInput
};
