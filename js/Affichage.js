class Affichage {
    static boutonsOptions(mode) {
        let texte = '';
        
        switch (mode) {
            case 2:
                texte += '<div id="regles-bouton" class="bouton-menu bouton cursor-click" onclick="Affichage.regles(false)"></div>'
            case 1:
                texte += '<div id="home-bouton" class="bouton-menu bouton cursor-click" onclick="Jeu.transition(true)"></div>';
                break;
        }
        document.getElementById("menu-boutons").innerHTML = texte;
    }

    static infosTour() {
        if (!Jeu.numTour) {
            document.getElementById("partie-infos-tours").innerHTML = "<p><h2>Veuillez placer vos bateaux</h2></p>";
        } else {
            document.getElementById("partie-infos-tours").innerHTML = "<p><h2>Tour n°" +Jeu.numTour+ "</h2></p>";
        }
        document.getElementById("partie-infos-nomJoueur").innerHTML = "<p><h3>" +Jeu.joueurs[Plateau.i].getNom()+ "</h3></p>"
    }

    // TODO : Afficher les règles en fonction du mode de jeu.
    static regles(forceDesactiver) {
        let texte;
        switch (Jeu.Plateau.getTaille()) {
            case 10:
                break;
            case 15:
                break;
            case 20:
                break;
        
        }
        if (document.getElementById("regles").style.display == "none" && !forceDesactiver) {
            document.getElementById("regles").style.display = 'block';
        } else {
            document.getElementById("regles").style.display="none";
        }
    }

    static changerCurseurs(newCursor) {
        let CursorTargetBList = document.getElementsByClassName("cursor-targetB");
        let CursorImpossible = document.getElementsByClassName("cursor-impossible");

        
        for(let i = 0; i < (CursorImpossible.length >= CursorTargetBList.length ? CursorTargetImpossible.length : CursorTargetBList.length); i++)
        {           

            if (i < CursorImpossible.length) {
                CursorImpossible[i].classList.add(newCursor);
            }
        
            if (i < CursorTargetBList.length) {
                CursorTargetBList[i].classList.add(newCursor);
            }
        }
    }
}