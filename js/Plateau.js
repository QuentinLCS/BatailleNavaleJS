class Plateau {

    i; 
    j;

    constructor() {
        Plateau.i = 0; Plateau.j = 0;
        this.taille = document.init.taillePlateau.value;
    }

    genererPlateau() {
        let texte = '<table border="1">';
        let nb = 1;
        for(let ligne = 0 ; ligne <= this.taille ; ligne++) {
            texte += '<tr>';
            for(let colonne = 0 ; colonne <= this.taille ; colonne++) {
                if (!colonne && ligne) texte += '<th>' +ligne+ '</th>';
                else if (!ligne) texte += '<th>' +colonne+ '</th>';
                else {
                    texte += '<td align="center" width=30 height=30 onclick="Plateau.cliquerCase('+ligne+ ',' +colonne+')"> ';
                    nb++;
                    texte += '</td>';
                }
            }

            texte += '</tr>';
        }
        texte += '</table>';
        return texte;
    }

    afficherPlateau() {
        let plateau = document.getElementById("plateau");
        plateau.innerHTML = this.genererPlateau();
    }

    static cliquerCase(ligne, colonne) {
        
        if (!joueurs[0].estInit && !joueurs[1].estInit) {

            if (Plateau.j == Joueur.nbBateaux) { 
                joueurs[Plateau.i].estInit = true;
                Plateau.i++; Plateau.j = 0;
            }

            joueurs[Plateau.i].bateaux[Plateau.j] = new Bateau(ligne, colonne);
            Plateau.j++;               
                
        } else {
            document.body.style.backgroundImage = "url(images/fond_jeu.jpg)";
            joueurs[Plateau.i].affichageJoueur();
            Plateau.i++;
            if (Plateau.i > 1) {
                Plateau.i = 0;
                numTour++;
            }
        }
    }    
}