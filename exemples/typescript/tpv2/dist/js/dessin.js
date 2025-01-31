"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dessin = void 0;
/*
Une classe qui implemente l'interface dessinable
est obligée de coder toutes les méthodes imposées par l'interface
*/
class Dessin {
    constructor() {
        //parties[i] pourra être n'importe quelle chose Dessinable
        //Line, Circle , sous objet Dessin
        this.parties = [];
    }
    toSvgString() {
        let paquetSvg = "";
        for (let i = 0; i < this.parties.length; i++)
            //polymorphimse en boucle sur .toSvgString()
            paquetSvg = paquetSvg + this.parties[i].toSvgString();
        return paquetSvg;
    }
}
exports.Dessin = Dessin;
