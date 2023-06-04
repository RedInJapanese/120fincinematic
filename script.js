class Title extends Phaser.Scene {
    constructor() {
        super('title');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('title', 'title.png');
        this.load.image('play', 'resume.png');
        this.load.spritesheet('run', 'docrun.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('idle', 'doc.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
    }
    create() {
        this.cameras.main.setBackgroundColor('#1D4625');

        this.scenenum = this.add.text(50, 50, "title")

        this.title = this.add.image(300, 200, 'title');
        this.still = this.add.sprite(
            400,//x
            400,//y
            'idle',//imagename
        );
        this.still.setDepth(1);
        this.still.setScale(3); //resize
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('idle', {
                start: 0,
                end: 1
            }),
            frameRate: 7,
            repeat: -1
        });
        this.still.anims.play('idle', true);
        this.still.setVisible(false);
        this.run = this.add.sprite(
            400,//x
            400,//y
            'run',//imagename
        );
        this.run.setDepth(1);
        this.run.setScale(3); //resize
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('run', {
                start: 0,
                end: 9
            }),
            frameRate: 10,
            repeat: -1
        });
        this.run.anims.play('run', true);

        this.imageObject = this.run
        const cursor = {
            x: 0,
            y: 0
        }

        window.addEventListener('mousemove', (event) =>
        {
            cursor.x = event.clientX 
            cursor.y = event.clientY 
            this.still.x = cursor.x + 100
            this.run.x = cursor.x + 100
            this.imageObject.x = cursor.x+100
        })

        this.tweens.add({
            targets: this.title,
            x: '+=' + 100,
            repeat: 2,
            yoyo: true,
            ease: 'Sine.inOut',
            duration: 100
        });
        this.play = this.add.image(300, 400, 'play').setInteractive()
        .on('pointerover', () => this.play.setAlpha(0.4))
        .on('pointerout', () => this.play.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('map')
        });
        this.prev = 0
        // const space = this.add.image(200, 0, 'space');
        // //space.scale(.5);
        // space.setOrigin(0);
        // space.setDepth(0);

        // this.imageObject.background = this.back;
    }
    update(){
        if(this.imageObject.x > this.prev){
            this.still.setVisible(false)
            this.run.setVisible(true)
            this.imageObject = this.run
            this.imageObject.flipX = false
        }
        if(this.imageObject.x < this.prev){
            this.still.setVisible(false)
            this.run.setVisible(true)
            this.imageObject = this.run
            this.imageObject.flipX = true
        }
        if(this.prev == this.imageObject.x) {
            this.run.setVisible(false)
            this.still.setVisible(true)
            this.imageObject = this.still
        }

  
        this.prev = this.imageObject.x
    }
}

class Map extends Phaser.Scene {
    constructor() {
        super('map');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('lev1', 'lev1.png')
        this.load.image('lev2', 'lev2.png')
        this.load.image('lev3', 'lev3.png')
    }
    create() {
        previousScene = this.scene.key;

        this.cameras.main.setBackgroundColor('#536872');
        this.textObject0 = this.add.text(
            50, //x
            50,//y
            "map", //text
            {
                font: "20px Impact",
                color: "#FFFFFF",
                align: "center"
            } //style
        );

        this.lev1 = this.add.image(100, 250, 'lev1')
        .setInteractive()
        .on('pointerover', () => this.lev1.setAlpha(0.4))
        .on('pointerout', () => this.lev1.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('level1')
        });

        //this.lev1.input.on('pointerdown', () => this.scene.start('level2'));
        this.lev2 = this.add.image(300, 250, 'lev2')
        .setInteractive()
        .on('pointerover', () => this.lev2.setAlpha(0.4))
        .on('pointerout', () => this.lev2.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('level2')
        });

        this.lev3 = this.add.image(500, 250, 'lev3')
        .setInteractive()
        .on('pointerover', () => this.lev3.setAlpha(0.4))
        .on('pointerout', () => this.lev3.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('level3')
        });
    }
}


