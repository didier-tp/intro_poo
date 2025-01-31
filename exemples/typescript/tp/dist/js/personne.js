"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(prenomInitial = "", nomInitial = "") {
        this.prenom = prenomInitial;
        this.nom = nomInitial;
    }
    decrire() {
        console.log(`Je suis une Personne ${this.prenom} ${this.nom}`);
    }
}
exports.Personne = Personne;
