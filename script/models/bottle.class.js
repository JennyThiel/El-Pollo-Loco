class Bottle extends MovableObject {
     y = 135;
    width = 120;
    height = 300;

    constructor(imagePath) {
        super().loadImage(imagePath);
    
        this.x = Math.random() * 500; // Zahl zwischen 200 und 700
        this.animate();
    }

    // animate() {
    //    this.moveLeft(); 
    // }
}