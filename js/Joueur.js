class Joueur {

    nbBateaux;

    constructor() {
        this.nom;
        this.bateaux = [new Bateau(), new Bateau(), new Bateau()];
    }
    
    enregistrerJoueur(joueurNum) {

        if (joueurNum) 
            this.nom = document.init.nomJoueur2.value;
        else
            this.nom = document.init.nomJoueur1.value;
        for (let i = 0; i < Joueur.nbBateaux; i++) {
            this.bateaux[i].enregistrerBateau();
        }
    }
}