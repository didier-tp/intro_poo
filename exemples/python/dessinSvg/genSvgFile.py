from ligne import Ligne
from cercle import Cercle

ligne1 = Ligne(10,20 , 150,170,"red")
print(ligne1)
print(ligne1.toSvgString())

cercle1 = Cercle(200,250,80,"blue")
print("cercle1=",cercle1,"perimetre=",cercle1.perimetre(), "aire=",cercle1.aire())


listeFigures = [];
listeFigures.append(Ligne(10,20 , 150,170,"blue"))
listeFigures.append(Cercle(200,250,80,"red"))

debutSvg= "<svg xmlns='http://www.w3.org/2000/svg' height='600' width='800'>" + "\n"
finSvg="</svg>"
contenuSvg=debutSvg;
for fig in listeFigures :
    fig.deplacer(50,5)
    contenuSvg += (fig.toSvgString() + "\n")
contenuSvg += finSvg
print("contenuSvg:\n", contenuSvg )

#ouvrir un nouveau fichier et écrire  dedans:
f= open("dessin.svg","wt")  #w:write , t:text
f.write(contenuSvg)
f.close()