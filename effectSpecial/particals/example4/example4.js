function createScene(){
    const scene = createBasicSceneArc({noground: true});

    createGround()

    // scene.cameras[0].position = new BABYLON.Vector3(0, 10, -6)

    scene.cameras[0].position = new BABYLON.Vector3(0, 20, -40);
    scene.cameras[0].tartget = new BABYLON.Vector3(0, 20, 0);

    // create a particle
    const particleSystem = new BABYLON.ParticleSystem('particleSystem', 4000, scene);
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;

    // use Sprite animation for rain
    particleSystem.particleTexture = new BABYLON.Texture("/assets/images/rain.png");
    particleSystem.isAnimationSheetEnabled = true
    particleSystem.startSpriteCellID = 0
    particleSystem.endSpriteCellID = 3
    particleSystem.spriteCellHeight = 512
    particleSystem.spriteCellWidth = 128
    particleSystem.spriteRandomStartCell = true
    particleSystem.spriteCellChangeSpeed = 0

    const emitter = particleSystem.createBoxEmitter(
        new BABYLON.Vector3(0, -1, 0),
        new BABYLON.Vector3(0, -1, 0),
        new BABYLON.Vector3(-50, 40, 50),
        new BABYLON.Vector3(50, 30, 50),
    );
    particleSystem.emitRate = 2000

    particleSystem.minEmitPower = 5;
    particleSystem.maxEmitPower = 8;

    particleSystem.minSize = 1;
    particleSystem.maxSize = 1.2;

    particleSystem.minScaleX = 1.0
    particleSystem.maxScaleX = 1.0

    particleSystem.minScaleY = 0.8
    particleSystem.maxScaleY = 1.0

    particleSystem.minLifeTime = 1
    particleSystem.maxLifeTime = 2

    particleSystem.gravity = new BABYLON.Vector3(0,0,0)

    particleSystem.direction1 = new BABYLON.Vector3( 0, -25, 0)
    particleSystem.direction2 = new BABYLON.Vector3( 0, -30, 0)

    particleSystem.start()
}

function createGround(scene){
    const ground = BABYLON.MeshBuilder.CreateGround('ground',{
        width: 1200,
        heigth: 800,
    }, scene)

    const mat = new BABYLON.StandardMaterial( 'grassMat', scene)
    mat.diffuseColor = new.BABYLON.GrassProcedualTexture('grass', 512, scene);
    ground.material = mat;
}
