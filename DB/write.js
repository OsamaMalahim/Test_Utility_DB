import fs from 'node:fs/promises';
import { json } from 'node:stream/consumers';

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));


// to write 
// 1. read file, convert it back
// 2. add data 
// 3. save it back



export default async function DbWrite(object){ 
// read file
const fileHandle = await fs.open(__dirname+"vedioDB.json", "r");
var file = {} // empty object
try {
    const fileContent = await fileHandle.readFile("utf-8");
    file = JSON.parse(fileContent); // return back to object
} catch (error) {
    console.log(error);
}
finally {
    fileHandle.close();
}

// add data

// data sample
// const vedioNo2 = {
//     id: 2222,
//     name: "plant of apes",
//     length: 23088888
// }

// add data
file.data.push(object);


// convert back to json
const data_to_save = JSON.stringify(file);

// save it back
const fileWriteHandle = await fs.open(__dirname+ "vedioDB.json", "w");

try {
    await fileWriteHandle.writeFile(data_to_save, "utf-8");
} catch (error) {
    console.log(error);
}
finally {
    fileWriteHandle.close();
}

}