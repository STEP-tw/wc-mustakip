const assert = require("assert");
const {parseInput} = require("../src/parseInput.js");

describe("parseInput", function() {
  it('["-l","file1"]', function() {
    let userInput = ["-l", "file1"];
    expectedOutput = {file: ["file1"], options: ["l"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-w","file1"]', function() {
    let userInput = ["-w", "file1"];
    expectedOutput = {file: ["file1"], options: ["w"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-c","file1"]', function() {
    let userInput = ["-c", "file1"];
    expectedOutput = {file: ["file1"], options: ["c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["file1"]', function() {
    let userInput = ["file1"];

    expectedOutput = {file: ["file1"], options: ["l", "w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });
  it('["file1","file2"]', function() {
    let userInput = ["file1", "file2"];

    expectedOutput = {file: ["file1", "file2"], options: ["l", "w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });
  it('["-lw","file1"]', function() {
    let userInput = ["-lw", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-wl","file1"]', function() {
    let userInput = ["-wl", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-cl","file1"]', function() {
    let userInput = ["-cl", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });
  it('["-lc","file1"]', function() {
    let userInput = ["-lc", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-wc","file1"]', function() {
    let userInput = ["-wc", "file1"];
    expectedOutput = {file: ["file1"], options: ["w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-cw","file1"]', function() {
    let userInput = ["-cw", "file1"];
    expectedOutput = {file: ["file1"], options: ["w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });
  it('["-lcw","file1"]', function() {
    let userInput = ["-lcw", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-lwc","file1"]', function() {
    let userInput = ["-lwc", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-wcc","file1"]', function() {
    let userInput = ["-wcc", "file1"];
    expectedOutput = {file: ["file1"], options: ["w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });
  it('["-wlc","file1"]', function() {
    let userInput = ["-wlc", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-wll","file1"]', function() {
    let userInput = ["-wll", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  // it('["-cw","file1"]', function() {
  //   let userInput = ["-cw", "file1"];
  //   expectedOutput = {file: ["file1"], options: ["w", "c"]};
  //   assert.deepEqual(parseInput(userInput), expectedOutput);
  // });
  it('["-l","-w",file1"]', function() {
    let userInput = ["-l", "-w", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-l","-c",file1"]', function() {
    let userInput = ["-l", "-c", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-w","-c","file1"]', function() {
    let userInput = ["-w", "-c", "file1"];
    expectedOutput = {file: ["file1"], options: ["w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-w","-l",file1"]', function() {
    let userInput = ["-w", "-l", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });
  it('["-c","-l","file1"]', function() {
    let userInput = ["-c", "-l", "file1"];

    expectedOutput = {file: ["file1"], options: ["l", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });
  it('["-c","-w","file1"]', function() {
    let userInput = ["-c", "-w", "file1"];
    expectedOutput = {file: ["file1"], options: ["w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-l","-c","-w","file1"]', function() {
    let userInput = ["-l", "-c", "-w", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-l","-w","-c","file1"]', function() {
    let userInput = ["-l", "-w", "-c", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });
  it('["-w","-l","-c","file1"]', function() {
    let userInput = ["-w", "-l", "-c", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-w","-c","-l","file1"]', function() {
    let userInput = ["-w", "-c", "-l", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });

  it('["-c","-w","-l","file1"]', function() {
    let userInput = ["-c", "-w", "-l", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });
  it('["-c","-l","-w","file1"]', function() {
    let userInput = ["-c", "-l", "-w", "file1"];
    expectedOutput = {file: ["file1"], options: ["l", "w", "c"]};
    assert.deepEqual(parseInput(userInput), expectedOutput);
  });
});
