export class Personne {
    prenom : string ;
    nom : string ;
    
    constructor(prenomInitial: string = "",
                nomInitial: string = ""){
        this.prenom = prenomInitial;
        this.nom = nomInitial;
    }

    decrire(){
        console.log(`Je suis une Personne ${this.prenom} ${this.nom}`)
    }
}