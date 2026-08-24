class Bottle extends MovableObject {
    y = 365;
    width = 80;
    height = 50;

    // IMAGES_ROTATION_BOTTLE = [
    //     'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    //     'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    //     'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    //     'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    // ]

    // IMAGES_SPLASH_BOTTLE = [
    //     'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
    //     'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
    //     'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
    //     'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
    //     'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
    //     'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    // ]

    constructor(imagePath, x = Math.random() * 300) {
        super().loadImage(imagePath);
        this.x = x + 150;
    }
}