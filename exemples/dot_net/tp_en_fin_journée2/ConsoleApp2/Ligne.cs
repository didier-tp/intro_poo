using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

class Ligne : Figure
{
    public double X1 { get; set; }
    public double Y1 { get; set; }
    public double X2 { get; set; }
    public double Y2 { get; set; }

    public override string ToString()
    {
        return $"Ligne X1={this.X1} Y1={this.Y1} X2={this.X2} Y2={this.Y2} " + base.ToString();
    }

    public override string ToSvgString()
    {
        //générer la ligne d'un fichier .svg pour que ça affiche une ligne
        return $"<line x1='{this.X1}' y1='{this.Y1}' x2='{this.X2}' y2='{this.Y2}'  " + base.ToSvgString();
    }
}

