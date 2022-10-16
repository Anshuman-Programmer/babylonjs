
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
    const brickTexture = new BABYLON.BrickProceduralTexture( 'brickTexture', 200, scene)
    brickTexture.brickColor = new BABYLON.Color3(0, 0, 0.5)

    const brickMat = new BABYLON.StandardMaterial("brickMat", scene);
    brickMat.diffuseTexture = brickTexture;

    wall1.material = brickMat
}

