
export default class Fin extends Phaser.Scene {
    //constructor de la escena
    constructor(){
        //Nombre de la escena
        super({ key: 'fin' });
    
    }

    init(players){
 
        // settea el número de jugadores
        this.final = players;
	}

    //Añadimos los listener para los eventos
    preload() {
        this.eventEmitter = new Phaser.Events.EventEmitter();
    }

    create() {
        const scene = this;

        this.add.text(260, 25, this.final, {
            fontFamily: 'bitdragon',
            fontSize: 50,
            stroke: "#FFFFFF" ,
            strokeThickness: 3,
            color: '#FF0000',
            align: 'center'
        })

        //Menu
        this.OneplayerButton = this.add.text(350, 200, 'Menu', {
            fontFamily: 'bitdragon',
            fontSize: 25,
            stroke: '#000000',
            strokeThickness: 3,
            color: '#FFFFFF',
            align: 'center'
        })

        this.cursors = scene.input.keyboard.addKeys({
            select: Phaser.Input.Keyboard.KeyCodes.SPACE,
        });
    }

    update() {
        if (this.cursors.select.isDown) {
            this.scene.start("title");
        }
    }

}