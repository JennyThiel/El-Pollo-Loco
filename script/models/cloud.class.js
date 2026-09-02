class Cloud extends MovableObject {
    y = 15;
    width = 550;
    height = 200;
    
    


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
    
        this.x = Math.random() * 2500; // Zahl zwischen 200 und 2500
        this.animate();
    }

    animate() {
         setInterval(() => {
            this.moveLeft();
        },1000 / 30); 
    }

 

}