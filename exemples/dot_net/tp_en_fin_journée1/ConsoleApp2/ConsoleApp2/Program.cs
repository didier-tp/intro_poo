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

Cercle cercle3 = new Cercle() { Xc=60,Yc=60,Rayon=80};
Console.WriteLine("cercle3=" + cercle3);


