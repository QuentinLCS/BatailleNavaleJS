function setMode(mode) { //test

    switch (mode) {
        case 1:
            plateau = new Plateau(15);
            break;
        case 2:
            plateau = new Plateau(30);
            break;
        case 3:
            plateau = new Plateau(30);
            break;
    }
    
    document.getElementById("index-box").style.display = "none";
    document.getElementById("initialisation").style.display = "block";

}

function lancerPartie() {

    //Mode de jeu normal et difficile
    //Normal dit si on est loin ou pas
    //Difficile il part à l'opposé
    // Plus loin que 6 rien
    // moins de 6 dit la distance
    // touché ... (faire un système de couleurs)

    // Système de hover comme jérémy

    //.innerhtml permet d'insérer du html
    plateau;
    joueurs = [];
    numTour = 0;

    document.getElementById("initialisation").style.display = "none";
    plateau.afficherPlateau();

    Joueur.nbBateaux = document.init.nbBateaux.value;

    for (let i = 0; i < 2; i++) {
        joueurs[i] = new Joueur(i);
    }
}
    
function jeu(caseSelectionee, coordonnees) {
       
    for (let i = 0; i < Joueur.nbBateaux; i++) {
        if (!Plateau.i) {
            if (joueurs[1].bateaux[i].getPoints()[0].estTouche(coordonnees) == true) {
                console.log("if1");
                document.caseSelectionee.style.backgroundColor = "rgb(0, 200, 13, 0.301)";
            } else if (joueurs[1].bateaux[i].getPoints()[0].estTouche(coordonnees) == false) {
                document.caseSelectionee.style.backgroundColor = "rgb(200, 13, 13, 0.301)";
                console.log("if 1");
            } else {
                document.caseSelectionee.style.backgroundColor = "rgb(0, 0, 200, 0.301)";
                console.log(joueurs[1].bateaux[i].getPoints()[0].estTouche(coordonnees));
            }
        } else {

        }
    }
}

function gestionTours() {
    if (Plateau.i > 1 || !numTour) {
        Plateau.i = 0;
        numTour++;
    }
    document.body.style.backgroundImage = "url(images/fond_jeu.jpg)";
    joueurs[Plateau.i].affichageJoueur();
    Plateau.i++;
}
    
// document.forms["general"].elements["champ1"].focus(); pour donner le focus sur une case
