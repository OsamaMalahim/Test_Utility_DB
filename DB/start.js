import { open } from 'node:fs/promises';
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
``
const fileHandle = await open(__dirname + "vedioDB.json", "w");
try {
    await fileHandle.writeFile(data_to_submit,"utf8");

} catch (error) {
    console.log(error);
}
finally {
    fileHandle.close();
}






