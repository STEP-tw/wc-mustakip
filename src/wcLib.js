const {flat, NEW_LINE, SPACE} = require("../src/util.js");
const {getFormatter} = require("./formatOutput.js");

const getNumberOfChars = function(content) {
  return content.length;
};

const getNumberOfLines = function(content) {
  let chars = content.split("");
  let lines = chars.filter(x => x == NEW_LINE);
  return lines.length;
};

const getNumberOfWords = function(content) {
  let lines = content.split(NEW_LINE);
  let words = lines.map(x => x.split(SPACE));
  words = flat(words);
  words = words.filter(x => x != "");
  return words.length;
};

const read = function({readFileSync}, filePath) {
  let fileName = filePath;
  let fileContent = readFileSync(filePath, "utf8");
  return {fileName, fileContent};
};

const getCounts = function(options, {fileName, fileContent}) {
  let counts = {
    l: getNumberOfLines(fileContent),
    w: getNumberOfWords(fileContent),
    c: getNumberOfChars(fileContent)
  };

  let fileCounts = options.reduce(function(p, c) {
    return p.concat(counts[c]);
  }, []);
  return {fileCounts, fileName};
};

const getWordsCount = function(args, fs) {
  let {filePaths, options} = args;
  let formatter = getFormatter(filePaths.length);
  let fileContents = filePaths.map(read.bind(null, fs));
  let countsandFilePaths = fileContents.map(getCounts.bind(null, options));

  return formatter(countsandFilePaths);
};

module.exports = {
  getWordsCount,
  getNumberOfChars,
  getNumberOfLines,
  getNumberOfWords,
  read
};
