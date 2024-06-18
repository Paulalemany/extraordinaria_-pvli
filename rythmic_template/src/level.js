import Enemy from "./obj/enemy.js";
import Button from "./obj/button.js";
import Player from "./obj/player.js";

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
        this.music = this.add.sound('bgMusic');

        this.area = [4];
        for (let i = 0; i < 4; i++) {
            this.area[i] = this.add.image(300, 150 + (100 * i), 'area');
        }

        //Botones
        this.A = new Button(scene, 585, 150, 'a');
        this.B = new Button(scene, 585, 250, 'b');
        this.X = new Button(scene, 585, 350, 'x');
        this.Y = new Button(scene, 585, 450, 'y');

        /* INPUT */
        this.a = scene.input.keyboard.addKey('A');
        this.s = scene.input.keyboard.addKey('S');
        this.d = scene.input.keyboard.addKey('D');
        this.f = scene.input.keyboard.addKey('F');


        /* ENEMIGOS */
        this.bullets = [];
        this.enemigos = [];
        this.numEnemigos = 0;
        for (let i = 0; i < 4; i++) {
            this.enemigos.push(new Enemy(scene, 50, 120 + (100 * i), i % 2, i + 1));
            this.numEnemigos++;
        }

        /* Player */
        this.Player = new Player(scene, 700, 260);

    }

    update() {
        //Comprobamos colisiones
        //Si pulsamos el boton y hay una esfera encima, destruimos la esfera
        this.goA = this.physics.overlap(   //Si se superponen
            this.bullets, this.A, (bullets, button) => {
                if (this.a.isDown){
                    bullets.die();
                    this.enemigos[0].live--;
                }
            }, null, this
        );

        this.goB = this.physics.overlap(   //Si se superponen
        this.bullets, this.B, (bullets, button) => {
            if (this.s.isDown){
                bullets.die();
                this.enemigos[1].live--;
            }
        }, null, this
        );

        this.goX = this.physics.overlap(   //Si se superponen
        this.bullets, this.X, (bullets, button) => {
            if (this.d.isDown){
            bullets.die();
                this.enemigos[2].live--;
            }
        }, null, this
        );

        this.goY = this.physics.overlap(   //Si se superponen
        this.bullets, this.Y, (bullets, button) => {
        if (this.f.isDown){
            bullets.die();
            this.enemigos[3].live--;
        }
        }, null, this
        );

        //Colision con el jugador
        this.auch = this.physics.overlap(   //Si se superponen
        this.bullets, this.Player, (bullets, player) => {
            bullets.die();
            player.herido();
        }, null, this
        );


        this.dale();

        //Si todos los enemigos mueren es fin del juego
        if (this.numEnemigos <= 0) { this.gameOver(); }
    }

    dale() {
        if(this.a.isDown) {this.A.bigger();}
        else {this.A.little();}

        if(this.s.isDown) {this.B.bigger();}
        else {this.B.little();}

        if(this.d.isDown) {this.X.bigger();}
        else {this.X.little();}

        if(this.f.isDown) {this.Y.bigger();}
        else {this.Y.little();}
    }

    gameOver() {
        if (this.numEnemigos <= 0) {
            this.scene.start("fin", "You Win!!");
        }
        else {
            this.scene.start("fin", "GameOver");
        }
        
    }
}