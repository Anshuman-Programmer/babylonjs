function createScene(){
    const scene = createBasicScreneArc()
    
    //Create light 
    const light1 = new BABYLON.DirectionalLight("light1",new BABYLON.Vector3(0, 0, 5), scene);
    light1.diffuse = new BABYLON.Color3(1, 1, 1)
    light1.specular = new BABYLON.Color3(0, 0, 0)

    const light2 = new BABYLON.DirectionalLight("light2",new BABYLON.Vector3(5, 0, 0), scene);
    light2.diffuse = new BABYLON.Color3(1, 1, 1)
    light2.specular = new BABYLON.Color3(0, 0, 0)

    // Create a material
    const mat = new BABYLON.StandardMaterial( "mat1", scene );
    mat.diffuseTexture = new BABYLON.Texture("/assets/images/cars.png")

    const faceUV = [
        new BABYLON.Vector4( 0, 0, 1/3, 1/2),
        new BABYLON.Vector4( 1/3, 0, 2/3, 1/2),
        new BABYLON.Vector4( 2/3, 0, 3/3, 1/2),
        new BABYLON.Vector4( 0, 1/2, 1/3, 2/2),
        new BABYLON.Vector4( 1/3, 1/2, 2/3, 2/2),
        new BABYLON.Vector4( 2/3, 1/2, 3/3, 2/2),

    ]

    // Create a box
    const box = BABYLON.MeshBuilder.CreateBox("box",{
        size: 200,
        faceUV: faceUV
    });
    box.material = mat;
    box.position.y = 100;
    box.position.z = 300;
    
    scene.registerBeforeRender(function (){
        box.rotation.x += 0.05;
        box.rotation.z += 0.05;
        box.rotation.y += 0.05;
    });
}

