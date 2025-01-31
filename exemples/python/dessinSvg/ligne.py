from figure import Figure;

#### classe Ligne héritant de Figure:
class Ligne(Figure):

    # constructeur avec valeurs par défaut:
    def __init__(self, x1=0 , y1=0, x2=0 , y2=0, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Figure.__init__(self,*args, **kwargs)
        self.x1 = x1 ; self.y1=y1; self.x2=x2; self.y2=y2;

    # méthode spéciale __str__ (équivalent à .toString() de java)
    # qui sera automatiquement appelée lors d'un print(chat):
    def __str__(self):
        #return "Ligne(x1=" + str(self.x1) + " y1=" + str(self.y1) + " x2=" + str(self.x2) + " y2=" + str(self.y2)  + ")" + " as " + super().__str__();
        return ("Ligne(x1={0} y1={1} x2={2} y2={3})".format(self.x1,self.y1,self.x2,self.y2) +
            " as " + super().__str__())   # Figure.__str__(self)


    def toBeginOfSvgString(self):
        return "<line x1='{0}' y1='{1}' x2='{2}' y2='{3}' ".format(self.x1,self.y1,self.x2,self.y2)

    def deplacer(self, dx, dy):
        self.x1 += dx; self.x2 += dx
        self.y1 += dy; self.y2 += dy