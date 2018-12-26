const hasOption = x => x.startsWith("-");

const parseInput = function(userInput) {
  let options;
  let file;
  if (hasOption(userInput[0])) {
    return {
      options: [userInput[0].slice(1)],
      file: userInput.slice(1)
    };
  }
  return {
    options: ["l", "w", "c"],
    file: userInput
  };
};

module.exports = {
  parseInput
};