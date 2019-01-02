const {flat} = require("./util.js");
const hasOption = x => x.startsWith("-");
const isFile = x => !x.startsWith("-");
const isValidOption = option => allowedOptions.includes(option);

const allowedOptions = ["l", "w", "c"];

const extractEachOption = function(optionGroup) {
  return optionGroup.slice(1).split("");
};

const getUnique = function(list) {
  return list.reduce(unique, []);
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

const getAllUniqueOptions = function(userInput) {
  let allListedOptions = userInput.filter(hasOption).map(extractEachOption);
  let allOptions = flat(allListedOptions);
  return getUnique(allOptions);
};

const getValidOpts = function(optionList) {
  let validOptions = optionList.filter(isValidOption);
  return arrangeOptions(validOptions);
};

const parseInput = function(userInput) {
  let options;
  let file;
  if (hasOption(userInput[0])) {
    let allUniqueOptions = getAllUniqueOptions(userInput);
    options = getValidOpts(allUniqueOptions);
    filePaths = userInput.filter(isFile);
    return {filePaths, options};
  }
  return {
    options: ["l", "w", "c"],
    filePaths: userInput
  };
};

module.exports = {
  parseInput
};
