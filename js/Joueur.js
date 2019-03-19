class Joueur {

    Joueur() {
        this.nom = "";
        this.bateau = [];
    }

    set nom(nom) {
        this.nom = nom;
    }
    
    get nom() {
        return this.nom;
    }

    get nbBateau() {
        return nbBateau;
    }
    
    enregistrerJoueur() {
        this.nom = prompt("Veuillez entrer votre nom :")
        for (let i = 0; i < nbBateau; i++)
            this.bateau = bateau[0].enregistrerBateau();
    }
}