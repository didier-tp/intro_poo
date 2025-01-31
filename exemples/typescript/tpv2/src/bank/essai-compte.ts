import { CompteEpargne } from "./compte-epargne";

let ce1 = new CompteEpargne(1,300);
console.log("ce1=" + JSON.stringify(ce1));

console.log("taux interetCourant = " 
            + CompteEpargne.tauxInteret);

CompteEpargne.augmenterTaux(0.5);  
console.log("nouveau tauxInteret apres hausse de 0.5% = " 
    + CompteEpargne.tauxInteret);