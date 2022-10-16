function createScene(){
    const scene = createBasicSceneArc()

    const light = new BABYLON.DirectionalLight("light1",new BABYLON.Vector3(0, 0, 5), scene);
    light.diffuse = new BABYLON.Color3(1, 1, 1)
    light.specular = new BABYLON.Color3(0, 0, 0)

    const color1 = new BABYLON.Color3.Red();
    const color2 = new BABYLON.Color3.Yellow();
    const color3 = new BABYLON.Color3.Green();

    // box 1
    const box1 = BABYLON.MeshBuilder.CreateBox( "box1", {
        size:150,
        faceColors: [color1, color2, color3, color1, color2, color3]
    }, scene)
    box1.position.y = 50;
    box1.position.x = 200;

    // box 2
    const box2 = BABYLON.MeshBuilder.CreateBox( "box1", {
        size:100,
        faceColors: [color1, color2, color3, color1, color2, color3]
    }, scene)
    box2.position.y = 100;
    box2.position.x = -200;
    box2.rotation.y = 1.2
    box2.rotation.x = 2.2

    // cylinder
    const cyl1 = BABYLON.MeshBuilder.CreateCylinder( "cyl1", {
        height: 100,
        diameterTop: 40,
        diameterBottom: 60,
        tessellation: 10,
        faceColors: [color1, color2, color3]
    }, scene)
    cyl1.position.y = 100;
    cyl1.rotation.x = 1.2;
    cyl1.z = -50

    // Torus
    const torus = BABYLON.MeshBuilder.CreateTorus( "torus", {
        diameter:100,
        thickness:40,
        tessellation:40
    }, scene)
    // torus.position.y = 300;
    torus.position = new BABYLON.Vector3(0, 300, 0)
    torus.rotation.x = 0.2;

    scene.registerBeforeRender( function(){
        torus.rotation.z += 0.05;
        torus.rotation.y += 0.05;
        torus.rotation.z += 0.05;

        box2.rotation.z += 0.05;
        box2.rotation.y += 0.05;
        box2.rotation.z += 0.05;

    })
}

