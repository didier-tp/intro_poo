using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//NB: en c# , CompteEpargne : Compte
//signifie que la classe CompteEpargne herite de la classe Compte
class CompteEpargne : Compte
{
public double TauxInteret { get; set; }

    public CompteEpargne()
        : base()
    {
        this.TauxInteret = 0.0;
    }

    public CompteEpargne(int numeroInitial, string libelleInitial,
                         double soldeInitial,double tauxInteretInitial)
        : base(numeroInitial, libelleInitial, soldeInitial)
        //syntaxe c# spéciale pour repasser des paramétres au constructeur de la classe héritée
    {
        this.TauxInteret = tauxInteretInitial;
    }
public double InteretsSurPeriode() {
        return this.Solde * (this.TauxInteret / 24);
        //si periode de 15jours (demi mois)
    }

public override string ToString(){
        return base.ToString() + $" TauxInteret={this.TauxInteret}";
        //NB: le prefixe base. en c# (équivalent à super. en java)
        //permet de ré-appeler le code de la classe de base (dont on hérite)
    }
}

