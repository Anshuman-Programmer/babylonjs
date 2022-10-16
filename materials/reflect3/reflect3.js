function createScene(){
    const scene = createBasicSceneArc({noground: true})

    // Create a cublic texture
    const texture = new BABYLON.CubeTexture( '/assets/skybox/skybox', scene);
    texture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;

    // Meterial for skybox
    const material = new BABYLON.StandardMaterial( 'skyboxMat', scene);
    material.reflectionTexture = texture
    material.disableLighting = true;
    material.diffuseColor = new BABYLON.Color3.Black();
    material.specularColor = new BABYLON.Color3.Black();
    material.backFaceCulling = false;

    // Create the Sky Box
    const skybox = BABYLON.MeshBuilder.CreateBox( 'skybox', {
        size: 2000,
    }, scene)

    skybox.material = material

    const sph = BABYLON.MeshBuilder.CreateSphere( 'sph', {
        diameter: 200
    } , scene)
    sph.position.y = 200

    const objTex = new BABYLON.CubeTexture( '/assets/skybox/skybox', scene );
    objTex.coordinatesMode = BABYLON.Texture.CUBIC_MODE;

    const objMat = new BABYLON.StandardMaterial("objMat", scene)
    objMat.reflectionTexture = objTex;
    objMat.diffuseColor = new BABYLON.Color3(0, 0, 0);

    sph.material = objMat

    const box = BABYLON.MeshBuilder.CreateBox( '', {
        size: 200
    }, scene)
    box.position.y = 200
    box.position.x = 500

    box.material = objMat

    const shape1 = BABYLON.MeshBuilder.CreateCylinder( '', {
        height: 200,
        diameter: 200
    }, scene)

    shape1.position.y = 200
    shape1.position.x = -500

    shape1.material = objMat


}
