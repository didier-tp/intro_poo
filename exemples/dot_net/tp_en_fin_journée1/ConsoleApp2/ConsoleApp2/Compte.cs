using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Compte
{
    //attributs (données internes) de la classe:
    /*
    //style de code en c++ et en java
    private int Numero;

    public int getNumero()
    {
        return this.Numero;
    }

    public void setNumero(int num)
    {
        if (num > 0)
            this.Numero = num;
        else Console.WriteLine("numero invalide");
    }
    */

    private int _numero; //version privée en minuscule et avec prefixe _
    public int Numero
    {
        get { return this._numero; }
        set {  if (value >= 0)
                this._numero = value;
            else Console.WriteLine("numero invalide"); //ou bien throw ...
             }
    }

    //public string Label;
    public string Label { get; set; } //avec private private et code get/set automatique par défaut
    public double Solde { get; set; } //code temporaire automatique à améliorer ultérieurement

    //Constructeur par défaut (avec zero paramètre)
    //méthode speciale qui a meme nom que la classe et pas de void
    //ça sert à initialiser les valeurs interne dès la construction (le new extérieur)
    public Compte() {
        //this.Numero = 0;
        this._numero = 0;
        this.Label = "compte";
        this.Solde = 0;
    }
    //constructeur secondaire avec paramètres
    //on appelle surcharge (overload en anglais) le fait de code plusieurs versions
    //d'une fonction qui a le même nom (c'est faisable en c++ , en java , en c# )
    public Compte(int numeroInitial ,string libelleInitial , double soldeInitial )
    {
        this.Numero = numeroInitial;
        this.Label = libelleInitial;
        this.Solde = soldeInitial;
    }
    
    //.ToString() est une méthode spéciale (provenant de la classe Object) 
    //qui sert à générer une chaine de caractère avec toutes les valeurs internes
    //de l'objet courant (pratique pour vérifier valeur / debug)
    public override string ToString()
    {
        return $"Compte Numero={this.Numero} Label={this.Label} Solde={this.Solde}";
    }
    
    //méthodes/operations (traitement internes) de la classe:
    public void Debiter(double montant)
    {
        //montant un parametre d'entrée de la méthode Debiter() de type double
        //la méthode modifie les valeurs de l'objet courant this
        //mais ne retourne rien (pas de return ...; )  d'où le type de retour void
        this.Solde=this.Solde - montant;
    }

    public void Crediter(double montant)
    {
        this.Solde = this.Solde + montant;
    }

}

