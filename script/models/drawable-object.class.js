class DrawalbeObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 20;
    y = 135;
    width = 150;
    height = 300;



    
    // loadImage(path) {img/test.png}
    loadImage(path) {
        this.img = new Image(); // tihs.img = document.getElementById('image') <img id="image" src>
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

    /**
     * 
     * @param {Array} arr -['img/image1.png', 'img/image2.png', 'img/image3.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            img.style = 'transform scale(-1)';
            this.imageCache[path] = img;
        });
    } 

}