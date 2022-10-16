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

    // create fire texture
    const fireTexture = new BABYLON.FireProceduralTexture("fireTexture", 200, scene)
    fireTexture.fireColors = [
        new BABYLON.Color3(0.1, 0, 0),
        new BABYLON.Color3(0.8, 0.8, 0),
        new BABYLON.Color3(0.3, 0.8, 0),
        new BABYLON.Color3(0, 0, 0.2),
        new BABYLON.Color3(0.5, 0.7, 0.2),
        new BABYLON.Color3(0.1, 0.7, 0),
    ]

    const fireMat = new BABYLON.StandardMaterial( "fireMat", scene);
    fireMat.diffuseTexture = fireTexture


    wall1.material = fireMat
}

