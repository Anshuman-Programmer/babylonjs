function createScene(){
    const scene = createBasicSceneArc({noground: true});

    scene.cameras[0].position = new BABYLON.Vector3(0, 10, -6)

    // create partical system
    const particleSystem = new BABYLON.ParticleSystem('particleSystem', 2000, scene)
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;

    // create a particle texture by use sprite
    particleSystem.particleTexture = new BABYLON.Texture('/assets/images/Smoke_SpriteSheet_8x8.png')
    particleSystem.isAnimationSheetEnabled = true;
    particleSystem.startSpriteCellID = 0
    particleSystem.endSpriteCellID = 63
    particleSystem.spriteCellWidth = 128
    particleSystem.spriteCellHeight = 128
    particleSystem.spriteRandomStartCell = true
    particleSystem.spriteCellChangeSpeed = 2.5

    // Set size
    particleSystem.addSizeGradient(0,1)
    particleSystem.addSizeGradient(1,6)

    // addColor gradient
    particleSystem.addColorGradient( 0, new BABYLON.Color4(0.5, 0.5, 0.5, 0.2))
    particleSystem.addColorGradient( 0.3, new BABYLON.Color4(0.3, 0.3, 0.3, 0.5))
    particleSystem.addColorGradient( 0.7, new BABYLON.Color4(0.5, 0.5, 0.5, 0.2))
    particleSystem.addColorGradient( 1, new BABYLON.Color4(0.5, 0.5, 0.5, 0.2))

    // craete the emitter
    const box = BABYLON.MeshBuilder.CreateBox('emitter', {size: 1}, scene)
    box.material = createEmitterMaterial(scene)

    particleSystem.emitter = box
    particleSystem.emitRate = 5
    particleSystem.minEmitPower = 0.2
    particleSystem.maxEmitPower = 0.3;

    // set direction
    particleSystem.direction1 = new BABYLON.Vector3( -2, 1, 2)
    particleSystem.direction2 = new BABYLON.Vector3( 2, 1, -2)

    particleSystem.start()
}


function createEmitterMaterial(scene){
    const mat = new BABYLON.StandardMaterial( 'mat', scene)
    mat.emissiveColor = new BABYLON.Color3( 0, 0.6,0.6)
    return mat
}