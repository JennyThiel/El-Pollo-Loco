class Bottle extends MovableObject {
    y = 365;
    width = 80;
    height = 50;

    constructor(imagePath, x = Math.random() * 500) {
        super().loadImage(imagePath);
        this.x = x + 150;
    }
}