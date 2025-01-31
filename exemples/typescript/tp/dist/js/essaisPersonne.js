"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employe_1 = require("./employe");
const personne_1 = require("./personne");
let p1 = new personne_1.Personne("jean", "Bon");
console.log("p1=" + JSON.stringify(p1));
p1.decrire();
let e1 = new employe_1.Employe();
console.log("e1=" + JSON.stringify(e1));
e1.salaire = 2000;
e1.prenom = "alex";
e1.nom = "Therieur";
console.log("e1=" + JSON.stringify(e1));
e1.decrire();
let e2 = new employe_1.Employe("lucky", "Luke", 1500);
e2.decrire();
let p;
/*
"undefined" est proche "null" signifie pas initialsée
p est une variable (pas encore assignée)
qui est déclarée de type : Personne (en typescript)
et qui pourra référencer un futur objet de type Personne
construit  via new Personne() ou bien un cas particulier
de Personne construit via  new Employe()
*/
console.log("p=" + p);
p = new personne_1.Personne("prenom1", "nom1");
p.decrire(); //ça declenche .decrire() de Personne
p = new employe_1.Employe("prenom2", "nom2", 2200);
p.decrire(); //ça declenche .decrire() de Employe
