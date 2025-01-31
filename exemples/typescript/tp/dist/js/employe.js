"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employe = void 0;
const personne_1 = require("./personne");
class Employe extends personne_1.Personne {
    constructor(prenomInitialEmp = "?", nomInitialEmp = "?", salaireInitial = 0) {
        //en java et en typescript , super(...,...) 
        //permet de repasser des valeurs de paramètres au
        //constructeur de la classe dont on hérite  
        super(prenomInitialEmp, nomInitialEmp);
        this.salaire = 0;
        this.salaire = salaireInitial;
    }
    //bien que l'on hérite par défaut du code de Personne.decrire(),
    //on peut tout de même redéfinir (override) un meilleur code sur Employe
    decrire() {
        //console.log(`Je suis un Employe ${this.prenom} ${this.nom} ${this.salaire}`)
        super.decrire();
        console.log(`\t avec un salaire de ${this.salaire}`);
        //NB: super désigne la super classe dont on hérite.
        //super.decrire() déclenche/appel le code hérité (cad Personne.decrire())
    }
}
exports.Employe = Employe;
