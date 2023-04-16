/*
//V1 sans classe
Console.WriteLine("Hello, World!");

string s1 = "myString";
Console.WriteLine(s1.ToUpper());

int a = 18;
int b = 6;
int c = a + b;
Console.WriteLine(c);

double radius = 2.50;
double area = Math.PI * radius * radius;
Console.WriteLine("area="+area);

int counter = 0;
while (counter < 10)
{
    Console.WriteLine($"The counter is {counter}");
    counter++;
}

for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"i={i}");
}

var names = new List<string> { "Didier", "Jean", "Luc" , "Ana" };
names.Add("Maria");
names.Add("Bill");
names.Remove("Ana");
foreach (var name in names)
{
    Console.WriteLine($"Hello {name.ToUpper()}!");
}
Console.WriteLine($"first element is {names[0]}  and size of liste (.Count) is {names.Count} ");
*/

using System.Text.Json;

//namespace MiniBank
//{
//V2 avec classe Program et methode Main
class Program
    {
        static void Main(string[] args)
        {
        Console.WriteLine("Hello, World!");
        Compte compteA = new Compte(); //with default constructor
        compteA.Label = "compteA";
        compteA.Solde = -6666666666; //solde invalide qui ne sera pas pris en compte (via setter)
        Console.WriteLine("compteA=" + compteA);
        compteA.Solde = 50;//solde valide qui ne sera pris en compte (via setter)
        compteA.Crediter(20);
        Console.WriteLine("solde du compteA=" + compteA.Solde);
        //Console.WriteLine("compteA=" + compteA.ToString());
        Console.WriteLine("compteA=" + compteA); //avec .ToString() implicite/automatique

        Compte compteB = new Compte() { Label="compteB" , Solde=200}; //with default constructor and object initializer { Prop1=val1; Prop2=val2; }
        Console.WriteLine("compteB=" + compteB);

        Compte compteC = new Compte("compteC", 500.0); //with specific contructor
        Console.WriteLine("compteC=" + compteC);


        Figure f =new Figure();
        f.Couleur = "red";
        Console.WriteLine($"figure de couleur {f.Couleur}");
        Console.WriteLine("f=" + f);
        Cercle c1 = new Cercle() { Couleur="Red" , Rayon = 100};
        Console.WriteLine("c1=" + c1);
        Console.WriteLine($"perimetre de c1={c1.Perimetre()}");

        Rectangle r1 = new Rectangle() { X1 = 10, Y1 = 10, X2 = 110, Y2=110 };
        Console.WriteLine("r1=" + r1);
        Console.WriteLine($"perimetre de r1={r1.Perimetre()}");

        var listeFigures = new List<Figure> { f , c1 , r1};
        foreach (var fig in listeFigures)
        {
            var serializeOptions = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};
            string jsonString = JsonSerializer.Serialize(fig, serializeOptions);
            Console.WriteLine($"{fig.ToString()} perimetre={fig.Perimetre()} , asJSonString={jsonString}");
        }
    }
    }
//}