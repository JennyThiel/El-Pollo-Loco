class MovableObject {
    x = 20;
    y = 135;
    img;
    width = 150;
    height = 300;
    imageCashe = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

    // loadImage(path) {img/test.png}
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementById('image'); <img id="image" src="img/test.png">
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr -['img/image1.png', 'img/image2.png', 'img/image3.png', ...]
     */

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCashe[path] = img;
        });
    }

    moveRight() {
        console.log('Moving right');
        if (keyboard.RIGHT['ArrowRight'== true]) {
            setInterval(() => {
                this.x += this.speed;
            });  
        }
    moveRight();
    }
    

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        },1000 / 60);  
    }
}