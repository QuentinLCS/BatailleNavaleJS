class Bateau {

    constructor(coordonnees) {
        this.points = [];
        this.points.push(coordonnees);
        this.coule = false;
        Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setBateau(Plateau.i, true);
    }

    getPoints() {
        return this.points;
    }

    getCoule() {
        return this.coule;
    }

    setCoule(estCoule) {
        this.coule = estCoule;

        if (estCoule) 
            Jeu.joueurs[Plateau.i].setNbBateauxVivants(Jeu.joueurs[Plateau.i].getNbBateauxVivants()-1);
    }

    static initBateaux(coordonnees) {
        Jeu.joueurs[Plateau.i].bateaux[Plateau.j] = new Bateau(coordonnees);
        Plateau.j++; 
        
        Affichage.playSound(0);
        Jeu.plateau.afficherPlateau();

        if (Plateau.j == Joueur.nbBateaux) { 
            Jeu.joueurs[Plateau.i].setEstInit(true);
            Plateau.j = 0;
        }

    }
}