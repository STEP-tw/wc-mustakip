const SPACE = " ";
const NEW_LINE = "\n";

const concat = function(flatList, list) {
  return list.forEach(x => flatList.push(x));
};

const repeatChars = function(character, times) {
  return new Array(Math.floor(times)).fill(character).join("");
};

const flat = function(list) {
  let flatList = [];
  list.map(concat.bind(null, flatList));
  return flatList;
};

const getNumberOfChars = function(content) {
  let chars = content.split("");
  return chars.length;
};

const getNumberOfLines = function(content) {
  let lines = content.split(NEW_LINE);
  if (lines[lines.length - 1] == "") {
    lines.pop();
  }
  return lines.length;
};

const getNumberOfWords = function(content) {
  let lines = content.split(NEW_LINE);
  let words = lines.map(x => x.split(SPACE));
  words = flat(words);
  words = words.filter(x => x != "");
  return words.length;
};

const justifyRight = function(length, number) {
  let text = number.toString();
  let trailingSpacesCount = length - text.length;
  let spaces = repeatChars(SPACE, trailingSpacesCount);
  return spaces + text;
};

const getWordsCount = function(args, fs) {
  let file = args[0];
  let {readFileSync} = fs;
  let content = readFileSync(file, "utf8");
  let linesCount = getNumberOfLines(content);
  let wordsCount = getNumberOfWords(content);
  let charsCount = getNumberOfChars(content);
  let allCounts = [linesCount, wordsCount, charsCount];
  let params = allCounts.map(justifyRight.bind(null, 8));
  params.push(SPACE + file);
  return params.join("");
};

module.exports = {
  getWordsCount
};
