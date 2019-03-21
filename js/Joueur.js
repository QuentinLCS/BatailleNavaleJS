class Joueur {

    nbBateaux;

    constructor(nbJoueur) {

        if (!nbJoueur) 
            this.nom = document.init.nomJoueur1.value;
        else
            this.nom = document.init.nomJoueur2.value;
        
        this.bateaux = [];
        this.estInit = false;
        
    }

    affichageJoueur() {
        tours.innerHTML = "<p><h2>Tour " +numTour+ "</h2></p>";
        nomJoueur.innerHTML = "<p><h2>" +joueurs[Plateau.i].nom+ "</h2></p>"
    }
    
}