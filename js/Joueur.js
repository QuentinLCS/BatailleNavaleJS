class Joueur {

    nbBateaux;

    constructor(numJoueur, estUneIa) {
        this.bateaux = [];
        this.estInit = false;
        this.nbBateauxVivants;
        this.estUneIa = estUneIa;
    }

    getNom() {
        return this.nom;
    }

    getEstInit() {
        return this.estInit;
    }

    getNbBateauxVivants() {
        return this.nbBateauxVivants;
    }

    getEstUneIa() {
        return this.estUneIa;
    }

    setNom(numJoueur) {
        if (!numJoueur)
            this.nom = document.init.nomJoueur1.value;
        else if (!this.estUneIa)
            this.nom = document.init.nomJoueur2.value;
        if (this.nom == "") 
            this.nom = "Joueur " +(numJoueur+1);
    }

    setEstInit(estInit) {
        this.estInit = estInit;
    }

    setNbBateauxVivants(nbBateauxVivants) {
        this.nbBateauxVivants = nbBateauxVivants;
    }

    setEstUneIa(estUneIa) {
        this.estUneIa = estUneIa;
    }
    
}