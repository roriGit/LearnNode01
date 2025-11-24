const {readFile} = require("fs")
const path = "./content/info.txt";

const read_results = (path)=>{
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        })
    })
}
read_results(path)