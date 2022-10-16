function createScene(){
    const scene = createBasicSceneArc()

    //create sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere( 'sphere', {
        diameter: 100
    }, scene)
    sphere.material = createRendomColorMaterial();
    sphere.position.y = 100

    const meshes = []

    const sph = BABYLON.MeshBuilder.CreateSphere( 'sphere', {
        diameter: 20
    }, scene)
    sph.material = createRendomColorMaterial()

    for(let i = 0; i < 200; i++){
        const cloned = sph.clone("sphere" + i)

        cloned.material = createRendomColorMaterial()

        cloned.position.x = BABYLON.Scalar.RandomRange(-100, 100)
        cloned.position.z = BABYLON.Scalar.RandomRange(-200, 200)
        cloned.position.y = BABYLON.Scalar.RandomRange(-100, 100)
        
        meshes.push(cloned)    

    }

    const box = BABYLON.MeshBuilder.CreateBox( 'box', {
        size: 20
    }, scene)

    for(let i = 0; i < 200; i++){
        const cloned = box.clone('box'+ i)
        cloned.material = createRendomColorMaterial()

        cloned.position.x = BABYLON.Scalar.RandomRange(-100, 100)
        cloned.position.z = BABYLON.Scalar.RandomRange(-200, 200)
        cloned.position.y = BABYLON.Scalar.RandomRange(-100, 100)

        meshes.push(cloned)
    }
    
    // explode the mesh
    const exploder = new BABYLON.MeshExploder( meshes, sphere);
    
    let x = 1.0
    scene.registerBeforeRender( ()=>{
        x += 0.02;
        exploder.explode(x)
    })
}

