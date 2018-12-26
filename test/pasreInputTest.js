const assert = require("assert");
const {parseInput} = require("../src/parseInput.js");

describe("parseInput", function() {
  it('["-l","file1"]', function() {
    let userInput = ["-l", "file1"];
    expectedOutput = {file: "file1", options: ["l"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });
  it('["-w","file1"]', function() {
    let userInput = ["-w", "file1"];
    expectedOutput = {file: "file1", options: ["w"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });
});