class Settings extends Phaser.Scene {
    constructor() {
        super('settings');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('resume', 'resume.png');
        this.load.image('audioon', 'audio_on.png');
        this.load.image('audiooff', 'audio_off.png');
    }
    create() {
        this.cameras.main.setBackgroundColor('#36454f');
        this.textObject0 = this.add.text(
            500, //x
            50,//y
            "settings", //text
            {
                font: "20px Impact",
                color: "#FFFFFF",
                align: "center"
            } //style
        );

        this.back = this.add.image(50, 50, 'resume')
        .setInteractive()
        .on('pointerover', () => this.back.setAlpha(0.4))
        .on('pointerout', () => this.back.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('pause');
        });
        this.back.setFlipX(true);
        this.back.setScale(.8);

        this.audioon = this.add.image(260, 250, 'audioon')
        .setInteractive()
        .on('pointerover', () => this.audioon.setAlpha(0.4))
        .on('pointerout', () => this.audioon.setAlpha(1))
        .on('pointerdown', () => {
            /////////////////music on/////////////////
        });

        this.audiooff = this.add.image(370, 250, 'audiooff')
        .setInteractive()
        .on('pointerover', () => this.audiooff.setAlpha(0.4))
        .on('pointerout', () => this.audiooff.setAlpha(1))
        .on('pointerdown', () => {
            ////////////////music off///////////////
        });
    }
}

class Pause extends Phaser.Scene {
    constructor() {
        super('pause');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('resume', 'resume.png');
        this.load.image('settings', 'settings.png');
        this.load.image('quit', 'quit.png');
        this.load.image('mapbut', 'mapbut.png');
    }
    create() {
        this.cameras.main.setBackgroundColor('#36454f');
        this.textObject0 = this.add.text(
            50, //x
            50,//y
            "pause", //text
            {
                font: "20px Impact",
                color: "#FFFFFF",
                align: "center"
            } //style
        );

        //this.resume = this.add.image(390, 260, 'resume')
        //.setInteractive()
        //.on('pointerdown', () => {
        //    this.scene.start(previousScene);
        //});
        //this.resume.setScale(.8)
//
        ////////////////////add audio scene///////////////////
        //this.settings = this.add.image(330, 170, 'settings')
        //.setInteractive()
        //.on('pointerdown', () => {
        //    this.scene.start('settings');
        //});
//
        //this.quit = this.add.image(250, 260, 'quit')
        //.setInteractive()
        //.on('pointerdown', () => {
        //    this.scene.start('title');
        //});
        //this.quit.setScale(.8)
//
        //this.mapbut = this.add.image(300, 350, 'mapbut')
        //.setInteractive()
        //.on('pointerdown', () => {
        //    this.scene.start('map');
        //});
        //this.quit.setScale(.8)

        this.resume = this.add.image(600, 40, 'resume')
        .setInteractive()
        .on('pointerover', () => this.resume.setAlpha(0.4))
        .on('pointerout', () => this.resume.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start(previousScene);
        });
        this.resume.setScale(.8)

        //////////////////add audio scene///////////////////
        this.settings = this.add.image(320, 170, 'settings')
        .setInteractive()
        .on('pointerover', () => this.settings.setAlpha(0.4))
        .on('pointerout', () => this.settings.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('settings');
        });

        this.quit = this.add.image(320, 260, 'quit')
        .setInteractive()
        .on('pointerover', () => this.quit.setAlpha(0.4))
        .on('pointerout', () => this.quit.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('title');
        });
        this.quit.setScale(.8)

        this.mapbut = this.add.image(320, 350, 'mapbut')
        .setInteractive()
        .on('pointerover', () => this.mapbut.setAlpha(0.4))
        .on('pointerout', () => this.mapbut.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('map');
        });
        this.quit.setScale(.8)
    }
}

