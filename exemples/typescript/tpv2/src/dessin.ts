import { Dessinable } from "./dessinable";
/*
Une classe qui implemente l'interface dessinable
est obligée de coder toutes les méthodes imposées par l'interface
*/
export class Dessin implements Dessinable {

    //parties[i] pourra être n'importe quelle chose Dessinable
    //Line, Circle , sous objet Dessin
    parties : Dessinable[] = [];

    toSvgString(): string {
        let paquetSvg = "";
        for(let i=0; i< this.parties.length; i++)
            //polymorphimse en boucle sur .toSvgString()
            paquetSvg = paquetSvg + this.parties[i].toSvgString()
        return paquetSvg;
    }
   

}