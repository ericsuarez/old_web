var pug = require("pug");

// Compile the source code
const compiledFunction = pug.compileFile('index.pug');

// Render a set of data
console.log(compiledFunction({
  name: 'Timothy'
}));
