"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompteEpargne = void 0;
class CompteEpargne {
    constructor(num = 0, solde = 0) {
        this.numero = num;
        this.solde = solde;
    }
    static augmenterTaux(hausse) {
        //ex: 2.5 + 0.5 de hausse , alors 3 %
        CompteEpargne.tauxInteret = CompteEpargne.tauxInteret + hausse;
    }
}
exports.CompteEpargne = CompteEpargne;
CompteEpargne.tauxInteret = 2.5; //en %
