class Character extends MovableObject {
    y = 135;
    width = 120;
    height = 300;
    IMAGES_WALKING = [
            'img/2_character_pepe/2_walk/W-21.png',
            'img/2_character_pepe/2_walk/W-22.png',
            'img/2_character_pepe/2_walk/W-23.png',
            'img/2_character_pepe/2_walk/W-24.png',
            'img/2_character_pepe/2_walk/W-25.png', 
            'img/2_character_pepe/2_walk/W-26.png'
        ]
        

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 7 % 6 => 1 Rest 1
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCashe[path];
            this.currentImage++;
        },200);
    }
       

    jump() {

    }
}