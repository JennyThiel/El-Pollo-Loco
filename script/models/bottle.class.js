class Bottle extends MovableObject {
    y = 365;
    width = 80;
    height = 50;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    
        this.x = Math.random() * 500;
        
    }
}