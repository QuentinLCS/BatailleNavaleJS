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

    static regles(forceDesactiver) {
        let texte; 
        switch (Jeu.plateau.getTaille()) {
            case 10:
                if (Jeu.joueurs[1].getEstUneIa())
                    texte += '<div id="regles-texte" class="centrerV" style="height: 380px"><h2>REGLES DU JEU</h2><label>Difficulté : <em>Facile (SOLO)</em></label><p>Ahoy ! Votre quête si vous l\'acceptez marin d\'eau douce, est de faire <em>couler tous les bateaux de votre adversaire</em></p><table><tr><td><img src="images/jeu_touche.svg" alt="bateau"></td><td>Touchez un bateau adverse en tirant sur la carte.</td></tr><tr><td><img src="images/jeu_checked.svg" alt="bateau"></td><td>Vous êtes informé si le bateau adverse a coulé.</td></tr><tr><td class="case-proche"></td><td>Si vous avez tiré à moins de 8 cases d\'un adversaire.</td></tr><tr><td class="case-tire"></td><td>Si vous avez raté votre cible.</td></tr></table><p>Que la mer guide votre âme jeune timonier ! Ne vous fiez à personne, sur l\'eau vous êtes votre seul allié face à ces gredins. Pas de quartier !</p>';
                else
                    texte += '<div id="regles-texte" class="centrerV" style="height: 420px"><h2>REGLES DU JEU</h2><label>Difficulté : <em>Facile (DUO)</em></label><p>Ahoy ! Votre quête si vous l\'acceptez marin d\'eau douce, est de faire <em>couler tous les bateaux de votre adversaire</em> avant qu\'il ne vous coule.</p><table><tr><td><img src="images/jeu_bateau.svg" alt="bateau"></td><td>Placez vos bateaux à l\'emplacement de votre choix.</td></tr><tr><td><img src="images/jeu_touche.svg" alt="bateau"></td><td>Touchez un bateau adverse en tirant sur la carte.</td></tr><tr><td><img src="images/jeu_coule.svg" alt="bateau"></td><td>Si toutes les cases de votre bateau sont touchées, il coule.</td></tr><tr><td><img src="images/jeu_checked.svg" alt="bateau"></td><td>Vous êtes informé si le bateau adverse a coulé.</td></tr><tr><td class="case-proche"></td><td>Si vous avez tiré à moins de 8 cases d\'un adversaire.</td></tr><tr><td class="case-tire"></td><td>Si vous avez raté votre cible.</td></tr></table><p>Que la mer guide votre âme jeune timonier ! Ne vous fiez à personne, sur l\'eau vous êtes votre seul allié face à ces gredins. Pas de quartier !</p>';
                break;
            case 15:
                if (Jeu.joueurs[1].getEstUneIa())
                    texte += '<div id="regles-texte" class="centrerV" style="height: 350px"><h2>REGLES DU JEU</h2><label>Difficulté : <em>Normale (SOLO)</em></label><p>Ahoy ! Votre quête si vous l\'acceptez camarade, est de faire <em>couler tous les bateaux de votre adversaire</em></p><table><tr><td><img src="images/jeu_touche.svg" alt="bateau"></td><td>Touchez un bateau adverse en tirant sur la carte.</td></tr><tr><td><img src="images/jeu_checked.svg" alt="bateau"></td><td>Vous êtes informé si le bateau adverse a coulé.</td></tr><tr><td class="case-tire"></td><td>Si vous avez raté votre cible.</td></tr></table><p>Que la mer guide votre âme capitaine ! Ne vous fiez à personne, sur l\'eau vous êtes votre seul allié face à ces gredins. Pas de quartier !</p>';
                else
                    texte += '<div id="regles-texte" class="centrerV" style="height: 420px"><h2>REGLES DU JEU</h2><label>Difficulté : <em>Normale (DUO)</em></label><p>Ahoy ! Votre quête si vous l\'acceptez camarade, est de faire <em>couler tous les bateaux de votre adversaire</em> avant qu\'il ne vous coule.</p><table><tr><td><img src="images/jeu_bateau.svg" alt="bateau"></td><td>Placez vos bateaux à l\'emplacement de votre choix.</td></tr><tr><td><img src="images/jeu_touche.svg" alt="bateau"></td><td>Touchez un bateau adverse en tirant sur la carte.</td></tr><tr><td><img src="images/jeu_coule.svg" alt="bateau"></td><td>Si toutes les cases de votre bateau sont touchées, il coule.</td></tr><tr><td><img src="images/jeu_checked.svg" alt="bateau"></td><td>Vous êtes informé si le bateau adverse a coulé.</td></tr><tr><td class="case-tire"></td><td>Si vous avez raté votre cible.</td></tr></table><p>Que la mer guide votre âme capitaine ! Ne vous fiez à personne, sur l\'eau vous êtes votre seul allié face à ces gredins. Pas de quartier !</p>';
                break;
            case 20:
                if (Jeu.joueurs[1].getEstUneIa())
                    texte += '<div id="regles-texte" class="centrerV" style="height: 380px"><h2>REGLES DU JEU</h2><label>Difficulté : <em>Difficile (SOLO)</em></label><p>Ahoy ! Votre quête si vous l\'acceptez mon capitaine, est de faire <em>couler tous les bateaux de votre adversaire</em></p><table><tr><td><img src="images/jeu_touche.svg" alt="bateau"></td><td>Touchez un bateau adverse en tirant sur la carte.</td></tr><tr><td><img src="images/jeu_checked.svg" alt="bateau"></td><td>Vous êtes informé si le bateau adverse a coulé.</td></tr><tr><td class="case-proche"></td><td>Si vous avez tiré à moins de 8 cases d\'un adversaire.</td></tr><tr><td class="case-tire"></td><td>Si vous avez raté votre cible.</td></tr></table><p><em>Si vous tirez proche d\'un bateau ennemi, il peut le déplacer et s\'enfuire.</em> Que la mer guide votre âme Vieux loup de mer ! Pas de quartier !</p>';
                else
                    texte += '<div id="regles-texte" class="centrerV" style="height: 420px"><h2>REGLES DU JEU</h2><label>Difficulté : <em>Difficile (DUO)</em></label><p>Ahoy ! Votre quête si vous l\'acceptez mon capitaine, est de faire <em>couler tous les bateaux de votre adversaire</em> avant qu\'il ne vous coule.</p><table><tr><td><img src="images/jeu_bateau.svg" alt="bateau"></td><td>Placez vos bateaux à l\'emplacement de votre choix.</td></tr><tr><td><img src="images/jeu_touche.svg" alt="bateau"></td><td>Touchez un bateau adverse en tirant sur la carte.</td></tr><tr><td><img src="images/jeu_coule.svg" alt="bateau"></td><td>Si toutes les cases de votre bateau sont touchées, il coule.</td></tr><tr><td><img src="images/jeu_checked.svg" alt="bateau"></td><td>Vous êtes informé si le bateau adverse a coulé.</td></tr><tr><td class="case-proche"></td><td>Si vous avez tiré à moins de 8 cases d\'un adversaire.</td></tr><tr><td class="case-tire"></td><td>Si vous avez raté votre cible.</td></tr></table><p><em>Si l\'ennemi tire proche d\'un de vos bateaux, vous pouvez le déplacer.</em> Que la mer guide votre âme Vieux loup de mer ! Pas de quartier !</p>';
                break;
        }
        texte += '<div class="bouton cursor-click" onclick="Affichage.regles(false)">Revenir au jeu</div></div></div>';

        if (document.getElementById("regles").style.display == "none" && !forceDesactiver) {
            document.getElementById("regles").style.display = 'block';
            document.getElementById("regles").innerHTML = texte;
        } else {
            document.getElementById("regles").style.display="none";
            document.getElementById("regles").innerHTML = "";
        }
        
    }

    static changerCurseurs(newCursor) {
        let CursorTargetBList = document.getElementsByClassName("cursor-targetB");
        let CursorImpossible = document.getElementsByClassName("cursor-impossible");

        for(let i = 0; i < (CursorImpossible.length >= CursorTargetBList.length ? CursorImpossible.length : CursorTargetBList.length); i++)
        {           

            if (i < CursorImpossible.length)
                CursorImpossible[i].classList.add(newCursor);
        
            if (i < CursorTargetBList.length)
                CursorTargetBList[i].classList.add(newCursor);
        }
    }

    static playSound(numSound) {
        if (!document.getElementById("music").paused) {
            let soundList = ["jeu_rate.mp3","jeu_touche.mp3","jeu_victoire.mp3"];
            let sound = new Audio("audio/"+soundList[numSound]);
            sound.play();
        }
    }

    static music() {
        if (document.getElementById("music").paused) {
            document.getElementById("music").play();
            document.getElementById("music-bouton").style.backgroundImage = "url(images/bouton_volume_on.svg)";
        } else {
            document.getElementById("music").pause();
            document.getElementById("music-bouton").style.backgroundImage = "url(images/bouton_volume_off.svg)";
        }
    }
}