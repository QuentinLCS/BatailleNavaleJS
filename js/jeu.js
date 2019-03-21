class Jeu {

    joueurs = [];
    numTour = 0;
    plateau;

    static setMode(mode) { //test

        Jeu.plateau = new Plateau();

        switch (mode) {
            case 1:
                Jeu.plateau.setTaille(15);
                break;
            case 2:
                Jeu.plateau.setTaille(25);
                break;
            case 3:
                Jeu.plateau.setTaille(25);
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
    }
    
    static jeu(coordonnees) {
       
        for (let i = 0; i < Joueur.nbBateaux; i++) {
            console.log("==== Fonction JEU ====")
            console.log("i = " +Plateau.i)
            console.log("if1");
            if (Jeu.joueurs[1].bateaux[i].getPoints()[0].estTouche(coordonnees) == true) {
                console.log("if2");
                tableau[coordonnees.getX()][coordonnees.getY()].setTouche(Plateau.i, true);
                console.log("if2->");
            } else if (Jeu.joueurs[1].bateaux[i].getPoints()[0].estTouche(coordonnees) == false) {
                console.log("if3");
                tableau[coordonnees.getX()][coordonnees.getY()].setTire(Plateau.i, true);
                console.log("if3->");
            } else {
                console.log("if4");
                tableau[coordonnees.getX()][coordonnees.getY()].setProche(Plateau.i, true);
                console.log("if4->");
                console.log(Jeu.joueurs[1].bateaux[i].getPoints()[0].estTouche(coordonnees));
            }
        }
    }

    static gestionTours() {
        document.body.style.backgroundImage = "url(images/fond_jeu.jpg)";
        Jeu.joueurs[Plateau.i].affichageJoueur();
        Plateau.i++;

        if (Plateau.i >= 1 || !numTour) {
            Plateau.i = 0;
            numTour++;
        }
    }
}
// document.forms["general"].elements["champ1"].focus(); pour donner le focus sur une case
function regleDuJeu(){
    if(document.getElementById('bouton').innerHTML == 'Règle du jeu'){
        document.getElementById('bouton').innerHTML = 'Règle du jeu';
        document.getElementById('regleDuJeu').style.display = 'block';
    }else{
        document.getElementById('bouton').innerhtml = 'Règle du jeu';
        document.getElementById('regleDuJeu').style.display='none';
    }
}