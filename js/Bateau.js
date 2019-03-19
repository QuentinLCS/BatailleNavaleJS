class Bateau {

    static nbBateau;

    Bateau() {
        this.points = [new Point(), new Point()];
    }

    get nbBateau() {
        return nbBateau;
    }

    estTouche(p) {
        return p == this.points[0] || p == this.points[1];
    }
}