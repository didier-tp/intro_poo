using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

//La classe Cercle hérite de  Figure et implémente l'interface ISurface
//en héritant de Figure on récupère le code de la couleur
//en héritant/implémentant de l'interface ISurface on hérite de l'obligation
//de programmer les opérations .Perimetre() et .Aire() du contrat ISurface
class Cercle :  Figure , ISurface
{
    public double Xc { get; set; } // (Xc,Yc) coordonnées du centre
    public double Yc { get; set; }

    public double Perimetre() //méthode imposée par interface ISurface
    {
        return 2 * Math.PI * this._rayon;
    }

    public double Aire() //méthode imposée par interface ISurface
    {
        return Math.PI * this._rayon * this._rayon;
    }


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
        return $"Cercle Xc={this.Xc} Yc={this.Yc} Rayon={this.Rayon} " + base.ToString;
    }
  

    public override string ToSvgString()
    {
        //générer la ligne d'un fichier .svg pour que ça affiche un cercle
        return $"<circle r='{this.Rayon}' cx='{this.Xc}' cy='{this.Yc}'  " + base.ToSvgString();
    }

}

