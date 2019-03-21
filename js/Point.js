class Point {

    constructor(x, y) {
       this.x = x;
       this.y = y; 
       this.touche = false;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setTouche() {
        this.touche = true;
    }

    estTouche(p) {
        let resultat = false;
        if (p == this.points[0]) 
            resultat = true;
        else {
            let distance = Math.sqrt(Math.pow(p.getX() - this.getX()) + Math.pow(p.getY() - this.getY()))
            if ( distance <= 8)
                resultat = distance;
        }
        return resultat;
    }

}