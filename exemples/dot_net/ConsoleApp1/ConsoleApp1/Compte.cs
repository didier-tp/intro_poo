using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

//namespace MiniBank
//{
class Compte
{
    public string Label { get; set; } //avec gestion automatique de l'attribut private
    private double solde; //attribut interne/privée
    public static double SOLDE_MINI = -999999;

    public Compte() //default constructor (used with or without objet initializer)
    {
        this.solde = 0;
        this.Label = "";
    }

    public Compte(string labelInitial ,double soldeInitial) // secondary constructor for new Compte("compteXy" , 500.0)
    {
        this.solde = soldeInitial;
        this.Label = labelInitial;
    }

    public double Solde //propriétée vue de l'exterieur
    {
        get { return this.solde; }
        set { if (value > SOLDE_MINI) this.solde = value;
            else Console.WriteLine("solde invalide="+value); }
    }    

    public void Debiter(double montant)
    {
            this.solde = this.solde - montant;
    }

    public void Crediter(double montant)
    {
            this.solde = this.solde + montant;
    }

    public override string ToString()
    {
        return $"Compte (Label={this.Label},Solde={this.solde})";
    }
}
//}
