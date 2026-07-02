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
    speedY = 0;
    acceleration = 2.5;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }   
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 135;
    }

    // loadImage(path) {img/test.png}
    loadImage(path) {
        this.img = new Image(); // tihs.img - document.getElementById('image') <img id="image" src>
        this.img.onload = () => {
            console.log('Image loaded:', path);
        };
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
            img.style = 'transform scale(-1)';
            this.imageCashe[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 7 % 6 => 1 Rest 1
        let path = images[i];
        this.img = this.imageCashe[path];
        this.currentImage++;
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

    jump() {
        this.speedY = 30;
    }
}