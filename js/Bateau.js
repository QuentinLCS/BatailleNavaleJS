class Bateau {

    constructor(ligne, colonne) {
        this.points = [new Point(ligne, colonne)];
        this.coule = false;
    }

    estTouche(p) {
        return p == this.points[0] || p == this.points[1];
    }

    static initBateaux(ligne, colonne) {

        joueurs[Plateau.i].bateaux[Plateau.j] = new Bateau(ligne, colonne);
        Plateau.j++; 

        if (Plateau.j == Joueur.nbBateaux) { 
            joueurs[Plateau.i].estInit = true;
            Plateau.i++; Plateau.j = 0;
        }
    }

}