
function createScene(){
    const scene = createBasicSceneArc({noground : true})

    const light = new BABYLON.DirectionalLight( "light1", new BABYLON.Vector3(0, 0, 5), scene);
    light.diffuse = new BABYLON.Color3(1, 1, 1);
    
    const ground = BABYLON.MeshBuilder.CreateGround("ground", {
        width: 1200,
        height: 600
    }, scene)

    const marbleTexture = new BABYLON.MarbleProceduralTexture( 'marbleTexture', 1000, scene)

    const marbleMat = new BABYLON.StandardMaterial( "marbleMat", scene);
    marbleMat.diffuseTexture = marbleTexture;

    ground.material = marbleMat

    const sph = BABYLON.MeshBuilder.CreateSphere( 'sph', {
        diameterX: 150,
        diameterY: 100,
        diameterZ: 150
        
    }, scene)

    sph.material = marbleMat
    sph.position.y = 200
    sph.position.x = 100

}

