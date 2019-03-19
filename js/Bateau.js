class Bateau {

    static nbBateaux;

    Bateau() {
        this.points = [new Point(), new Point()];
    }

    estTouche(p) {
        return p == this.points[0] || p == this.points[1];
    }
}