"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_util_1 = require("./file-util");
const fig_v1_1 = require("./fig-v1");
function my_ts_test() {
    var tabFig = new Array();
    tabFig.push(new fig_v1_1.Line(20, 20, 180, 200, "red"));
    tabFig.push(new fig_v1_1.Circle(100, 100, 50, "blue"));
    tabFig.push(new fig_v1_1.Circle(250, 200, 50, "black", 1, "blue"));
    tabFig.push(new fig_v1_1.Rectangle(200, 100, 50, 60, "green"));
    tabFig.push(new fig_v1_1.Rectangle(20, 100, 50, 60, "black", 1, "green"));
    console.log("tabFig:");
    for (let f of tabFig) {
        console.log(f.toJsonString());
    }
    let firstSvgLine = "<svg xmlns='http://www.w3.org/2000/svg' height='600' width='800'>";
    let lastSvgLine = "</svg>";
    let allSvgLines = firstSvgLine + '\n';
    for (let f of tabFig) {
        allSvgLines += (f.toSvgString() + '\n');
    }
    allSvgLines += lastSvgLine;
    (0, file_util_1.writeInFile)('../svg/dessin1.svg', allSvgLines); // .. from dist/js
}
my_ts_test();
/*
<svg xmlns='http://www.w3.org/2000/svg' height='600' width='800'>
...
</svg>
*/ 
