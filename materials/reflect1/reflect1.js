function createScene(){
    const scene = createBasicSceneArc()
    
    // Create Mirror ground
    const mirror = BABYLON.MeshBuilder.CreateGround( "mirror", {
        width:800,
        height:1000
    }, scene )
    mirror.position.y = 10;

    const mirrorTexture = new BABYLON.MirrorTexture( 'mirrorTexture', 512, scene, true)
    mirrorTexture.mirrorPlane = new BABYLON.Plane(0, -1, 0, 10)
    mirrorTexture.level = 0.9

    const material = new BABYLON.StandardMaterial( "material", scene)
    material.reflectionTexture = mirrorTexture;

    mirror.material = material;

    // Create sphere 
    const sphere = BABYLON.MeshBuilder.CreateSphere( 'sphere', {
        diameter:200,
        arc: 200
    }, scene)
    sphere.position.y = 200
    sphere.position.x = 100

    const sphMat = new BABYLON.StandardMaterial("sphMat", scene)
    sphMat.diffuseColor = new BABYLON.Color3.Green()

    sphere.material = sphMat

    // Create a torus
    const torus = BABYLON.MeshBuilder.CreateTorus( "torus", {
        diameter:150,
        thickness: 50,
        tessellation: 50
    }, scene)

    torus.position.y = 100
    torus.position.x = -150

    const fireTexture = new BABYLON.FireProceduralTexture("fireTexture", 200, scene)
    const torusMat = new BABYLON.StandardMaterial( "torusMat" , scene)
    torusMat.diffuseTexture = fireTexture
    torus.material = torusMat;

    scene.registerBeforeRender(()=>{
        torus.rotation.x +=0.02
        torus.rotation.y +=0.02
    })

    mirrorTexture.renderList.push(sphere)
    mirrorTexture.renderList.push(torus)
}

