class Statusbar_Bottle extends MovableObject {

    x = 20;
    height = 50;
    width = 230;

    IMAGES_STATUSBAR = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ]

    constructor(imagePath, x) {
        super().loadImage('img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png');
        this.y = x + 10;
    }
}