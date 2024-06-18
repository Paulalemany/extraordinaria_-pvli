export default class Level extends Phaser.Scene { 

    //constructor de la escena
    constructor(){
        //Nombre de la escena
        super({ key: 'level' });
    
    }

    init(players){

        // settea el número de jugadores
        this.modGame = players;
	}

    create() {

        console.log("Nivel");
        const scene = this;     //Referencia a esta misma escena

        /* ESCENA DE JUEGO */
        this.bg = this.add.image(384,256,'bg');

        this.area = [4];
        for (let i = 0; i < 4; i++) {
            this.area[i] = this.add.image(300, 100 + (100 * i), 'area');
        }
    }
}