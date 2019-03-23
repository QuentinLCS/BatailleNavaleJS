class Plateau {

    i; 
    j;

    constructor() {
        Plateau.i = 0; Plateau.j = 0;
        this.clickIsOn = true;
        this.tableau = [];
        this.taille;      
    }

    getTaille() {
        return this.taille;
    }

    getClickIsOn() {
        return this.clickIsOn;
    }

    setTaille(taille) {
        this.taille = taille;
        for (let i = 0; i < this.taille; i++) {
            this.tableau.push(new Array()); 
            for (let j = 0; j < this.taille; j++)
                this.tableau[i].push(new Case());
        } 
    }

    setClickIsOn(clickIsOn) {
        this.clickIsOn = clickIsOn;
    }

    genererPlateau() {
        let texte = '<table border="1">';
        for(let ligne = 0 ; ligne < this.taille ; ligne++) {
            texte += '<tr>';
            for(let colonne = 0 ; colonne < this.taille ; colonne++) {
                texte += '<td align="center" width=30 height=30 '
                if (this.tableau[ligne][colonne].getCoule(Plateau.i == 1 ? 0 : 1)) 
                    texte += 'class="cursor-impossible"> <img src="images/coule.svg" alt="mort">';
                else if (this.tableau[ligne][colonne].getCoule(Plateau.i)) 
                    texte += 'class="cursor-impossible"> <img src="images/checked.svg" alt="tué">';  
                else if (this.tableau[ligne][colonne].getTire(Plateau.i)) 
                    if (this.tableau[ligne][colonne].getBateau(Plateau.i))
                        texte += 'class="case-tire cursor-impossible" > ⚓ ';
                    else
                        texte += 'class="case-tire cursor-impossible" > ';
                else if (this.tableau[ligne][colonne].getBateau(Plateau.i)) 
                    texte += 'class="cursor-targetW" onclick="Jeu.plateau.cliquerCase(' +ligne+ ',' +colonne+ ')"> ⚓ ';
                else if (this.tableau[ligne][colonne].getProche(Plateau.i)) 
                    texte += 'class="case-proche cursor-impossible"> ';
                else if (this.tableau[ligne][colonne].getTouche(Plateau.i)) 
                    texte += 'class="cursor-impossible"> <img src="images/touche.svg" alt="touché"> ';
                else 
                    texte += 'class="cursor-targetB" onclick="Jeu.plateau.cliquerCase(' +ligne+ ',' +colonne+ ')"> ';
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

    cliquerCase(ligne, colonne) { 

        if (Jeu.plateau.getClickIsOn()) {
            Jeu.plateau.setClickIsOn(false);
            setTimeout(function() {
                Jeu.transition();
            }, 3000);

            let coordonnees = new Point(ligne, colonne);
            if (!Jeu.joueurs[0].getEstInit() || !Jeu.joueurs[1].getEstInit())
                Bateau.initBateaux(coordonnees);            
            else
                Jeu.jeu(coordonnees);
        }
    }    
}