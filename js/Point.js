class Point {

    Point(x, y) {
       this.x = x;
       this.y = y; 
       this.touche = false;
    }

    get x() {
        return this.x;
    }

    get y() {
        return this.y;
    }

    get touche() {
        return this.touche;
    }

    set x(newX) {
        this.x = newX;
    }

    set y(newY) {
        this.y = newY;
    }

    set touche() {
        this.touche = true;
    }
}