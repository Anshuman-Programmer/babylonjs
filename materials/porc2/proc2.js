
function createScene(){
    const scene = createBasicSceneArc()

    const light = new BABYLON.DirectionalLight( "light1", new BABYLON.Vector3(0, 0, 5), scene);
    light.diffuse = new BABYLON.Color3(1, 1, 1);
    
    const wall1 = BABYLON.MeshBuilder.CreateBox( "wall1", {
        width: 600,
        height: 300,
        depth: 20,
    }, scene);
    wall1.position.y = 150;

    // create noise Texture
    const noiseTexture = new BABYLON.NoiseProceduralTexture( 'noiseTexture', 256, scene)
    noiseTexture.animationSpeedFactor = 5;

    const noiseMat = new BABYLON.StandardMaterial("noiseMat", scene);
    noiseMat.diffuseTexture = noiseTexture;
    noiseMat.emissiveColor = new BABYLON.Color3(0, 0, 0.8)

    wall1.material = noiseMat

}

