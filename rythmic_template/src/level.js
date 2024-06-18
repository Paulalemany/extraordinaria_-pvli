import Enemy from "./obj/enemy.js";
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
            this.area[i] = this.add.image(300, 150 + (100 * i), 'area');
        }

        //Botones
        this.A = this.add.image(585, 150, 'a').setScale(0.75,0.75);
        this.B = this.add.image(585, 250, 'b').setScale(0.75,0.75);
        this.X = this.add.image(585, 350, 'x').setScale(0.75,0.75);
        this.Y = this.add.image(585, 450, 'y').setScale(0.75,0.75);

        /* INPUT */
        this.a = this.scene.input.keyboard.addKey('A');
        this.s = this.scene.input.keyboard.addKey('S');
        this.d = this.scene.input.keyboard.addKey('D');
        this.f = this.scene.input.keyboard.addKey('F');


        /* ENEMIGOS */
        this.enemigo = new Enemy(scene, 50, 120, 2, 5);

    }
}