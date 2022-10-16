
function createScene(){
    const scene = createBasicSceneArc({noground : true})

    // LIGHT
    const light = new BABYLON.DirectionalLight( "light1", new BABYLON.Vector3(0, 0, 5), scene);
    light.diffuse = new BABYLON.Color3(1, 1, 1);
    
    // GROUND
    const ground = BABYLON.MeshBuilder.CreateGround("ground", {
        width: 1200,
        height: 600
    }, scene)

    // GRASS TEXTURE
    const grassTexture = new BABYLON.GrassProceduralTexture( 'grassTexture', 256, scene)
    grassTexture.grassColors = [
        new BABYLON.Color3(0.2, 1, 0),
        new BABYLON.Color3(0, 0.5, 0),
        new BABYLON.Color3(0.2, 0.5, 0),
    ]
    grassTexture.groundColor = new BABYLON.Color3( 1, 0.4, 0.4)

    // GRASS MATERIAL
    const grassMat = new BABYLON.StandardMaterial( "grassMat", scene);
    grassMat.diffuseTexture = grassTexture;

    ground.material = grassMat

}

