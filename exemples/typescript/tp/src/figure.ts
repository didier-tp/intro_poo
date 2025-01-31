/*
Une classe est globalement "abstract" si elle comporte au moins
une méthode "abstract" . et dans ce cas là le new direct est interdit
let f: Figure = new Figure(); interdit
mais 
let f : Figure = new Line(); autorisé
----
Une sous classe (ex: Line) est obligée de code les méthodes abstraites
*/
export abstract class Figure {
    couleur : string ;
   // epaisseur:number =1;

   constructor(couleurInitiale:string="black"){
    this.couleur= couleurInitiale;
   }
    abstract toSvgString():string ;
    //l'operation/methode abstraite .toSvgString() n'a pas de code du tout
    //dans la classe Figure car ; à la place de { return ""; }
    //néamoins la signature est déclarée ici pour dire
    //que l'on pourra appeler ça sur des cas particuliers de Figure
}

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