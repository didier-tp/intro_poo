using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

class Cercle
{
    public double Xc { get; set; } // (Xc,Yc) coordonnées du centre
    public double Yc { get; set; }

    private double _rayon;
    public double Rayon { 
        get { return this._rayon;  } 
        set
        {
            if (value >= 0) this._rayon = value;
            else Console.WriteLine("rayon négatif invalide"); //ou throw ...
        }
    }

    public Cercle()
    {
        this.Xc = 100;
        this.Yc = 100;
        this.Rayon = 100;
    }

    public Cercle(double xcInitial , double ycInitial , double rayonInitial)
    {
        this.Xc = xcInitial;
        this.Yc = ycInitial;
        this.Rayon = rayonInitial;
    }

    public override string ToString()
    {
        return $"Cercle Xc={this.Xc} Yc={this.Yc} Rayon={this.Rayon}";
    }

    public double Perimetre()
    {
        //cette méthode n'a pas de paramètre en entrée
        //elle retourne une valeur calculée de type double via le mode clef return
        //return 2 * Math.PI * this.Rayon;
        return 2 * Math.PI * this._rayon;
    }
}

