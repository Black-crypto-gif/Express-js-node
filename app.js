// npm - global command, comes with node
// npm --version

// local dependencies -use it only in this particular file
// npm i <package name>
// global dependencies - use it in all files
// npm i -g <package name>

const _ = require('lodash');

const items = [ 1, [2,[3,[4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
