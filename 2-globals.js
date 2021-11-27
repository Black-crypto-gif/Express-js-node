// GLOBALS -NO WINDOW !!!!!

//__dirname -path to current directory
// __filename - file name
// require - load modules
//module -info about current module (file)
//process -info about env where the programme is being executed

console.log(__dirname);

setInterval(() => {
  console.log('hello');
  setTimeout(() => {
    console.log('world');
  }, 2000);
}, 1000);
