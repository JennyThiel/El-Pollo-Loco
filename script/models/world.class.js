class World {
    character = new Character();
    level = level1;
    canvas;
    ctx; //context
    keyboard;
    camera_x = 0;
    // mo = movieObject

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
        this.character.animate();
    }

    draw() {
        this.update();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addToObjectMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addToObjectMap(this.level.clouds);
        this.addToObjectMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);
       
        // Draw() wird hier immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    update() {
        if (this.keyboard.RIGHT && this.character.x < this.level.level_end_x) {
            this.character.x += this.character.speed;
            this.character.otherDirection = false;
        }

        if (this.keyboard.LEFT && this.character.x > -620) {
            this.character.x -= this.character.speed;
            this.character.otherDirection = true;
        }
        this.camera_x = -this.character.x + 100;

        this.level.clouds.forEach(cloud => {
            cloud.x -= cloud.speed;
        });

        this.level.enemies.forEach(enemy => {
            enemy.x -= enemy.speed;
        });
    }

    addToObjectMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if(mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }

        if (mo.img && mo.img.complete && mo.img.naturalWidth > 0) {
            this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        }
        if (mo.otherDirection) {
            mo.x = mo.x *-1;
            this.ctx.restore();
        }
    }

}
