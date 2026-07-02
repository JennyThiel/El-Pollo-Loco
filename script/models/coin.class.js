class Coin extends MovableObject {
    y = 165;
    width = 100;
    height = 100;

    constructor(imagePath, x = Math.random() * 300) {
        super().loadImage(imagePath);
        this.x = x + 150;
    }
}