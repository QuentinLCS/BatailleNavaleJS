class Jeu {

    joueurs = [];
    numTour;
    plateau;

    static setMode(mode) { 

        if (mode < 4) {
            Jeu.plateau = new Plateau();
            document.getElementById("modes").style.display = "none";
            document.getElementById("nbJoueurs").style.display = "flex";
        } if (mode >= 4) {
            document.getElementById("nbJoueurs").style.display = "none";
            document.getElementById("index-box").style.display = "none";
            Affichage.initialisation(mode);
            document.forms["init"].elements["nomJoueur1"].focus();
        }

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
            case 4:
                Jeu.joueurs = [new Joueur(0, false), new Joueur(1, true)];
                break;
            case 5:
                Jeu.joueurs = [new Joueur(0, false), new Joueur(1, false)];
                break;
        }
            
        Affichage.boutonsOptions(1);
    }

    static lancerPartie() {

        if (document.init.nbBateaux.value == 1) {
            if (Jeu.joueurs[1].getEstUneIa()) {
                Jeu.joueurs[0].setEstInit(true);
                Jeu.joueurs[1].setEstInit(true);
                Bateau.initBateaux(new Point(Jeu.getRandomInt(Jeu.plateau.getTaille()), Jeu.getRandomInt(Jeu.plateau.getTaille())));
            }
            Joueur.nbBateaux = document.init.nbBateaux.value;
            for (let i = 0; i < 2; i++) {
                Jeu.joueurs[i].setNbBateauxVivants(Joueur.nbBateaux);
                Jeu.joueurs[i].setNom(i);
            }
            document.getElementById("initialisation").style.display = "none";
            document.getElementById("partie").style.display = "flex";
            if (Jeu.joueurs[1].getEstUneIa()) { 
                Affichage.boutonsOptions(2);
                Jeu.numTour = 1;
            } else {
                Jeu.numTour = 0;
                Affichage.boutonsOptions(3);
            }
            Jeu.transition(false);
        } else {
            document.init.nbBateaux.value = 1;
            document.init.nbBateaux.style.backgroundColor = "#FFE8E8"
        }
    }
    
    static jeu(coordonnees) {

        let adversaire = Plateau.i == 1 ? 0 : 1;

        for (let i = 0; i < Joueur.nbBateaux; i++) {
            if (Jeu.joueurs[adversaire].bateaux[i].getPoints()[0].estTouche(coordonnees) == 0) {
                Affichage.playSound(1);
                Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setTouche(Plateau.i, true);
                Jeu.joueurs[adversaire].bateaux[i].points[0].setTouche(true, adversaire);

                if (Jeu.joueurs[Jeu.joueurs[1].getEstUneIa() ? adversaire : Plateau.i].bateaux[i].getCoule()) {

                    Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setBateau(Plateau.i, false);
                    Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setCoule(Plateau.i, true);
                
                }
            } 
            
            else if (Jeu.joueurs[adversaire].bateaux[i].getPoints()[0].estTouche(coordonnees) == -1) {
                Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setTire(Plateau.i, true);
                Affichage.playSound(0);
            }
            else {
                Affichage.playSound(0);
                Jeu.plateau.tableau[coordonnees.getX()][coordonnees.getY()].setProche(Plateau.i, true);
                if (Jeu.plateau.getTaille() == 20) {
                    Jeu.plateau.tableau[Jeu.joueurs[adversaire].bateaux[Plateau.j].getPoints()[0].getX()][Jeu.joueurs[adversaire].bateaux[Plateau.j].getPoints()[0].getY()].setBateau(adversaire, false);
                    setTimeout(function() {
                        if (Jeu.joueurs[1].getEstUneIa()) {
                            Jeu.joueurs[adversaire].bateaux[Plateau.j].getPoints()[0].setX(Jeu.getRandomInt(Jeu.plateau.getTaille()));
                            Jeu.joueurs[adversaire].bateaux[Plateau.j].getPoints()[0].setY(Jeu.getRandomInt(Jeu.plateau.getTaille()));
                        } else
                            Jeu.joueurs[adversaire].setEstInit(false);
                        Jeu.plateau.clearInts(Plateau.i);
                    }, Jeu.joueurs[1].getEstUneIa() ? 1000 : 2000);
                }
            }
        }
        Jeu.plateau.afficherPlateau();
    }

    static transition(forceHome) {
        Affichage.regles(true);
        if (!Jeu.plateau.getClickIsOn() && !forceHome) {
            if (Jeu.joueurs[0].getEstInit() && Jeu.joueurs[1].getEstInit() && Jeu.numTour == 1) {
                document.body.style.backgroundImage = "none, url(images/fond_jeu.jpg)";
                Affichage.bateau(true);
            } if (!Jeu.joueurs[Plateau.i].getNbBateauxVivants()) {
                Affichage.playSound(2);
                document.getElementById("transition-texte").innerHTML = "Victoire de";
                if (Jeu.joueurs[1].getEstUneIa())
                    document.getElementById("transition-tips").innerHTML = "Bateaux trouvés en " +Jeu.numTour+ " tours, bien joué !";
                else
                    document.getElementById("transition-tips").innerHTML = Jeu.joueurs[Plateau.i == 1 ? 0 : 1].getNom()+ " a coulé ! (" +Jeu.numTour+ " tours)";
                document.getElementById("bouton-pret").innerHTML = "REVENIR AU MENU";
                if (Jeu.numTour != -1) document.body.style.backgroundImage = "url(images/fond_victoire.gif), url(images/fond_victoire.jpg)";
                    Jeu.numTour = -1;
            } else {
                if (Plateau.i == 1 || !Jeu.joueurs[1].getEstUneIa()) 
                    Plateau.i<1 ? Plateau.i++ : Plateau.i--;
                document.getElementById("transition-texte").innerHTML = "Au tour de";
                document.getElementById("transition-tips").innerHTML = "TIPS : Cachez l'écran à votre adversaire !";
                document.getElementById("bouton-pret").innerHTML = "PRET";
            }
                
            if (!Jeu.joueurs[1].getEstUneIa() || (!Jeu.joueurs[Plateau.i].getNbBateauxVivants())) {
                document.getElementById("partie").style.display = "none";
                document.getElementById("transition").style.display = "block";
                document.getElementById("transition-prochain").innerHTML = Jeu.joueurs[Plateau.i].getNom();
            } else {
                document.getElementById("partie").style.display = "flex";
                Jeu.plateau.afficherPlateau();
                Affichage.infosTour();
                Jeu.numTour++;
            }

            Jeu.plateau.setClickIsOn(true);
                
        } else {
            document.getElementById("transition").style.display = "none";
            if (Jeu.numTour == -1 || forceHome) {
                Affichage.boutonsOptions();
                document.getElementById("partie").style.display = "none";
                document.getElementById("nbJoueurs").style.display = "none";
                document.getElementById("index-box").style.display = "block";
                document.getElementById("modes").style.display = "flex";
                document.getElementById("initialisation").style.display = "none";
                document.body.style.backgroundImage = "none, url(images/fond_accueil.png)";
                document.documentElement.style.setProperty('--main-color', '1, 139, 231'); 
                Jeu.numTour = -1;
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

    static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}
