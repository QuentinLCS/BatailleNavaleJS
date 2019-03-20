function setMode(mode) {
    let plateau;
    switch (mode) {
        case 1:
            plateau = new Plateau(15);
            break;
        case 2:
            plateau = new Plateau(30);
            break;
        case 3:
        plateau = new Plateau(30);
            break;
    }
}