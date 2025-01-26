import fs from 'node:fs/promises';


import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));



export default async function readDB(){

    
    const file = {}
     
    const fileHandle =  await fs.open(__dirname + "vedioDB.json", "r");
    try {
        const fileContent = await fileHandle.readFile("utf-8");
        const file = JSON.parse(fileContent);
        console.log(file);
    } catch (error) {
        console.log(error);
    }
    finally {
        fileHandle.close();
    }
     
    return file;


}

dsfdsf