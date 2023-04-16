using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Rectangle : Figure
{
    public double X1 { get; set; }
    public double Y1 { get; set; }
    public double X2 { get; set; }
    public double Y2 { get; set; }

    public Rectangle() /* : base() par defaut */
    {
    }
    public override string ToString()
    {
        return $"Rectangle (X1={this.X1},Y1={this.Y1},X2={this.X2},Y2={this.Y2})" + " base=" + base.ToString();
    }

    //override nécessaire ici en c# pour bon comportement "polymorphisme"
    public override double Perimetre() { return 2 * ( Math.Abs(X2-X1) + Math.Abs(Y2-Y1) ); }
}

