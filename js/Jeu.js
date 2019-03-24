class Jeu {

    joueurs = [];
    numTour;
    plateau;

    static setMode(mode) { //test

        Jeu.plateau = new Plateau();

        switch (mode) {
            case 1:
                Jeu.plateau.setTaille(10);
                document.documentElement.style.setProperty('--main-color', '34, 175, 194');
                break;
            case 2:
                Jeu.plateau.setTaille(15);
                break;
            case 3:
                Jeu.plateau.setTaille(20);
                document.documentElement.style.setProperty('--main-color', '103, 34, 194'); 
                break;
        }
        
        document.getElementById("index-box").style.display = "none";
        document.getElementById("initialisation").style.display = "block";
        Affichage.boutonsOptions(1);
    }

    static lancerPartie() {

        document.getElementById("initialisation").style.display = "none";
        document.getElementById("partie").style.display = "flex";
        Affichage.boutonsOptions(2);
        Joueur.nbBateaux = document.init.nbBateaux.value;
        Jeu.joueurs = [new Joueur(0), new Joueur(1)];
        Jeu.numTour = 0;
        Jeu.transition(false);
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
    
            else {
                Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setProche(Plateau.i, true);
                if (Jeu.plateau.getTaille() == 20) {
                    Jeu.plateau.tableau[Jeu.joueurs[adversaire].bateaux[Plateau.j].getPoints()[0].getX()][Jeu.joueurs[adversaire].bateaux[Plateau.j].getPoints()[0].getY()].setBateau(adversaire, false);
                    Jeu.joueurs[adversaire].setEstInit(false);
                    setTimeout(function() {
                        Jeu.plateau.clearInts(Plateau.i == 1 ? 0 : 1);
                    }, 2000);
                }
            }
        }

        Jeu.plateau.afficherPlateau();

    }

    static transition(forceHome) {
        Affichage.regles(true);
        if (!Jeu.plateau.getClickIsOn() && !forceHome) {
            if (!Jeu.joueurs[Plateau.i].getNbBateauxVivants()) {
                document.getElementById("transition-texte").innerHTML = "Victoire de";
                document.getElementById("transition-tips").innerHTML = Jeu.joueurs[Plateau.i == 1 ? 0 : 1].getNom()+ " tire comme un pied !";
                document.getElementById("bouton-pret").innerHTML = "REVENIR AU MENU";
                document.body.style.backgroundImage = "url(images/fond_victoire.jpg)";
                Jeu.numTour = -1;
            } else {
                Plateau.i<1 ? Plateau.i++ : Plateau.i--;
                document.getElementById("transition-texte").innerHTML = "Au tour de";
                document.getElementById("transition-tips").innerHTML = "TIPS : Cachez l'écran à votre adversaire !";
                document.getElementById("bouton-pret").innerHTML = "PRET";
            }
                
            document.getElementById("partie").style.display = "none";
            document.getElementById("transition").style.display = "block";
            document.getElementById("transition-prochain").innerHTML = Jeu.joueurs[Plateau.i].getNom();
            Jeu.plateau.setClickIsOn(true);
            if (!Jeu.numTour && Jeu.joueurs[0].getEstInit() && Jeu.joueurs[1].getEstInit()) {
                Jeu.numTour = 1;
                document.body.style.backgroundImage = "url(images/fond_jeu.jpg)";    
            }     
        } else {
            document.getElementById("transition").style.display = "none";
            if (Jeu.numTour == -1 || forceHome) {
                Affichage.boutonsOptions();
                document.getElementById("partie").style.display = "none";
                document.getElementById("index-box").style.display = "block";
                document.body.style.backgroundImage = "url(images/fond_accueil.png)";
                document.documentElement.style.setProperty('--main-color', '1, 139, 231'); 
            } else {
                document.getElementById("partie").style.display = "flex";
                Jeu.plateau.afficherPlateau();
                Affichage.infosTour();
                Jeu.numTour += Plateau.i;
                if (!Jeu.joueurs[0].getEstInit() || !Jeu.joueurs[1].getEstInit())
                    Affichage.changerCurseurs("cursor-addBoat");                        
            }
        }
    }

    static music() {
        if (document.getElementById("music").paused) {
            document.getElementById("music").play();
            document.getElementById("music-bouton").style.backgroundImage = "url(images/bouton_volume_on.svg)";
        } else {
            document.getElementById("music").pause();
            document.getElementById("music-bouton").style.backgroundImage = "url(images/bouton_volume_off.svg)";
        }
    }
}
// document.forms["general"].elements["champ1"].focus(); pour donner le focus sur une case
