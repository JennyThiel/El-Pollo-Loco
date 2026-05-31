class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottles;
   
    level_end_x = 2250;
    statusbar;

    constructor(enemies, clouds, backgroundObjects, bottles, statusbar) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.statusbar = statusbar;
    }
}