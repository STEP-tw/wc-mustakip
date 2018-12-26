const assert = require("assert");
const {
  getWordsCount,
  getNumberOfChars,
  getNumberOfLines,
  getNumberOfWords,
  read
} = require("../src/wcLib.js");

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

describe("read", function() {
  it("should return the file content of the given filePath", function() {
    let filePath = "file1";
    let fileContent = "This is first\n";
    fileContent += "This is second\n";
    expectedOutput = {
      fileContent: fileContent,
      fileName: "file1"
    };
    assert.deepEqual(read(fs, filePath), expectedOutput);
  });
});
describe("getWordsCount", function() {
  describe("singleFile", function() {
    it("should return word,line and chars count for the given input file", function() {
      let args = {
        file: ["file1"],
        options: ["l", "w", "c"]
      };
      let expectedOutput = "       2       6      29 file1";
      assert.deepEqual(getWordsCount(args, fs), expectedOutput);
    });

    it("should return word,line and chars count for the given input file", function() {
      let args = {
        file: ["file2"],
        options: ["l", "w", "c"]
      };
      let expectedOutput = "       3       7      31 file2";
      assert.deepEqual(getWordsCount(args, fs), expectedOutput);
    });

    it("should return word count for the given input file for w as input option", function() {
      let args = {
        file: ["file1"],
        options: ["w"]
      };
      let expectedOutput = "       6 file1";
      assert.deepEqual(getWordsCount(args, fs), expectedOutput);
    });
    it("should return line count for the given input file for l as input option", function() {
      let args = {
        file: ["file1"],
        options: ["l"]
      };
      let expectedOutput = "       2 file1";
      assert.deepEqual(getWordsCount(args, fs), expectedOutput);
    });

    it("should return character count for the given input file for c as input option", function() {
      let args = {
        file: ["file1"],
        options: ["c"]
      };
      let expectedOutput = "      29 file1";
      assert.deepEqual(getWordsCount(args, fs), expectedOutput);
    });
  });

  describe("multipleFiles", function() {
    it("should return word,line and chars count for the multiple files", function() {
      let args = {
        file: ["file1", "file2"],
        options: ["l", "w", "c"]
      };
      let expectedOutput = "       2       6      29 file1\n";
      expectedOutput += "       3       7      31 file2\n";
      expectedOutput += "       5      13      60 total";

      assert.deepEqual(getWordsCount(args, fs), expectedOutput);
    });

    it("should return word count for multiple files for w as input option", function() {
      let args = {
        file: ["file1", "file2"],
        options: ["w"]
      };
      let expectedOutput = "       6 file1\n";
      expectedOutput += "       7 file2\n";
      expectedOutput += "      13 total";
      assert.deepEqual(getWordsCount(args, fs), expectedOutput);
    });
    it("should return line count for multiple files for l as input option", function() {
      let args = {
        file: ["file1", "file2"],
        options: ["l"]
      };
      let expectedOutput = "       2 file1\n";
      expectedOutput += "       3 file2\n";
      expectedOutput += "       5 total";
      assert.deepEqual(getWordsCount(args, fs), expectedOutput);
    });

    it("should return character count for multiple files for c as input option", function() {
      let args = {
        file: ["file1", "file2"],
        options: ["c"]
      };
      let expectedOutput = "      29 file1\n";
      expectedOutput += "      31 file2\n";
      expectedOutput += "      60 total";
      assert.deepEqual(getWordsCount(args, fs), expectedOutput);
    });
  });
});

describe("getNumberOfChars", function() {
  it("should return count of chars in the given content", function() {
    assert.deepEqual(getNumberOfChars("simplicity"), 10);
  });
  it("should take '\\n'as a single character", function() {
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

describe("getNumberOfWords", function() {
  it("should return number of words in given input file", function() {
    let content = "This is good\n";
    content += "This is another good";
    assert.deepEqual(getNumberOfWords(content), 7);
  });

  it("should return count 0 for empty file", function() {
    assert.deepEqual(getNumberOfWords(""), 0);
  });
});