class Level1 extends Phaser.Scene {
    constructor() {
        super('level1');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('pause', 'pause.png');
    }
    create() {
        previousScene = this.scene.key;

        this.cameras.main.setBackgroundColor('#1D4625');

        this.pause = this.add.image(570, 50, 'pause')
        .setInteractive()
        .on('pointerover', () => this.pause.setAlpha(0.4))
        .on('pointerout', () => this.pause.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('pause')
        });
        this.pause.setScale(.5);


        this.textObject0 = this.add.text(
            100, //x
            250,//y
            "level1", //text
            {
                font: "50px Impact",
                color: "#FFFFFF",
                align: "center"
            } //style
        );
    }
}

class Level2 extends Phaser.Scene {
    constructor() {
        super('level2');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('pause', 'pause.png');
    }
    create() {
        this.pause = this.add.image(570, 50, 'pause')
        .setInteractive()
        .on('pointerover', () => this.pause.setAlpha(0.4))
        .on('pointerout', () => this.pause.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('pause')
        });
        this.pause.setScale(.5);

        previousScene = this.scene.key;

        this.cameras.main.setBackgroundColor('#1D4625');
        this.textObject0 = this.add.text(
            100, //x
            250,//y
            "Level2", //text
            {
                font: "50px Impact",
                color: "#FFFFFF",
                align: "center"
            } //style
        );
    }

    //this.input.on('pointerdown', () => this.scene.start('messagecard'));
}

class Level3 extends Phaser.Scene {
    constructor() {
        super('level3');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('pause', 'pause.png');
    }
    create() {
        this.pause = this.add.image(570, 50, 'pause')
        .setInteractive()
        .on('pointerover', () => this.pause.setAlpha(0.4))
        .on('pointerout', () => this.pause.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('pause')
        });
        this.pause.setScale(.5);


        previousScene = this.scene.key;

        this.cameras.main.setBackgroundColor('#1D4625');
        this.textObject0 = this.add.text(
            100, //x
            250,//y
            "Level3", //text
            {
                font: "50px Impact",
                color: "#FFFFFF",
                align: "center"
            } //style
        );
    }

}
class NonInteractive extends Phaser.Scene {
    constructor() {
        super('NonInteractive');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('non', 'doctime_logo.png');
    }
    create(){
        this.time.addEvent({
            delay: 3000, 
            loop:false,
            callback: () => {
                this.scene.start("title")
            }
        })
        const instruction = this.add.text(350, 400, 'Hold down click to skip', { fontSize: '10px', fill: '#fff' });
        this.non = this.add.image(300, 200, 'non');
        this.input.on('pointerup', (pointer) => {
            let duration = pointer.getDuration();
            if(duration >= 500){
                this.scene.start('title')
            }
            console.log(duration)
        });
        this.cameras.main.fadeIn(6000);
        this.tweens.chain({
            targets: this.non,
            tweens: [
                {
                    x: '+=' + 100,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                },
                {
                    y: '+=' + 100,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100 
                }
            ]
        });
    }
    update(){
    }
}
class Names extends Phaser.Scene {
    constructor() {
        super('Names');
    }
    preload(){

    }
    create(){
        this.add.text(185, 50, "Brayden Smith,").setFontSize(30);
        this.add.text(200, 100, "Aly Cerutti,").setFontSize(30);
        this.add.text(210, 150, "Aaron Lee,").setFontSize(30);
        this.add.text(205, 200, "Akash Basu,").setFontSize(30);
        this.add.text(150, 250, "and Connor Green").setFontSize(30);
        this.add.text(250, 300, "present").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('NonInteractive'));
        this.cameras.main.fadeIn(6000);
        this.time.addEvent({
            delay: 3000, 
            loop:false,
            callback: () => {
                this.scene.start("NonInteractive")
            }
        })
    }
    update(){
    }
}
var previousScene;

new Phaser.Game({
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    //backgroundColor: 0x2a5825,
    //scene: [Title, Map, Pause, Settings, Level1, Level2, Level3],
    scene: [Names, NonInteractive, Title, Map, Pause, Settings, Level1, Level2, Level3],
})



