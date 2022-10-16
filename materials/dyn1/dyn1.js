
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

    // Dynamic TEXTURE
    const dynTexture = new BABYLON.DynamicTexture( 'dynTexture',  {
        width: 300,
        height: 200,
    }, scene)

    const font = "bold 40px monospace"
    dynTexture.drawText( "Anshuman", 30, 100, font, "green", "yellow", false, true)

    const sphereMat = new BABYLON.StandardMaterial('sphereMat', scene);
    sphereMat.diffuseTexture = dynTexture

    const sphere = BABYLON.MeshBuilder.CreateSphere( 'sphere', {
        diameter: 200,
    }, scene)

    sphere.position.y = 200;
    sphere.position.x = 200;
    sphere.rotation.y = -1.8;

    sphere.material = sphereMat

}

