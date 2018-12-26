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
});
