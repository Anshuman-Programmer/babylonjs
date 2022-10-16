function createScene(){
    const scene = createBasicSceneArc({noground: true});

    scene.cameras[0].position = new BABYLON.Vector3(0, 10, -20)

    // create partical system
    const particleSystem = new BABYLON.ParticleSystem('particleSystem', 100000, scene)
    particleSystem.particleTexture = new BABYLON.Texture("/assets/images/flare.jpg")
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;


    const ground = BABYLON.MeshBuilder.CreateGround('', {
        width: 1200,
        height: 800
    }, scene)
    ground.material = craeteGroundMaterial()

    // Create the emitter
    const emitter = createEmitter()
    particleSystem.emitter = emitter
    particleSystem.emitRate = 50000
    particleSystem.minEmitPower = 1.5
    particleSystem.maxEmitPower = 3.0


    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.2;

    particleSystem.direction1 = new BABYLON.Vector3(5, 15,-5)
    particleSystem.direction2 = new BABYLON.Vector3(-5, 15,5)

    particleSystem.gravity = new BABYLON.Vector3(0, -60, 0)

    particleSystem.start()

}

function createEmitter(scene) {
    let emitter = BABYLON.MeshBuilder.CreateSphere( 'sph1', {diameter: 5}, scene)

    const material = new BABYLON.StandardMaterial( 'standarmat', scene)
    material.emissiveColor = new BABYLON.Color3(0,0.6,0.6)
    emitter.material = material;
    return emitter;
}

function craeteGroundMaterial(scene){
    const material = new BABYLON.StandardMaterial("grassMat", scene)
    material.diffuseTexture = new BABYLON.GrassProceduralTexture("grass", 2048, scene)
    return material
}

