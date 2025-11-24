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
    .then(results => console.log(results))
    .catch(err => console.log(err));

const first = async () => {
    try {
        const result = await read_results("./content/result-sync.txt");
        console.log(result);
    }catch(err) {
        console.log(err);
    }
}
first()