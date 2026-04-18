class Endboss extends MovableObject {

    IMAGES_WALKING = [
        'img/4_enemy_boss_chicken/2_alert/g-5.png',
        'img/4_enemy_boss_chicken/2_alert/g-6.png',
        'img/4_enemy_boss_chicken/2_alert/g-7.png',
        'img/4_enemy_boss_chicken/2_alert/g-8.png',
        'img/4_enemy_boss_chicken/2_alert/g-9.png',
        'img/4_enemy_boss_chicken/2_alert/g-10.png',
        'img/4_enemy_boss_chicken/2_alert/g-11.png',
        'img/4_enemy_boss_chicken/2_alert/g-12.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 700;

    }
}