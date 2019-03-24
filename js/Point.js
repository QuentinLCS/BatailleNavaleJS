class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y; 
        this.touche = false;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getTouche() {
        return this.touche;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setTouche(newVal, adversaire) {
        let j = 0;
        let joueur = Plateau.i;

        if(Jeu.joueurs[1].getEstUneIa()) {
            joueur++; adversaire--;
        }

        this.touche = newVal;

        for (let i = 0; i < Jeu.joueurs[joueur].bateaux[Plateau.j].points.length; i++) {
            if (Jeu.joueurs[Jeu.joueurs[1].getEstUneIa() ? joueur : adversaire].bateaux[Plateau.j].points[i].getTouche()) {
                j++;
            }
        }

        if (Jeu.joueurs[joueur].bateaux[Plateau.j].points.length == j)
            Jeu.joueurs[joueur].bateaux[Plateau.j].setCoule(true);
    }

    estTouche(p) {
        let resultat = -1;

        if (p.getX() == this.getX() && p.getY() == this.getY()) 
            resultat = 0;
        else {
            let distance = Math.sqrt(Math.pow(this.getX() - p.getX(), 2) + Math.pow(this.getY() - p.getY(), 2));
            if ( distance <= 8 )
                resultat = distance;
        }
        return resultat;
    }

}