function createScene(){
    const scene = createBasicSceneArc();

    const brick = new BABYLON.StandardMaterial( "brick", scene);
    brick.diffuseTexture = new BABYLON.Texture("/assets/images/wall_diffuse.jpg");
    // brick.bumpTexture = new BABYLON.Texture("/assets/images/wall_height.jpg");
    // brick.NormalMap = new BABYLON.Texture("/assets/images/wall_normal.jpg");

    brick.diffuseTexture.uScale = 3;
    brick.diffuseTexture.vScale = 1;
    brick.diffuseColor.uOffset = 1.2;
    brick.diffuseColor.vOffset = 0.5;

    // brick.bumpTexture.uScale = 3;
    // brick.bumpTexture.vScale = 1;
    // brick.bumpTexture.uOffset = 1.2;
    // brick.bumpTexture.vOffset = 0.5;
    
    const wall1 = BABYLON.MeshBuilder.CreateBox( "wall1", {
        width:500,
        height:200,
        depth:20,
        faceUV: [
            new BABYLON.Vector4( 0, 0, 1, 1),
            new BABYLON.Vector4( 0, 0, 1, 1),
            new BABYLON.Vector4( 0, 0, 1/4, 1/8),
            new BABYLON.Vector4( 0, 0, 1/4, 1/8),
            new BABYLON.Vector4( 0, 0, 1, 1/12),
            new BABYLON.Vector4( 0, 0, 1, 1/12),
        ]
    })
    wall1.position.y = 100;
    wall1.material = brick;
}