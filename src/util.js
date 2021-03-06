const SPACE = " ";
const HYPHEN = "-";
const NEW_LINE = "\n";

const concat = function(list1, list2) {
  return list1.concat(list2);
};

const repeatChars = function(character, times) {
  if (times <= 0) {
    return "";
  }
  return new Array(Math.floor(times)).fill(character).join("");
};

const flat = function(list) {
  let flatList = list.reduce(concat, []);
  return flatList;
};

const justifyRight = function(length, number) {
  let text = number.toString();
  let trailingSpacesCount = length - text.length;
  let spaces = repeatChars(SPACE, trailingSpacesCount);
  return spaces + text;
};

module.exports = {
  concat,
  repeatChars,
  flat,
  SPACE,
  NEW_LINE,
  HYPHEN,
  justifyRight
};
