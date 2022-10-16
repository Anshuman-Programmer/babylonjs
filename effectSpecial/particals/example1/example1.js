function createScene(){
    const scene = createBasicSceneArc();

    scene.cameras[0].position = new BABYLON.Vector3(0, 10, -20)

    // Create a partical system
    const particleSystem = new BABYLON.ParticleSystem( 'particleSystem', 3000, scene);
    particleSystem.particleTexture = new BABYLON.Texture( '/assets/images/flare2.jpg')
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    
    // Create a the emitter
    let emitter = BABYLON.MeshBuilder.CreateBox( 'emitter', { size: 1.0}, scene)
    emitter.material = createRendomColorMaterial();
    emitter.position.y = 0.5
    particleSystem.emitter = emitter

    // set emitter characterstics
    particleSystem.emitRate = 500
    particleSystem.minEmitPower = 0.2;
    particleSystem.maxEmitPower = 3.0;

    // Set particle color
    particleSystem.color1 = new BABYLON.Color4(1.0, 0, 0, 1.0)
    particleSystem.color2 = new BABYLON.Color4(1.0, 1.0, 0, 0.6)
    particleSystem.colorDead = new BABYLON.Color4(0.4, 0.4, 0.4, 0.6)

    // set the size fo the particle
    particleSystem.minSize = 0.1
    particleSystem.maxSize = 0.8

    // set the particle life time
    particleSystem.minLifeTime = 0.3
    particleSystem.maxLifeTime = 0.5

    // direction of emission
    particleSystem.direction1 = new BABYLON.Vector3( -2, 5, 2)
    particleSystem.direction2 = new BABYLON.Vector3( 2, 5, -2)

    // Starting the emitter
    particleSystem.start()

}

