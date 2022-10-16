
function createScene(){
    const scene = createBasicSceneArc( {noground: true} )

    // create a sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere( 'sphere', {
        diameter: 100
    }, scene)
    sphere.material = createRendomColorMaterial();
    sphere.position.y = 100
    
    // Create material for trails
    const trailMat = new BABYLON.StandardMaterial( "trailMat", scene)
    trailMat.diffuseColor = new BABYLON.Color3(0, 1, 1);
    trailMat.emissiveColor = new BABYLON.Color3(0, 1, 1);
    trailMat.specularColor = new BABYLON.Color3(0, 1, 1);

    // create a low layer
    const glayer = new BABYLON.GlowLayer( "glayer", scene)

    // Things to exploed
    const meshes = []
    const sph = BABYLON.MeshBuilder.CreateSphere( 'sphere', {
        diameter: 10
    }, scene)
    sph.material = createRendomColorMaterial()

    for(let i = 0; i < 200; i++){
        const cloned = sph.clone("sphere" + i)
        cloned.bakeCurrentTransformIntoVertices()

        cloned.material = createRendomColorMaterial()

        cloned.position.x = BABYLON.Scalar.RandomRange(-100, 100)
        cloned.position.y = BABYLON.Scalar.RandomRange(0, 200)
        cloned.position.z = BABYLON.Scalar.RandomRange(-100, 100)   

        cloned.computeWorldMatrix();

        let trail = new BABYLON.TrailMesh("trail"+i, cloned, scene, 1, 50, true)
        trail.material = trailMat;
        
        glayer.addIncludedOnlyMesh(trail);

        meshes.push(cloned)
    }
    sph.dispose();

    // explode the mesh
    const exploder = new BABYLON.MeshExploder( meshes, sphere);

    let canvasElen = document.getElementById("canvas")
    
    let exploreStarted = false;
    canvasElen.addEventListener( "click", ()=>{
        if(exploreStarted)return

        let x = 0.2
        scene.registerBeforeRender( ()=>{
            x += 0.02;
            exploder.explode(x)
        }) 
        exploreStarted = true
    })
}

