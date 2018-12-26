const {SPACE} = require("./util.js");
const {justifyRight} = require("./util.js");

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

const getFormatter = function(numberOfFiles) {
  if (numberOfFiles == 1) {
    return singleFileFomatter;
  }
  return multipleFileFormatter;
};

const justifyAndConcat = function({fileCounts, fileName}) {
  let justifiedCounts = fileCounts.map(justifyRight.bind(null, 8));
  justifiedCounts.push(SPACE + fileName);
  return justifiedCounts.join("");
};

module.exports = {
  getFormatter,
  multipleFileFormatter,
  singleFileFomatter,
  justifyAndConcat,
  add,
  addCounts
};
