const os = require('os')
const {son} = require("./family-info");

//info about current user
const user = os.userInfo()
console.log(user)

//system uptime in seconds
console.log(`Total uptime is: ${os.uptime()} seconds`)

const operatingSystem = {
    'name': os.type(),
    'release': os.release(),
}
console.log(operatingSystem)


const path = require('path')
console.log(path.sep)

const filepath = path.join('/', 'content', 'sub-content','sub-info.txt')
console.log(filepath)

console.log(path.basename(filepath))
abs_path = path.resolve(__dirname, 'content', 'sub-content', 'sub-info.txt')
console.log(abs_path)

//file module
const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')
const subinfo = readFileSync(abs_path, 'utf8')
console.log(subinfo)

//writeFileSync('./content/result-sync.txt', 'subinfo', {flag: 'a'})

readFile('./content/result-sync.txt','utf8', (err, data) => {
    if(err){
        console.log(err)
        return
    }
   // console.log(data)
})
console.log("test")