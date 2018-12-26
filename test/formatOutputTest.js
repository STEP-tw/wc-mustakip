const assert = require("assert");
const {
  singleFileFomatter,
  multipleFileFormatter,
  add,
  addCounts
} = require("../src/formatOutput.js");

describe("singleFileFormatter", function() {
  it("should return single count  and file name for single count ", function() {
    let files = [
      {
        fileCounts: [1],
        fileName: "file1"
      }
    ];
    expectedOutput = "       1 file1";
    assert.deepEqual(singleFileFomatter(files), expectedOutput);
  });

  it("should return two counts  and file name for two input counts ", function() {
    let files = [
      {
        fileCounts: [1, 2],
        fileName: "file1"
      }
    ];
    expectedOutput = "       1       2 file1";
    assert.deepEqual(singleFileFomatter(files), expectedOutput);
  });

  it("should return three counts and file name for three counts ", function() {
    let files = [
      {
        fileCounts: [1, 2, 3],
        fileName: "file1"
      }
    ];
    expectedOutput = "       1       2       3 file1";
    assert.deepEqual(singleFileFomatter(files), expectedOutput);
  });
});

describe("multipleFileFormatter", function() {
  it("should return counts and fileNames of each file for three counts", function() {
    let files = [
      {
        fileCounts: [1, 2, 3],
        fileName: "file1"
      },
      {
        fileCounts: [4, 5, 6],
        fileName: "file2"
      }
    ];
    let expectedOutput = "       1       2       3 file1\n";
    expectedOutput += "       4       5       6 file2\n";
    expectedOutput += "       5       7       9 total";
    assert.deepEqual(multipleFileFormatter(files), expectedOutput);
  });
  it("should return counts and fileNames of each file for three counts", function() {
    let files = [
      {
        fileCounts: [1],
        fileName: "file1"
      },
      {
        fileCounts: [2],
        fileName: "file2"
      }
    ];
    let expectedOutput = "       1 file1\n";
    expectedOutput += "       2 file2\n";
    expectedOutput += "       3 total";
    assert.deepEqual(multipleFileFormatter(files), expectedOutput);
  });
});

describe("add", function() {
  it("should add respective elements of two lists", function() {
    let list1 = [1, 2, 3];
    let list2 = [4, 5, 6];
    expectedOutput = [5, 7, 9];
    assert.deepEqual(add(list1, list2), expectedOutput);
  });
  it("should return empty list if the input lists are empty", function() {
    assert.deepEqual(add([], []), []);
  });
});

describe("addCounts", function() {
  it("should add two counts and return the total counts", function() {
    let counts1 = [1, 2, 3];
    let file = {
      fileCounts: [4, 5, 6]
    };
    expectedOutput = [5, 7, 9];
    assert.deepEqual(addCounts(counts1, file), expectedOutput);
  });
});
