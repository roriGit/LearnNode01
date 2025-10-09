// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed
const util_func = require('./utils')
const names = require('./family-info')

util_func.hello(names.father)
util_func.goodbye(names.mother)