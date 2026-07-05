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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Chicks_small) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();            
        }
    }

    // character.isColliding(chicken);
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
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
        this.x += this.speed;
    }
    
    moveLeft() {
        this.x -= this.speed; 
    }

    jump() {
        this.speedY = 30;
    }
}