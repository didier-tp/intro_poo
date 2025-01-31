import math
from figure import Figure

#### classe Cercle héritant de Figure:
class Cercle(Figure):

    # constructeur avec valeurs par défaut:
    def __init__(self, xc=0 , yc=0, r=0 , *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Figure.__init__(self,*args, **kwargs)
        self.xc = xc ; self.yc=yc; self.r=r

    # méthode spéciale __str__ (équivalent à .toString() de java)
    # qui sera automatiquement appelée lors d'un print(chat):
    def __str__(self):
        return ("Cercle(xc={0} yc={1} r={2})".format(self.xc, self.yc, self.r) +
                " as " + super().__str__())  # Figure.__str__(self)

    def toBeginOfSvgString(self):
        return "<circle cx='{0}' cy='{1}' r='{2}' ".format(self.xc, self.yc, self.r)

    def perimetre(self):
        return 2 * math.pi * self.r

    def aire(self):
        return math.pi * self.r * self.r

    def deplacer(self, dx, dy):
        self.xc += dx
        self.yc += dy