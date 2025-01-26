import fs from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url)); 

// try {
//     const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }

export default function DbSyncRead(){ 

// read file first
console.log(__dirname)
var file = {} // empty object
try {
    const fileContent = fs.readFileSync(__dirname+'/DBSync.json')
    file = JSON.parse(fileContent); // return back to object
    console.log("writing ... first read Okay")
    console.log(file)
    return file;
} catch (error) {
    console.log(error);
}
}
