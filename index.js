// first run the starter file
// import "./DBSync/startSync.js"
// import readDBSync from "./DBSync/"
import DbSyncWrite from "./DBSync/writeSync.js";
import DbSyncRead from "./DBSync/readSync.js";

// initial read
// const firstDbRead = await readDB();
// console.log(firstDbRead);


// add data sample

const vedioNo2 = {
    id: 19878,
    name: "Armegedon",
    length: 350
}
 
const vedioNo3 = {
    id: 8888888888,
    name: "Armegedon",
    length: 350
}

DbSyncWrite(vedioNo2);

const data = DbSyncRead();
console.log("-------------------------------");
console.log(data);


DbSyncWrite(vedioNo3);
console.log(DbSyncRead())

 