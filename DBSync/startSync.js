import fs from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

// create object
const VedioList = {
    data: []
};

// add some data
const vedioNo1 = {
    id: 54987,
    name: "plant",
    length: 230
}

// VedioList.data.push(vedioNo1);

const data_to_submit = JSON.stringify(VedioList);

//write file to disk
console.log(__dirname)
try {
    const data = fs.writeFileSync(__dirname+"/DBSync.json",data_to_submit,"utf-8");
    console.log("file written DBSync.json")
} catch (error) {
    console.log("error when writing DBSync.data");
    console.log(error)
}





