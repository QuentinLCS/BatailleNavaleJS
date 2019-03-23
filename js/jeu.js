class Jeu {

    joueurs = [];
    numTour;
    plateau;

    static setMode(mode) { //test

        Jeu.plateau = new Plateau();

        switch (mode) {
            case 1:
                Jeu.plateau.setTaille(10);
                break;
            case 2:
                Jeu.plateau.setTaille(15);
                break;
            case 3:
                Jeu.plateau.setTaille(20);
                break;
        }
        
        document.getElementById("index-box").style.display = "none";
        document.getElementById("initialisation").style.display = "block";

    }

    static lancerPartie() {

        document.getElementById("initialisation").style.display = "none";
        tours.innerHTML = "<p><h2>Veuillez choisir vos bateaux</h2></p>";
        Jeu.plateau.afficherPlateau();

        Joueur.nbBateaux = document.init.nbBateaux.value;
        Jeu.joueurs = [new Joueur(0), new Joueur(1)];
        Jeu.numTour = 0;
    }
    
    static jeu(coordonnees) {

        let adversaire = Plateau.i == 1 ? 0 : 1;

        for (let i = 0; i < Joueur.nbBateaux; i++) {
            if (Jeu.joueurs[adversaire].bateaux[i].getPoints()[0].estTouche(coordonnees) == 0) {

                Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setTouche(Plateau.i, true);
                Jeu.joueurs[adversaire].bateaux[i].points[0].setTouche(true, adversaire);

                if (Jeu.joueurs[Plateau.i].bateaux[i].getCoule()) {

                    Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setBateau(false);
                    Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setCoule(Plateau.i, true);
                
                }
            } 
            
            else if (Jeu.joueurs[adversaire].bateaux[i].getPoints()[0].estTouche(coordonnees) == -1)
                Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setTire(Plateau.i, true);
            
            else 
                Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setProche(Plateau.i, true);
        }
        
        Jeu.plateau.afficherPlateau();

    }

    static transition() {
        if (!Jeu.plateau.getClickIsOn()) {
            if (!Jeu.joueurs[Plateau.i].getNbBateauxVivants()) {
                document.getElementById("transition-texte").innerHTML = "Victoire de";
                document.getElementById("transition-tips").innerHTML = Jeu.joueurs[Plateau.i == 1 ? 0 : 1].getNom()+ " tire comme un pied !";
                document.getElementById("bouton-pret").innerHTML = "REVENIR AU MENU";
                Jeu.numTour = -1;
            } else
                Plateau.i<1 ? Plateau.i++ : Plateau.i--;
            document.getElementById("partie").style.display = "none";
            document.getElementById("transition").style.display = "block";
            document.getElementById("transition-prochain").innerHTML = Jeu.joueurs[Plateau.i].getNom();
            Jeu.plateau.setClickIsOn(true);
            if (!Jeu.numTour)
                Jeu.numTour = 1;
            else
                document.body.style.backgroundImage = "url(images/fond_jeu.jpg)";
        } else {
            document.getElementById("transition").style.display = "none";
            if (Jeu.numTour == -1) {
                document.getElementById("index-box").style.display = "block";
                document.body.style.backgroundImage = "url(images/fond_accueil.png)";
            } else {
                document.getElementById("partie").style.display = "block";
                Jeu.plateau.afficherPlateau();
                Jeu.joueurs[Plateau.i].affichageJoueur();
            }
        }
    }
    

    static regleDuJeu(){

        if (document.getElementById('bouton').innerHTML == 'Règle du jeu') {
            document.getElementById('bouton').innerHTML = 'Règle du jeu';
            document.getElementById('regleDuJeu').style.display = 'block';
        } else {
            document.getElementById('bouton').innerhtml = 'Règle du jeu';
            document.getElementById('regleDuJeu').style.display='none';
        }
    }

}
// document.forms["general"].elements["champ1"].focus(); pour donner le focus sur une case