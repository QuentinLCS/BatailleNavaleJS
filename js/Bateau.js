class Bateau {

    constructor(coordonnees) {
        this.points = [coordonnees];
        this.coule = false;
    }

    static initBateaux(coordonnees) {
        joueurs[Plateau.i].bateaux[Plateau.j] = new Bateau(coordonnees);
        Plateau.j++; 

        if (Plateau.j == Joueur.nbBateaux) { 
            joueurs[Plateau.i].estInit = true;
            Plateau.i++; Plateau.j = 0;
        }
    }

    getPoints() {
        return this.points;
    }

}