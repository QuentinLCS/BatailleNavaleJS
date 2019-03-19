function main() {

    //Mode de jeu normal et difficile
    //Normal dit si on est loin ou pas
    //Difficile il part à l'opposé
    // Plus loin que 6 rien
    // moins de 6 dit la distance
    // touché ... (faire un système de couleurs)

    // Système de hover comme jérémy

    //.innerhtml permet d'insérer du html
    
    let joueurs = [new Joueur(), new Joueur()];
    alert();
    Bateau.nbBateaux = document.init.nbBateaux.value;
    for (let i = 0; i < 2; i++) {
        joueurs[i].enregistrerJoueur(i);
    }
    
// document.forms["general"].elements["champ1"].focus(); pour donner le focus sur une case

   alert(joueurs[0].nom, joueurs[1].nom);
}