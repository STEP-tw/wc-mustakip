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

const justifyAndConcat = function({fileCounts, fileName}) {
  let justifiedCounts = fileCounts.map(justifyRight.bind(null, 8));
  justifiedCounts.push(SPACE + fileName);
  return justifiedCounts.join("");
};

const singleFileFomatter = function(files) {
  let justifiedCounts = files.map(justifyAndConcat);
  return justifiedCounts[0];
};

add = function(list1, list2) {
  let addedList = [];
  for (i in list2) {
    addedList[i] = list2[i] + list1[i];
  }
  return addedList;
};

const addCounts = function(additionTillNow, {fileCounts}) {
  if (additionTillNow == "") {
    return fileCounts;
  }
  let addition = add(additionTillNow, fileCounts);

  return addition;
};

const multipleFileFormatter = function(files) {
  let totalCounts = files.reduce(addCounts, []);
  totalCounts = totalCounts.map(justifyRight.bind(null, 8));
  totalCounts.push(SPACE + "total");

  let justifiedCounts = files.map(justifyAndConcat);
  justifiedCounts.push(totalCounts.join(""));
  return justifiedCounts.join("\n");
};

const decideFormatter = function(numberOfFiles) {
  if (numberOfFiles == 1) {
    return singleFileFomatter;
  }
  return multipleFileFormatter;
};

const getWordsCount = function(args, fs) {
  let {file, options} = args;
  let formatter = decideFormatter(file.length);
  let files = file.map(read.bind(null, fs));
  files = files.map(getCounts.bind(null, options));

  return formatter(files);
};

module.exports = {
  getWordsCount,
  getNumberOfChars,
  getNumberOfLines,
  getNumberOfWords,
  read
};
