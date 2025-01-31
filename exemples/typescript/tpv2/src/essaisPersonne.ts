import { Employe } from "./employe";
import { Personne } from "./personne";

let p1 = new Personne("jean","Bon");
console.log("p1="+JSON.stringify(p1));
p1.decrire();

let e1 = new Employe();
console.log("e1="+JSON.stringify(e1));
e1.salaire=2000; e1.prenom="alex"; e1.nom="Therieur";
console.log("e1="+JSON.stringify(e1));
e1.decrire();

let e2 = new Employe("lucky" , "Luke" , 1500);
e2.decrire();

let p : Personne | undefined; 
/*
"undefined" est proche "null" signifie pas initialsée
p est une variable (pas encore assignée)
qui est déclarée de type : Personne (en typescript)
et qui pourra référencer un futur objet de type Personne
construit  via new Personne() ou bien un cas particulier
de Personne construit via  new Employe()
*/
console.log("p="+p);
p = new Personne("prenom1","nom1");
p.decrire(); //ça declenche .decrire() de Personne
p = new Employe("prenom2","nom2",2200);
p.decrire(); //ça declenche .decrire() de Employe
