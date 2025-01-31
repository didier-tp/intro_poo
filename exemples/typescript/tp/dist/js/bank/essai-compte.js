"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compte_epargne_1 = require("./compte-epargne");
let ce1 = new compte_epargne_1.CompteEpargne(1, 300);
console.log("ce1=" + JSON.stringify(ce1));
console.log("taux interetCourant = "
    + compte_epargne_1.CompteEpargne.tauxInteret);
compte_epargne_1.CompteEpargne.augmenterTaux(0.5);
console.log("nouveau tauxInteret apres hausse de 0.5% = "
    + compte_epargne_1.CompteEpargne.tauxInteret);
