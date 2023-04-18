//...
using System.Reflection.Emit;
using System.Runtime.ConstrainedExecution;

Console.WriteLine("Hello, World!");
int a = 5;
int b = 7;
int c = a+b;
Console.WriteLine("c=" + c);
Console.WriteLine($"c={c}");

string s1 = "lundi";
string s2 = "mardi";
string s3 = s1 + "," + s2;
Console.WriteLine("s3=" + s3);

int compteur = 0;
while (compteur < 5) 
{
    Console.WriteLine("compteur="+compteur);
    //compteur = compteur + 1;
    compteur ++;
};

for(int i = 0; i < 5; i++)
{
    Console.WriteLine("i=" + i);
}

Compte c1 = new Compte();
Console.WriteLine("c1.Numero=" + c1.Numero); //appel automatique au get
c1.Numero = -5; //appel automatique au set qui va pas accepter la valeur invalide via le if(value>0) 
Console.WriteLine("c1.Numero=" + c1.Numero); 
c1.Numero = 1; //appel automatique au set qui va accepter la valeur correcte
Console.WriteLine("c1.Numero=" + c1.Numero); 
/*
//style de code en c++ et en java
c1.setNumero(-1);
Console.WriteLine("c1.Numero=" + c1.getNumero());
c1.setNumero(1);
Console.WriteLine("c1.Numero=" + c1.getNumero());
*/

c1.Label = "compte_c1";
c1.Solde = 150.0;
c1.Crediter(30.0); //premier appel de Crediter() avec this correspondant à c1
Console.WriteLine("c1.Solde=" + c1.Solde);//180=150+30

Compte c2; //c2 est de type "Classe Compte" , et donc impossible d'écrire c2 = new Client();
c2=new Compte(); //ne mot clef new créer un nouvel exemplaire (nouvelle instance) de la classe Compte
Console.WriteLine("c2.Solde=" + c2.Solde);//0 par défaut
c2.Crediter(40.0); //second appel de Crediter() avec this correspondant à c2
Console.WriteLine("c2.Solde=" + c2.Solde);//40=40+0

Compte c3= new Compte(3 , "compte c3" , 200.0);//avec constructeur à 3 paramètres
//Console.WriteLine($"c3 Numero={c3.Numero} Label={c3.Label} Solde={c3.Solde}");
Console.WriteLine(c3.ToString());

Compte cpt = null;  //NB: la référence cpt (de type Compte)
                    //peut référencer n'importe quel compte (Compte ou compteEpargne)
CompteEpargne ce = null; //NB: la référence ce (de type CompteEprgne)
                         //ne peut référencer que des CompteEpargne
ce = new CompteEpargne()
{
    Numero = 5,
    Label = "compteEpargne",
    Solde = 200.0,
    TauxInteret = 2.0
};

CompteEpargne ce2 = new CompteEpargne(6,"ce2",300.0 , 1.0);
Console.WriteLine("ce2=" + ce2.ToString());
CompteEpargne ce3 = new CompteEpargne();
Console.WriteLine("ce3=" + ce3.ToString());

ce.Debiter(50); //on peut appeler une méthode héritée sans la reprogrammer
                //(c'est l'intéret de l'héritage)
ce.TauxInteret = 3;
Console.WriteLine("ce=" + ce.ToString());

//cpt = new Compte() { Numero = 12, Label = "SimpleCompte", Solde = 450 };
cpt = ce; //les références cpt et ce référencent toutes les deux la même instance (même objet)
Console.WriteLine("cpt=" + cpt.ToString());

//cpt.TauxInteret = 4.0; //impossible car certains Comptes n'ont pas de TauxInteret
if(cpt.GetType() == typeof(CompteEpargne)){
    //après avoir tester que l'objet au bout de la référence cpt est bien 
    //de type CompteEpargne , on va temporairement considérer que cpt est de type CompteEpargne

    Console.WriteLine("la référence cpt référence un objet de type CompteEpargne");
    ( (CompteEpargne) cpt).TauxInteret = 4.0;

    //la syntaxe (CompteEpargne) cpt est appelée "casting" et ça consiste à demander
    //à changer le type (seulement sur cette ligne de code)
}
else
{
    Console.WriteLine("la référence cpt ne référence pas un objet de type CompteEpargne");
}
Console.WriteLine("cpt=" + cpt.ToString());


Cercle cercle1 = new Cercle();
Console.WriteLine("juste apres construction : cercle1=" + cercle1.ToString());
cercle1.Xc = 10.0; //appel du set automatique
cercle1.Yc = 20.0;
cercle1.Rayon = -100.0; //appel du set qui vérifie valeur positive --> valeur pas prise en compte
Console.WriteLine("cercle1=" + cercle1.ToString()); //rayon toujours à 0
cercle1.Rayon = 100.0; //appel du set qui vérifie valeur positive --> valeur prise en compte
Console.WriteLine("après changements : cercle1=" + cercle1.ToString());
double p = cercle1.Perimetre();//la valeur de retour de cercle1.Perimetre
//est recopiée dans la variable p (on parle d'affectation)
Console.WriteLine("le rayon de de cercle1=" + cercle1.Rayon);
Console.WriteLine("le périmetre de cercle1=" + p);

if(cercle1.Rayon == 100.0) // double= == pour un test d'égalité
{
    Console.WriteLine("le rayon de cercle1 vaut bien 100.0 ");
}

Cercle cercle2 = new Cercle(50,50,100);
Console.WriteLine("cercle2=" + cercle2.ToString());

Cercle cercle3 = new Cercle() { Xc=260,Yc=260,Rayon=80 , Couleur="red"};
Console.WriteLine("cercle3=" + cercle3);

Console.WriteLine(cercle3.ToSvgString());

Figure fig = null;
//fig = new Figure(); //new direct sur la classe Figure impossible car c'est une classe abstraite
fig = new Cercle(); //encore possible même si Figure est abstract
ISurface surf = null;
surf = cercle3;
Console.WriteLine("surf=" + surf.ToString());
Console.WriteLine("perimetre de la surface=" + surf.Perimetre());

List<Figure> figures = new List<Figure>();
figures.Add(new Cercle() { Xc = 260, Yc = 260, Rayon = 80, Couleur = "red" });
figures.Add(new Rectangle() { X = 20, Y = 20, Largeur = 190, Hauteur = 234, Couleur = "green" });
figures.Add(new Ligne() { X1 = 20, Y1 = 300, X2 = 200, Y2=400,Couleur = "blue" });

List<String> lignes = new List<String>();  
lignes.Add("<svg width='500' height='500' xmlns='http://www.w3.org/2000/svg' version='1.1' >");
foreach(Figure f in figures)
{
    lignes.Add(f.ToSvgString());//polymorphisme (version Cercle ou Rectangle ou Ligne ou ...)
    //pas besoin de tester le type de figure , on appelle en boucle une opération de
    //même nom
}
lignes.Add("</svg>");
File.WriteAllLines("dessin.svg", lignes);
//fichier dessin.svg par défaut généré
//dans file:///C:/Users/Administrateur/source/repos/ConsoleApp1/ConsoleApp1/bin/Debug/net7.0/dessin.svg
