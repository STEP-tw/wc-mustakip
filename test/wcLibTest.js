const assert = require("assert");
const {getWordsCount} = require("../src/wcLib.js");

describe("getWordsCount", function() {
  let file1 = "This is first\n";
  file1 += "This is second";

  const files = {
    file1: file1
  };

  const readFileSync = function(filePath) {
    return files[filePath];
  };

  let fs = {readFileSync};

  it("should return word,line and chars count for the given input file", function() {});
  let args = ["file1"];
  let expectedOutput = "       2       6      28 file1";
  assert.deepEqual(getWordsCount(args, fs), expectedOutput);
});
