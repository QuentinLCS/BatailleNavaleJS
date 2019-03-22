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
        console.log("==== JEU ====");
        console.log("gestionTours() i = "+Plateau.i+ "; numTour = " + Jeu.numTour);

        if (Jeu.numTour == 0) {
            Plateau.i = 0;
            Jeu.numTour = 1;
        }

        for (let i = 0; i < Joueur.nbBateaux; i++) {
            if (Jeu.joueurs[Plateau.i == 1 ? 0 : 1].bateaux[i].getPoints()[0].estTouche(coordonnees) == 0) {
                Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setTouche(Plateau.i, true);
                Jeu.joueurs[Plateau.i == 1 ? 0 : 1].bateaux[Plateau.j].points[0].setTouche(true);
                console.log("--------- Touche ! ---------");
            } else if (Jeu.joueurs[Plateau.i == 1 ? 0 : 1].bateaux[i].getPoints()[0].estTouche(coordonnees) == -1) {
                console.log("--------- Pas touche ! ---------");
                Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setTire(Plateau.i, true);
            } else {
                Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setProche(Plateau.i, true);
                console.log(Jeu.joueurs[Plateau.i == 1 ? 0 : 1].bateaux[i].getPoints()[0].estTouche(coordonnees));
            }
        }      

    }

    static gestionTours() {

        document.body.style.backgroundImage = "url(images/fond_jeu.jpg)";
        console.log("gestionTours() i = "+Plateau.i+ "; numTour = " + Jeu.numTour);
        Jeu.joueurs[Plateau.i].affichageJoueur();
        Plateau.i++;
        Jeu.plateau.afficherPlateau();
        console.log("gestionTours() i = "+Plateau.i+ "; numTour = " + Jeu.numTour);

        if (Plateau.i > 1) {
            Plateau.i = 0;
            Jeu.numTour++;
        }
    }

    static transition() {
        console.log("----- I = " +Plateau.i+ " -------")
        if (!Jeu.plateau.getClickIsOn()) {
            document.getElementById("partie").style.display = "none";
            document.getElementById("transition").style.display = "block";
            document.getElementById("transition-prochain").innerHTML = Jeu.joueurs[Plateau.i].getNom();
            Jeu.plateau.setClickIsOn(true);
        } else {

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