class Bateau {

    constructor(coordonnees) {
        this.points.push(coordonnees);
        this.coule = false;
        Jeu.plateau.tableau[coordonnees.getX][coordonnees.getY].setBateau(true);
        console.log("point["+this.points[0].getX()+";"+this.points[0].getY()+"]")
    }

    static initBateaux(coordonnees) {

        Jeu.joueurs[Plateau.i].bateaux[Plateau.j] = new Bateau(coordonnees);
        Plateau.j++; 

        if (Plateau.j == Joueur.nbBateaux) { 
            Jeu.joueurs[Plateau.i].estInit = true;
            Plateau.i++; Plateau.j = 0;
        }

        if (Jeu.joueurs[0].estInit && Jeu.joueurs[1].estInit)
            Plateau.i = 0;

    }

    getPoints() {
        return this.points;
    }

}