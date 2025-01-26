import fs from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));


// to write 
// 1. read file, convert it back
// 2. add data 
// 3. save it back



// try {
//     const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }

export default function DbSyncWrite(object){ 

// read file first
console.log(__dirname)
var file = {} // empty object
try {
    const fileContent = fs.readFileSync(__dirname+'/DBSync.json')
    file = JSON.parse(fileContent); // return back to object
    console.log("writing ... first read Okay")
    console.log(file)
} catch (error) {
    console.log(error);
}
 
// add data
file.data.push(object);
console.log("again print")
console.log(file)
// convert back to json
const data_to_save = JSON.stringify(file);
// write it back

try {
    fs.writeFileSync(__dirname+"/DBSync.json",data_to_save,"utf-8");
    console.log("data written successfully")
} catch (error) {
    console.log(error)
}

}
// const fs = require('node:fs');
// const content = 'Some content!';
// try {
//   fs.writeFileSync('/Users/joe/test.txt', content);
//   // file written successfully
// } catch (err) {
//   console.error(err);
// }

// add data

// data sample
// const vedioNo2 = {
//     id: 2222,
//     name: "plant of apes",
//     length: 23088888
// }