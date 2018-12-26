const assert = require("assert");
const {
  getWordsCount,
  getNumberOfChars,
  getNumberOfLines,
  getNumberOfWords
} = require("../src/wcLib.js");

describe("getWordsCount", function() {
  let file1 = "This is first\n";
  file1 += "This is second\n";

  let file2 = "This\n";
  file2 += "This is name\n";
  file2 += "This is cake\n";

  const files = {
    file1: file1,
    file2: file2
  };

  const readFileSync = function(filePath) {
    return files[filePath];
  };

  let fs = {readFileSync};

  it("should return word,line and chars count for the given input file", function() {
    let args = ["file1"];
    let expectedOutput = "       2       6      29 file1";
    assert.deepEqual(getWordsCount(args, fs), expectedOutput);
  });

  it("should return word,line and chars count for the given input file", function() {
    let args = ["file2"];
    let expectedOutput = "       3       7      31 file2";
    assert.deepEqual(getWordsCount(args, fs), expectedOutput);
  });
});
describe("getNumberOfChars", function() {
  it("should return count of chars in the given content", function() {
    assert.deepEqual(getNumberOfChars("simplicity"), 10);
  });
  it("should take '\n'as a single character", function() {
    let content = "Nice day\n";
    content += "Very nice day";
    assert.deepEqual(getNumberOfChars(content), 22);
  });
  it("should return 0 for empty input content", function() {
    assert.deepEqual(getNumberOfChars(""), 0);
  });
});

describe("getNumberOfLines", function() {
  it("should return count of lines 1 for single line", function() {
    assert.deepEqual(getNumberOfLines("simplicity\n"), 1);
  });
  it("should return count of lines for given content", function() {
    let content = "Nice day\n";
    content += "Very nice day";
    assert.deepEqual(getNumberOfLines(content), 1);
  });
  it("should return 0 for no line in input", function() {
    assert.deepEqual(getNumberOfLines(""), 0);
  });
});
