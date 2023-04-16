using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;

[JsonDerivedType(typeof(Cercle))] //nécessaire pour bonne serialisation des sous classes (en déclenchement polymorphisme)
[JsonDerivedType(typeof(Rectangle))]
class Figure
{ 
    public string Couleur { get; set; }
    public Figure()
    {
        this.Couleur = "black";
    }
    public override string ToString()
    {
        return $"Figure (Couleur={this.Couleur})" ;
    }


    //virtual (ou abstract) nécessaire ici en c# pour bon comportement "polymorphisme"
    public virtual double Perimetre() { return 0; } //default (will be override in subclasses)
}
