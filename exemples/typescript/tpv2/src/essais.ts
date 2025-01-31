import { Circle } from "./circle";
import { Dessin } from "./dessin";
import { Figure } from "./figure";
import { writeInFile } from "./file-util";
import { Line } from "./line";

let dessin = new Dessin();
dessin.parties.push(new Line(12,34,345,343,"green"));
dessin.parties.push(new Circle(200,200,100,"blue"));

let sousDessin1 = new Dessin();
sousDessin1.parties.push(new Line(20,134,245,243,"red"));
sousDessin1.parties.push(new Circle(300,300,50,"orange"));
dessin.parties.push(sousDessin1);

let nomFichier = "dessin.svg"
let ligne1= "<svg xmlns='http://www.w3.org/2000/svg' height='400' width='500'>";
let derniereLigne = "</svg>";
let contenu = ligne1;
contenu = ligne1+ dessin.toSvgString() + derniereLigne;
writeInFile(nomFichier,contenu);              