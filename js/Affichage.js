class Affichage {
    static boutonsOptions(mode) {
        let texte = '';
        
        switch (mode) {
            case 2:
                texte += '<div id="regles-bouton" class="bouton-menu bouton cursor-click" onclick="Jeu.regles()"></div>'
            case 1:
                texte += '<div id="home-bouton" class="bouton-menu bouton cursor-click" onclick="Jeu.transition(true)"></div>';
                break;
        }
        document.getElementById("menu-boutons").innerHTML = texte;
    }

    static infosTour() {
        if (!Jeu.numTour) {
            document.getElementById("partie-infos-tours").innerHTML = "<p><h2>Veuillez choisir vos bateaux</h2></p>";
        } else {
            document.getElementById("partie-infos-tours").innerHTML = "<p><h2>Tour n°" +Jeu.numTour+ "</h2></p>";
        }
        document.getElementById("partie-infos-nomJoueur").innerHTML = "<p><h3>" +Jeu.joueurs[Plateau.i].getNom()+ "</h3></p>"
    }
}