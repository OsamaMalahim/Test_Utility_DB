import fs from 'node:fs/promises';


const fileHandle = await fs.open("./vedioDB.json", "r");

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
