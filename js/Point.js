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
        let resultat = -1;
        console.log(p.getX() + " ; " + p.getY() + " ; " + this.getX() + " ; " + this.getY())
        if (p.getX() == this.getX() && p.getY() == this.getY()) 
            resultat = 0;
        else {
            console.log("$$$$$$$$$$$$$$$$$$");
            let distance = Math.sqrt(Math.pow(this.getX() - p.getX(), 2) + Math.pow(this.getY() - p.getY(), 2));
            console.log("distance = " +distance);
            if ( distance <= 8 )
                resultat = distance;
        }
        return resultat;
    }

}