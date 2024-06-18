export default class Player extends Phaser.Physics.Arcade.Sprite { 

    constructor(scene, x, y, player){
        //NO DEBE TENER {} SI SE PONEN INTERPRETA QUE PASAS UN OBJETO
        super(scene, x, y);
        this.scene = scene;

        this.live = 5;

        this.liveSprite = scene.add.sprite(700, 50, 'heart').setScale(0.5,0.5);
        this.liveText = scene.add.text(660, 35, this.live, {
            fontFamily: 'bitdragon',
            fontSize: 25,
            stroke: '#000000',
            strokeThickness: 3,
            color: '#FFFFFF',
            align: 'center'
        })

        this.play('playerIdle');

        // añade a la escena el objeto entero
        // si no añades esto no se mete en la escena y no mira el preupdate
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.setImmovable(true);
        this.body.setSize(50,1000)

    }

    herido() {
        this.live--
        this.liveText.setText(this.live);
        //Animación herido

        if (this.live == 0) {
            //this.scene.gameOver();
        }
    }
}