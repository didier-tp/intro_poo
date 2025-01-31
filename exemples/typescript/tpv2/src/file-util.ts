//npm i --save-dev @types/node
//const fs = require('fs');
import fs from 'fs'; 

export function writeInFile(path: string,content : string){
    fs.writeFile(path,content,function (err:any) {
        if (err) throw err;
        console.log(`sucessful write in file ${path}`);
        })
}