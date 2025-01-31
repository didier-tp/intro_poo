"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figure = void 0;
/*
Une classe est globalement "abstract" si elle comporte au moins
une méthode "abstract" . et dans ce cas là le new direct est interdit
let f: Figure = new Figure(); interdit
mais
let f : Figure = new Line(); autorisé
----
Une sous classe (ex: Line) est obligée de code les méthodes abstraites
*/
class Figure {
    // epaisseur:number =1;
    constructor(couleurInitiale = "black") {
        this.couleur = couleurInitiale;
    }
}
exports.Figure = Figure;
/*
Ancienne version 1 sans abstract:
--------------------
export class Figure {
    couleur : string = "black";
   // epaisseur:number =1;

   constructor(couleurInitiale:string="black"){
    this.couleur= couleurInitiale;
   }
    toSvgString():string{
        return ""; //code qui sera redéfini
        //dans les sous classes Line, Circle , ...
    }
}
*/ 
