class Bateau {

    constructor(ligne, colonne) {
        this.points = [new Point(ligne, colonne)];
        this.coule = false;
    }

    estTouche(p) {
        return p == this.points[0] || p == this.points[1];
    }


}