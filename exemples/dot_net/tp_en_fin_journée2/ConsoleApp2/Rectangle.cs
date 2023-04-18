using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

class Rectangle : Figure ,ISurface
{

    public double X { get; set; }
    public double Y { get; set; }
    public double Largeur { get; set; }
    public double Hauteur { get; set; }


    public double Perimetre() //méthode imposée par interface ISurface
    {
        return 2 * (this.Largeur + this.Hauteur);
    }

    public double Aire() //méthode imposée par interface ISurface
    {
        return this.Largeur * this.Hauteur;
    }


    public override string ToString()
    {
        return $"Ligne X={this.X} Y={this.Y} Largeur={this.Largeur} Hauteur={this.Hauteur} " + base.ToString();
    }

    public override string ToSvgString()
    {
        //générer la ligne d'un fichier .svg pour que ça affiche un rectangle
        return $"<rect x='{this.X}' y='{this.Y}' width='{this.Largeur}' height='{this.Hauteur}' " + base.ToSvgString();
    }
}

