export default class Boot extends Phaser.Scene {

    //constructor de la escena
    constructor(){
        super({ key: 'boot' });
        console.log('boot');
    }

    //Cargamos en esta clase todas las img del juego
    preload(){

        //Imagenes
        /*
        this.load.image('ball', './assets/ball16.png');     //Pelota

        this.load.image('fondo', './assets/background.png'); //Fondo
        this.load.image('mesa', './assets/table.png');       //mesa
        this.load.image('score', './assets/score.png');      //Puntuación
        */

        //Spritesheets
        this.load.spritesheet('energy', './assets/energy.png', {frameWidth: 32, frameHeight: 32});
        
        this.load.spritesheet("player", "assets/CH_Idle.png", {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet("player_dead", "assets/CH_Dead.png", {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet("player_hurt", "assets/CH_Hurt.png", {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet("skeleton", "assets/SK_Idle.png", {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet("skeleton_atk", "assets/SK_Attack.png", {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet("skeleton_dead", "assets/SK_Dead.png", {frameWidth: 128, frameHeight: 128});

        //Sonidos
        /*
        this.load.audio('peguinWin', './assets/sounds/win.mp3');
        this.load.audio('peguinLose', './assets/sounds/lose.mp3');
        this.load.audio('collide', './assets/sounds/collide.mp3');
        this.load.audio('throw', './assets/sounds/throw_ball.mp3');
        this.load.audio('stun', './assets/sounds/stun.mp3');
        */
    }

    //Animaciones por spritesheet
    createAnimations() {

        this.anims.create({
            key: "playerIdle",
            frames: this.anims.generateFrameNumbers("player", { start: 0, end: 6 }),
            frameRate: 5,
          });
          this.anims.create({
            key: "playerDead",
            frames: this.anims.generateFrameNumbers("player_dead", { start: 0, end: 3 }),
            frameRate: 10,
          });
          this.anims.create({
            key: "playerHurt",
            frames: this.anims.generateFrameNumbers("player_hurt", { start: 0, end: 2 }),
            frameRate: 5,
          });
          
          this.anims.create({
            key: "skIdle",
            frames: this.anims.generateFrameNumbers("skeleton", { start: 0, end: 6 }),
            frameRate: 5,
          });
          this.anims.create({
            key: "skAttack",
            frames: this.anims.generateFrameNumbers("skeleton_atk", { start: 0, end: 4 }),
            frameRate: 10,
          });
          this.anims.create({
            key: "skDead",
            frames: this.anims.generateFrameNumbers("skeleton_dead", { start: 0, end: 3 }),
            frameRate: 5,
          });

          this.anims.create({
            key: "energy",
            frames: this.anims.generateFrameNumbers("energy", { start: 0, end: 0 }),
            frameRate: 5,
          });
          this.anims.create({
            key: "energyIdle",
            frames: this.anims.generateFrameNumbers("energy", { start: 1, end: 2 }),
            frameRate: 5,
          });
          this.anims.create({
            key: "energyCreate",
            frames: this.anims.generateFrameNumbers("energy", { start: 0, end: 2 }),
            frameRate: 5,
          });
          this.anims.create({
            key: "energyEnd",
            frames: this.anims.generateFrameNumbers("energy", { start: 3, end: 3 }),
            frameRate: 5,
          });
        
    }

    //Pasamos a la escena del menú
    create() {
        this.createAnimations();
        this.scene.start("title");
    }
}