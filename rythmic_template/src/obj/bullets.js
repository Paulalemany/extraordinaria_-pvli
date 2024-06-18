
/**
 * @param direction dirección de la bala (Arriba o abajo)
 */

export default class Bullet extends Phaser.Physics.Arcade.Sprite { 
    constructor(scene, x, y, direction) {
    super(scene, x, y, 'energy');

    this.scene = scene;
    //Direction:
        //0 -> Quieta
        //1 -> Derecha
    this.direction = direction;
    scene.add.existing(this);   //Añadimos el objeto a la escena
    scene.physics.world.enable(this);
    //this.setCircle(8);  //Me cambia la posición del sprite por lo que por ahora voy a quitarlo

    this.speed = 100;

    }

    preUpdate(time, deltaTime) {
        super.preUpdate(time, deltaTime);

        //Movimiento de la pelota
        //Si no está quieta lo movemos
        if(this.direction !== 0) {
            this.setVelocityX(this.speed * this.direction);

            //Si llega al final la paramos en la fila donde debe estar
            
        }

        
    }

    die() {

        this.setVelocityY(0);
        this.direction = 0;
    }
}