class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y; 
        this.touche = false;
        console.log(this.getX()+ " ; " +this.getY());
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

    setTouche(newVal) {
        this.touche = newVal;
    }

    estTouche(p) {
        let resultat = false;
        if (p.getX() == this.getX() && p.getY() == this.getY()) 
            resultat = true;
        else {
            let distance = Math.sqrt(Math.pow(p.getX() - this.getX()) + Math.pow(p.getY() - this.getY()))
            if ( distance <= 8)
                resultat = distance;
        }
        return resultat;
    }

}