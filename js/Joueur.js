class Joueur {

    Joueur() {
        let nom = "";
        let bateau = [];
    }
    
    enregistrerJoueur(i) {

        if (i) 
            this.nom = document.init.nomJoueur2.value;
        else
            this.nom = document.init.nomJoueur1.value;

        for (let i = 0; i < Bateau.nbBateaux; i++)
            this.bateau = bateau[0].enregistrerBateau();
    }
}