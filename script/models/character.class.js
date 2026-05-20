class Character extends MovableObject {
    y = 135;
    width = 120;
    height = 300;
    speed = 10;
    IMAGES_WALKING = [
            'img/2_character_pepe/2_walk/W-21.png',
            'img/2_character_pepe/2_walk/W-22.png',
            'img/2_character_pepe/2_walk/W-23.png',
            'img/2_character_pepe/2_walk/W-24.png',
            'img/2_character_pepe/2_walk/W-25.png', 
            'img/2_character_pepe/2_walk/W-26.png'
    ];
    world;
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);

        // this.animate(); // Entfernt, wird in setWorld aufgerufen
    }

    animate() {

        setInterval(() => {

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                // Walk animation
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 50);
    }
       

    jump() {

    }
}