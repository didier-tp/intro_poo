"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeInFile = writeInFile;
//npm i --save-dev @types/node
//const fs = require('fs');
const fs_1 = __importDefault(require("fs"));
function writeInFile(path, content) {
    fs_1.default.writeFile(path, content, function (err) {
        if (err)
            throw err;
        console.log(`sucessful write in file ${path}`);
    });
}
