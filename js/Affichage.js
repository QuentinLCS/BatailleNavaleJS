class Affichage {
    static boutonsOptions(mode) {
        let texte = '';
        
        switch (mode) {
            case 2:
                texte += '<div id="home-bouton" class="bouton-menu bouton cursor-click" onclick="Jeu.transition(true)"></div>';
            case 1:
                texte += '<div id="regles-bouton" class="bouton-menu bouton cursor-click" onclick="Jeu.regles()"></div>'
                break;
        }
        document.getElementById("menu-boutons").innerHTML = texte;
    }
}