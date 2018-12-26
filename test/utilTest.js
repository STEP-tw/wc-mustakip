const assert = require("assert");
const {flat, repeatChars, concat, justifyRight} = require("../src/util.js");

describe("repeatChars", function() {
  it("should repeat a given character given number of times", function() {
    assert.deepEqual(repeatChars(" ", 1), " ");
    assert.deepEqual(repeatChars(" ", 5), "     ");
  });
  it("should return empty string if the input times is 0", function() {
    assert.deepEqual(repeatChars("*", 0), "");
  });
});

describe("concat", function() {
  it("should return an array with the given element concated into the input array", function() {
    assert.deepEqual(concat(["a", "b"], ["c"]), ["a", "b", "c"]);
  });
  it("should return empty array if input arrays are empty", function() {
    assert.deepEqual(concat([], []), []);
  });
  it("should return first array if second array is empty", function() {
    assert.deepEqual(concat([], []), []);
  });
});

describe("flat", function() {
  it("should return 1d array if provided a 2d array", function() {
    let list = [[1, 2], [3, 4], [5, 6]];
    expectedOutput = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flat(list), expectedOutput);
  });

  it("should return 1d array if 1d array is provided", function() {
    let list = [1, 2, 3, 4, 5, 6];
    expectedOutput = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flat(list), expectedOutput);
  });
});

describe("justifyRight", function() {
  it("should return text justified to the right side with given length", function() {
    assert.deepEqual(justifyRight(5, "ball"), " ball");
    assert.deepEqual(justifyRight(4, "o"), "   o");
  });

  it("should return n number of spaces when a empty text is justified with n", function() {
    assert.deepEqual(justifyRight(5, ""), "     ");
    assert.deepEqual(justifyRight(4, ""), "    ");
  });
  it("should return whole string if the text is justified with 0", function() {
    assert.deepEqual(justifyRight(0, "happy"), "happy");
  });
  it("should return whole string if the text is justified with number < string length", function() {
    assert.deepEqual(justifyRight(3, "happy"), "happy");
  });
});
