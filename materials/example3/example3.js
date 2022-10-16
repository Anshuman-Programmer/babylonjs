function createScene(){
    const scene = createBasicSceneArc()

    const light1 = new BABYLON.DirectionalLight("light1",new BABYLON.Vector3(0, 0, 5), scene);
    light1.diffuse = new BABYLON.Color3(1, 1, 1)
    light1.specular = new BABYLON.Color3(0, 0, 0)

    const brick = new BABYLON.StandardMaterial( "brick", scene);
    brick.diffuseTexture = new BABYLON.Texture("/assets/images/brick.jpg");
    
    const wall1 = BABYLON.MeshBuilder.CreateBox( "wall1", {
        width:1000,
        height:200,
        depth:10,
        faceUV: [
            new BABYLON.Vector4( 0, 0, 1, 1),
            new BABYLON.Vector4( 0, 0, 1, 1),
            new BABYLON.Vector4( 0, 0, 1, 1),
            new BABYLON.Vector4( 0, 0, 1, 1),
            new BABYLON.Vector4( 0, 0, 1, 1),
            new BABYLON.Vector4( 0, 0, 1, 1),
        ]
    })
    wall1.position.y = 100;

}

