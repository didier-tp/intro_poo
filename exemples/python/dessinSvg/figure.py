from abc import ABC, abstractmethod


########### code de la classe AnimalDomestique en python :
# NB: ABC signifie AbstractBaseClass
class Figure(ABC):

    # constructeur avec valeurs par défaut:
    def __init__(self, couleur=""):
        self.couleur = couleur

    # méthode spéciale __str__ (équivalent à .toString() de java)
    # qui sera automatiquement appelée lors d'un print(figure):
    def __str__(self):
        return "Figure(couleur=" + self.couleur + ")"

    @abstractmethod
    def toBeginOfSvgString(self):
        pass

    @abstractmethod
    def deplacer(self, dx, dy):
        pass

    def toSvgString(self):
        #return self.toBeginOfSvgString() + " stroke='" + self.couleur + "' fill='none' />"
        return self.toBeginOfSvgString() + " stroke='{0}' fill='{1}' />".format(self.couleur,'none')
