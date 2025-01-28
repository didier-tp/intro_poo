
import { writeInFile } from './file-util';
import { Circle, Fig2D, Line, Rectangle } from './fig-v1';

function my_ts_test(){
    var tabFig : Fig2D[] = new Array<Fig2D>();
    tabFig.push(new Line(20,20,180,200,"red"));
    tabFig.push(new Circle(100,100,50,"blue"));
    tabFig.push(new Circle(250,200,50,"black",1,"blue"));
    tabFig.push(new Rectangle(200,100,50,60,"green"));
    tabFig.push(new Rectangle(20,100,50,60,"black",1,"green"));

    console.log("tabFig:")
    for( let f  of tabFig){
      console.log(f.toJsonString());
    }

    let firstSvgLine = "<svg xmlns='http://www.w3.org/2000/svg' height='600' width='800'>";
    let lastSvgLine = "</svg>";
    let allSvgLines = firstSvgLine + '\n';

    for( let f  of tabFig){
      allSvgLines += (f.toSvgString() + '\n');
    }
    allSvgLines += lastSvgLine;

    writeInFile('../svg/dessin1.svg',allSvgLines); // .. from dist/js

}

my_ts_test();

/*
<svg xmlns='http://www.w3.org/2000/svg' height='600' width='800'>
...
</svg>
*/