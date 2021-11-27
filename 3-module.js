//module
//commonjs, every file is a module
// Modules - encapsulated code that can be used in other files
// Modules are used to break down large code into smaller pieces

const names = require('./4-names');
const sayhi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade');

sayhi('fethi')
sayhi(names.john)
sayhi(names.peter) 