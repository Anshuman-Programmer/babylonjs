function createScene(){
    const scene = createBasicSceneArc();

    // create box with single color
    const yellowMat = new BABYLON.StandardMaterial( "yMat", scene);
    yellowMat.diffuseColor = new BABYLON.Color3(1, 1, 0);

    // create box with single color
    const greenMat = new BABYLON.StandardMaterial("gMat", scene);
    greenMat.diffuseColor = new BABYLON.Color3(0, 1, 0);

    const emsMat = new BABYLON.StandardMaterial("emsMat", scene);
    emsMat.emissiveColor = new BABYLON.Color3(1, 1, 0);

    // Create a box
    const box1 = BABYLON.MeshBuilder.CreateBox("box1",{
        size: 100
    }, scene);
    box1.position.y = 50;
    box1.position.x = 100;
    box1.material = yellowMat;

    const sphere1 = BABYLON.MeshBuilder.CreateSphere('sph1',{
        diameter: 35
    }, scene)
    sphere1.position.x = -150;
    sphere1.position.y = 100;
    sphere1.material = greenMat;

    const sphere2 = BABYLON.MeshBuilder.CreateSphere('sph2',{
        diameter: 100
    }, scene);
    sphere2.position.x = -50;
    sphere2.position.y = 200;
    sphere2.material = emsMat;

    const glowLayer = new BABYLON.GlowLayer("glayer1", scene );
    glowLayer.addIncludedOnlyMesh( sphere2 );
    glowLayer.addIncludedOnlyMesh( sphere1 );
    glowLayer.intensity = 0.5;
}