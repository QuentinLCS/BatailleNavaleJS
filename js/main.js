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

    Bateau.nbBateau = prompt("Combien de bateau souhaitez-vous ? [1;3] :");

    

    for (let i = 0; i < 2; i++) {
        joueurs[i].enregistrerJoueur();
    }
    

   alert(joueurs[0], joueurs[1]);
}