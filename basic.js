// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed
const util_func = require('./utils')
const names = require('./family-info')
const _lodash = require('lodash')
const fav = require('./fav')

util_func.hello(names.father)
util_func.goodbye(names.mother)
console.log(fav.singleFav)


items = [1, [2],[3,4],[5,6,7]]
newItems = _lodash.flatten(items)
console.log(newItems)