const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/test-index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  }
};
