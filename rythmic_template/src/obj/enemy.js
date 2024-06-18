import Bullet from "./bullets.js";

export default class Enemy extends Phaser.Physics.Arcade.Sprite { 

    constructor(scene, x, y, nos, tts){ 

        //NO DEBE TENER {} SI SE PONEN INTERPRETA QUE PASAS UN OBJETO
        super(scene, x, y);
        this.scene = scene;

        //Datos
        this.offsetX = 10;
        this.offsetY = 25;

        //Variables
        this.numberOfShoots = nos;
        this.counter = 0;
        this.counterTwo = 0;
        this.TimeToShoot = tts;
        this.TimeToShoot2 = tts + 100;

        this.live = 2;

        /* VISUAL */
        this.play('skIdle');

        this.attackAnim = 'skAttack';

        scene.add.existing(this);

        //Tiempos entre disparos
        this.timeShoot = setInterval(() => {
            this.counter++;
            
        }, 1000);

        //Si tiene dos disparos el segundo será un poco después
        if (this.numberOfShoots + 1 == 2) {
            this.timeShootTwo = setInterval(() => {
                this.counterTwo++;
            }, 1000);
        }
        

    }

    preUpdate(time, deltaTime) {
        super.preUpdate(time, deltaTime);
        if (this.TimeToShoot == this.counter) { 
            this.shoot(this.counter); 
        }

        if(this.numberOfShoots + 1 == 2) {
            if (this.TimeToShoot + 1 == this.counterTwo) { 
                this.secondShoot(); 
            }
        }

        if (this.live <= 0) {
            this.die();
        }
        
    }

    shoot() {
        this.animate(this.attackAnim);
        this.scene.bullets.push(new Bullet(this.scene, this.x + this.offsetX , this.y + this.offsetY, 1));

        //Si paso el contador como parámetro no me lo está reconociendo bien
        this.counter = 0;
    }

    secondShoot() {
        this.animate(this.attackAnim);
        new Bullet(this.scene, this.x + this.offsetX , this.y + this.offsetY, 1);

        //Si paso el contador como parámetro no me lo está reconociendo bien
        this.counterTwo = 0;
    }

    //Se encarga de cambiar las animaciones
    animate(anim) {
        if (this.anims.currentAnim.key !== anim) {
            this.anims.play(anim);
        }
    }

    die() {
        this.scene.numEnemigos--;
        this.destroy();
    }
}