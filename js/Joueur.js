class Joueur {

    nbBateaux;

    constructor(numJoueur) {

        if (!numJoueur) 
            this.nom = document.init.nomJoueur1.value;
        else
            this.nom = document.init.nomJoueur2.value;
        
        this.bateaux = [];
        this.estInit = false;
        
    }

    affichageJoueur() {
        tours.innerHTML = "<p><h2>Tour n°" +Jeu.numTour+ "</h2></p>";
        nomJoueur.innerHTML = "<p><h2>" +Jeu.joueurs[Plateau.i].nom+ "</h2></p>"
    }
    
}