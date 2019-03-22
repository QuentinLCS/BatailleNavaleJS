class Joueur {

    nbBateaux;

    constructor(numJoueur) {

            if (!numJoueur)
                this.nom = document.init.nomJoueur1.value;
            else
                this.nom = document.init.nomJoueur2.value;
            if (this.nom == "") 
                this.nom = "Joueur " +numJoueur;
        this.bateaux = [];
        this.estInit = false;
        
    }

    getNom() {
        return this.nom;
    }

    setNom(nom) {
        this.nom = nom;
    }

    affichageJoueur() {
        tours.innerHTML = "<p><h2>Tour n°" +Jeu.numTour+ "</h2></p>";
        nomJoueur.innerHTML = "<p><h2>" +Jeu.joueurs[Plateau.i].getNom()+ "</h2></p>"
    }
    
}