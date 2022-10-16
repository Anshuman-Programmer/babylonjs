function createScene(){
    const scene = createBasicSceneArc()

    const path = [
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(17, 0, 0),
        new BABYLON.Vector3(10, 4, 0),
        new BABYLON.Vector3(19, 7, 0),
        new BABYLON.Vector3(19, 17, 0),
        new BABYLON.Vector3(10, 20, 0),
        new BABYLON.Vector3(10, 27, 0),
        new BABYLON.Vector3( 4, 27, 0),
        new BABYLON.Vector3( 4, 33, 0),
        new BABYLON.Vector3( 10, 38, 0),
        new BABYLON.Vector3( 8, 38, 0),
    ]

    // create lathe
    const lathe = BABYLON.MeshBuilder.CreateLathe("lathe", {
        shape: path,
        radius: 1,
        closed: true,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene)

    const texture = new BABYLON.MarbleProceduralTexture( "marble", 512 , scene)
    const mat = new BABYLON.StandardMaterial( 'mat', scene);
    mat.diffuseTexture = texture;

    lathe.material = mat;
}

