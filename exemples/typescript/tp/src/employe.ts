import { Personne } from "./personne";

export class Employe extends Personne {
    salaire : number = 0;

    constructor(prenomInitialEmp:string="?" ,
                nomInitialEmp : string ="?",
                salaireInitial : number =0){
         //en java et en typescript , super(...,...) 
         //permet de repasser des valeurs de paramètres au
         //constructeur de la classe dont on hérite  
         super(prenomInitialEmp, nomInitialEmp);
         this.salaire =salaireInitial;   
    }

    //bien que l'on hérite par défaut du code de Personne.decrire(),
    //on peut tout de même redéfinir (override) un meilleur code sur Employe
    decrire(){
        //console.log(`Je suis un Employe ${this.prenom} ${this.nom} ${this.salaire}`)
        super.decrire(); 
        console.log(`\t avec un salaire de ${this.salaire}`);
        //NB: super désigne la super classe dont on hérite.
        //super.decrire() déclenche/appel le code hérité (cad Personne.decrire())
    }

}