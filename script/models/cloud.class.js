class Cloud extends MovableObject {
    y = 15;
    width = 550;
    height = 200;
    


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
    
        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        // Bewegung in World.update()
    }

}