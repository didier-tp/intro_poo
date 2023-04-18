using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

abstract class Figure
{
    public string Couleur { get; set; }

    //NB: le mot virtual est indispensable en c# ou c++ pour avoir du polymorphisme 
    public virtual string ToSvgString()
    {
        //générer la fin d'une ligne d'un fichier .svg (ex: fill='red' /> )
        return $" fill='{this.Couleur}' stroke='{this.Couleur}' />";
    }

    public Figure()
    {
        this.Couleur = "black"; //par defaut
    }

    public override string ToString()
    {
        return $"Figure Couleur={Couleur}";
    }
}

