export default class Button extends Phaser.Physics.Arcade.Sprite { 

    constructor(scene, x, y, player){
        //NO DEBE TENER {} SI SE PONEN INTERPRETA QUE PASAS UN OBJETO
        super(scene, x, y);

        //Variables
        this.player = player;
        this.scene = scene;

        this.but = scene.add.sprite(x, y, player).setScale(0.75,0.75);

        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.setImmovable(true);
    }

    bigger() {
        this.but.setScale(1,1);
    }

    little() {
        this.but.setScale(0.75,0.75)
    }

}
