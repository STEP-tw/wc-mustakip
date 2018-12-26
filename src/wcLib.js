const {flat, NEW_LINE, SPACE, justifyRight} = require("../src/util.js");

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

const getWordsCount = function(args, fs) {
  let {file, options} = args;
  let {readFileSync} = fs;
  let content = readFileSync(file, "utf8");
  let counts = {
    l: getNumberOfLines(content),
    w: getNumberOfWords(content),
    c: getNumberOfChars(content)
  };

  let allCounts = options.reduce(function(p, c) {
    return p.concat(counts[c]);
  }, []);

  let params = allCounts.map(justifyRight.bind(null, 8));
  params.push(SPACE + file);
  return params.join("");
};

module.exports = {
  getWordsCount,
  getNumberOfChars,
  getNumberOfLines,
  getNumberOfWords
};
