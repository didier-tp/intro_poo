import { Circle } from "./circle";
import { Figure } from "./figure";
import { writeInFile } from "./file-util";
import { Line } from "./line";

//ESSAIS SUR LES LIGNES:
let l1 = new Line();
console.log("l1=" + JSON.stringify(l1));
l1.x1 = 20; l1.x2=100; l1.y1=50; l1.y2=200;
l1.move(5,20); //translation (déplacement horizontal de dx=5 
             // et vertical de dy=20)
console.log("l1=" + JSON.stringify(l1));
console.log( `x1=${l1.x1} y1=${l1.y1} x2=${l1.x2} y2=${l1.y2}`)
console.log("longeur de l1 = " + l1.length());
l1.couleur="blue";

let l2 = new Line(10,40,230,300,"red");//avec coordonnées fixées dès la construction
                                 //via constructor()
console.log("l2=" + JSON.stringify(l2));
//l2.couleur="red";

//ESSAIS SUR LES CERCLES:
let c1 = new Circle();
console.log("c1=" + JSON.stringify(c1));
c1.xc = 200; c1.yc=200; c1.r=100;
c1.move(5,20); //translation (déplacement horizontal de dx=5 
             // et vertical de dy=20)
console.log("c1=" + JSON.stringify(c1));
console.log( `xc=${c1.xc} yc=${c1.yc} r=${c1.r}`)
console.log("perimetre de c1 = " + c1.perimeter());

let c2 = new Circle(250,250,30);//avec  constructor(xc,yc,r)
c2.r = c2.r - 50; //30-50 = -20 refusé par set r , ._r inchangé à 30
console.log("c2=" + JSON.stringify(c2));
c2.r = 60; //accepté
//c2._r = 50; //impossible car _r est déclaré private
console.log("c2=" + JSON.stringify(c2));
c2.r = -60;//refusé
console.log("c2=" + JSON.stringify(c2));
c2.r = 40; //accepté
console.log("c2=" + JSON.stringify(c2));
//c2.couleur="green"
c2.couleur="rgb(0,255,0)"
/*
// exemple de tableau simple en javascript/typescript:
let tab1 :number[]=[];
tab1[0]=4;
//tab1[0]="abc"; //interdit car "abc" n'est pas de type number
tab1[1]=8;
//tab1[2]=12;
tab1.push(12); //.push() ajoute automatiquement en dernière position
               //en agrandissant automatiquement le tableau tab1
for(let i=0 ; i<tab1.length ; i++){
  console.log(">>>>>>" + tab1[i])
}
*/

// tableau de figures pour boucle avec polymorphisme:
let tabFig : Figure[] = [];
//tabFig.push(l1);
//tabFig.push(c1);
//tabFig.push(new Figure());//imposible si figure est abstract
tabFig.push(new Line(12,34,345,343,"orange"));
tabFig.push(new Circle(200,200,100,"red"));

let nomFichier = "dessin.svg"
let ligne1= "<svg xmlns='http://www.w3.org/2000/svg' height='400' width='500'>";
let derniereLigne = "</svg>";
let contenu = ligne1;
for(let i=0 ; i<tabFig.length ; i++){
    //polymorphisme en boucle car tabFig[i] est soit une ligne
    //soit un cercle mais dans tous les cas une sorte de Figure
    //avec la méthode .toSvgString()
    contenu = contenu + tabFig[i].toSvgString();
  }
contenu = contenu + derniereLigne;
/*
let contenu = ligne1 +
              + l1.toSvgString()
              + l2.toSvgString()
              + c1.toSvgString()
              + c2.toSvgString()
              + derniereLigne;
*/
writeInFile(nomFichier,contenu);              