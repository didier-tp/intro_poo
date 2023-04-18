using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//V3 avec interface (contrat entièrement abstrait)
//conceptuellement une interface comporte que des fonctions abstraites
//convention .net / c# : une interface a un nom qui commence par I
//convention java : pas de I (mais quelfois un nom qui fini par Able : Printable )
interface ISurface 
{
    //public abstract double Perimetre();
    public double Perimetre(); //automatiquement abstract dans une interface

    public double Aire();
}

