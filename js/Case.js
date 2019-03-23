class Case {
    constructor() {
        this.touche = [false, false];
        this.proche = [false, false];
        this.tire = [false, false];
        this.bateau = [false, false];
        this.coule = [false, false];
    }

    getTouche(numJoueur) {
        return this.touche[numJoueur];
    }

    getProche(numJoueur) {
        return this.proche[numJoueur];
    }

    getTire(numJoueur) {
        return this.tire[numJoueur];
    }

    getBateau(numJoueur) {
        return this.bateau[numJoueur];
    }

    getCoule(numJoueur) {
        return this.coule[numJoueur];
    }

    setTouche(numJoueur, newVal) {
        this.touche[numJoueur] = newVal;
    }

    setProche(numJoueur, newVal) {
        this.proche[numJoueur] = newVal;
    }

    setTire(numJoueur, newVal) {
        this.tire[numJoueur] = newVal    
    }

    setBateau(numJoueur, newVal) {
        this.bateau[numJoueur] = newVal;
    }

    setCoule(numJoueur, newVal) {
        this.coule[numJoueur] = newVal;
    }
}