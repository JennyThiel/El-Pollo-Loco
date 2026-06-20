class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    //coins;
    level_end_x = 2250;
    statusbar;

    constructor(enemies, clouds, backgroundObjects, bottles, coins, statusbar) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.coins = coins;
        this.statusbar = statusbar;
    }
}