class Joueur {

    nbBateaux;

    constructor(numJoueur) {

            if (!numJoueur)
                this.nom = document.init.nomJoueur1.value;
            else
                this.nom = document.init.nomJoueur2.value;
            if (this.nom == "") 
                this.nom = "Joueur " +(numJoueur+1);
        this.bateaux = [];
        this.estInit = false;
        this.nbBateauxVivants = Joueur.nbBateaux;
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

    setNom(nom) {
        this.nom = nom;
    }

    setEstInit(estInit) {
        this.estInit = estInit;
    }

    setNbBateauxVivants(nbBateauxVivants) {
        this.nbBateauxVivants = nbBateauxVivants;
    }

    affichageJoueur() {
        document.getElementById("tours").innerHTML = "<p><h2>Tour n°" +Jeu.numTour+ "</h2></p>";
        document.getElementById("nomJoueur").innerHTML = "<p><h2>" +Jeu.joueurs[Plateau.i].getNom()+ "</h2></p>"
    }
    
}