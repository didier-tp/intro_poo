using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

 class Cercle : Figure
 {
    public double Rayon { get; set; }
    public double Xc { get; set; }
    public double Yc { get; set; }

    public Cercle() /* : base() par defaut */
    {
        /* //par defaut attributs/propriétés numeriques initialisées à 0
        this.Rayon = 0;
        this.Xc = 0;
        this.Yc = 0;
        */
    }
    public override string ToString()
    {
        return $"Cercle (Rayon={this.Rayon})" + " base="+ base.ToString();
    }

    //override nécessaire ici en c# pour bon comportement "polymorphisme"
    public override double Perimetre() { return 2*Math.PI*this.Rayon; } 
}

