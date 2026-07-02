class Statusbar_Health extends MovableObject {

    x = 20;
    height = 50;
    width = 230;

    IMAGES_STATUSBAR = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ]

    constructor(imagePath, x) {
        super().loadImage('img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png');
        this.y = x + 10;
    }
}