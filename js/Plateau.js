class Plateau {

    i; 
    j;

    constructor() {
        Plateau.i = 0; Plateau.j = 0;
        this.tableau = [];
        this.taille;      
    }

    setTaille(taille) {
        this.taille = taille;
        for (let i = 0; i < this.taille; i++) {
            this.tableau.push(new Array()); 
            for (let j = 0; j < this.taille; j++)
                this.tableau[i].push(new Case());
        } 
    }

    getTaille() {
        return this.taille;
    }

    genererPlateau() {
        console.log("GENERER PLATEAU gestionTours() i = "+Plateau.i+ "; numTour = " + Jeu.numTour);
        let texte = '<table border="1">';
        for(let ligne = 0 ; ligne < this.taille ; ligne++) {
            texte += '<tr>';
            for(let colonne = 0 ; colonne < this.taille ; colonne++) {
                console.log("tire : "+this.tableau[ligne][colonne].getTire(Plateau.i)+" / proche : "+this.tableau[ligne][colonne].getProche(Plateau.i)+" / bateau : "+this.tableau[ligne][colonne].getBateau(Plateau.i));
                if (this.tableau[ligne][colonne].getTire(Plateau.i)) {
                    texte += '<td class="case-tire cursor-impossible" align="center" width=30 height=30> ';
                } else if (this.tableau[ligne][colonne].getProche(Plateau.i)) {
                    texte += '<td class="case-proche cursor-impossible" align="center" width=30 height=30> ';
                } else if (this.tableau[ligne][colonne].getBateau(Plateau.i)) {
                    texte += '<td class="cursor-targetW" align="center" width=30 height=30 onclick="Jeu.plateau.cliquerCase(' +ligne+ ',' +colonne+ ')"> ⚓ ';
                } else {
                    texte += '<td align="center" class="cursor-targetB" width=30 height=30 onclick="Jeu.plateau.cliquerCase(' +ligne+ ',' +colonne+ ')"> ';
                }
                texte += '</td>';
            }
            texte += '</tr>';
        }
        texte += '</table>';
        return texte;
    }



    afficherPlateau() {
        document.getElementById("plateau").innerHTML = this.genererPlateau();
    }

    cliquerCase(ligne, colonne) { //Marquer la case

        console.log("ligne : " +ligne+ "; colonne : " +colonne)
        let coordonnees = new Point(ligne, colonne);
        if (!Jeu.joueurs[0].estInit || !Jeu.joueurs[1].estInit)
            Bateau.initBateaux(coordonnees);            
        if (Jeu.joueurs[0].estInit && Jeu.joueurs[1].estInit) {
            Jeu.gestionTours();
            if (Jeu.numTour > 0) Jeu.jeu(coordonnees);
        }
    }    
}