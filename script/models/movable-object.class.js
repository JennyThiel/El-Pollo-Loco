class MovableObject {
    x = 20;
    y = 135;
    width = 150;
    height = 300;
    img;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');
        
    }

    moveLeft() {
        // this.enemie = new this.enemie();
        // this.enemie.img = path;
    }
}