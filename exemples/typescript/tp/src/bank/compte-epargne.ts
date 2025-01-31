export class CompteEpargne {
    numero : number ;
    solde : number;
    static tauxInteret : number = 2.5 ; //en %

    constructor(num : number = 0 , solde : number = 0){
        this.numero = num;
        this.solde = solde;
    }

    static augmenterTaux(hausse : number){
        //ex: 2.5 + 0.5 de hausse , alors 3 %
        CompteEpargne.tauxInteret = CompteEpargne.tauxInteret + hausse;
    }
}