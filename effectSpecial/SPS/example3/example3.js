function createScene(){
    const scene = createBasicSceneArc({noground: true});

    const ground = BABYLON.MeshBuilder.CreateGround("ground", {
        width: 400,
        height: 400
    }, scene)


    const grassTexture = new BABYLON.GrassProceduralTexture( 'grassTexture', 2048, scene)
    grassTexture.grassColors = [
        new BABYLON.Color3(0.2, 1, 0),
        new BABYLON.Color3(0, 0.5, 0),
        new BABYLON.Color3(0.2, 0.5, 0),
    ]
    grassTexture.groundColor = new BABYLON.Color3( 1, 0.4, 0.4)

    // GRASS MATERIAL
    const grassMat = new BABYLON.StandardMaterial( "grassMat", scene);
    grassMat.diffuseTexture = grassTexture;

    ground.material = grassMat

    //---------------------------------------------------------------

    scene.cameras[0].position = new BABYLON.Vector3(0, 10, -20)

    scene.clearCOLOR = new BABYLON.Color4(0.1, 0.4, 0.9, 0.5);

    let sps = new BABYLON.SolidParticleSystem("treeSPS1", scene)
    let positions = generateRandomPositions(1000)
    loadTree(scene, 'Tree/OBJ/','Birch_1.obj', sps, positions)

    sps = new BABYLON.SolidParticleSystem("treeSPS2", scene)
    positions = generateRandomPositions(1000)
    loadTree(scene, 'Tree/OBJ/','Birch_3.obj', sps, positions)

    sps = new BABYLON.SolidParticleSystem("treeSPS3", scene)
    positions = generateRandomPositions(1000)
    loadTree(scene, 'Tree/OBJ/','Pine_3.obj', sps, positions)

    sps = new BABYLON.SolidParticleSystem("treeSPS4", scene)
    positions = generateRandomPositions(1000)
    loadTree(scene, 'Tree/OBJ/','Tree_9.obj', sps, positions)

    sps = new BABYLON.SolidParticleSystem("treeSPS5", scene)
    positions = generateRandomPositions(1000)
    loadTree(scene, 'Tree/OBJ/','Tree_4.obj', sps, positions)

    // const gizmoMgr = new BABYLON.GizmoManager(scene);
    // gizmoMgr.positionGizmoEnabled = true;
    // gizmoMgr.rotationGizmoEnabled = true

}

function loadTree(scene, path, fileName, sps, positions){
    const assetsMgr = new BABYLON.AssetsManager(scene)

    const task = assetsMgr.addMeshTask("task1", "", path, fileName);

    task.onSuccess = (task) =>{
        addTreesToSPS(scene, sps, task.loadedMeshes, positions)
        task.loadedMeshes.forEach(mesh => mesh.dispose());
    }
    task.onError = (task, message, exception) =>{
        console.error(message)
        console.error(exception)
    }
    assetsMgr.load()
}

function addTreesToSPS(scene, sps, meshes, positions){
    meshes.forEach(mesh => {
        sps.addShape(mesh, positions.length)
    });

    sps.initParticles = function(){

        for(let i = 0; i < sps.nbParticles/2; i++){
            sps.particles[i].position.x = positions[i].x;
            sps.particles[i].position.z = positions[i].z;
            sps.particles[i].color = new BABYLON.Color3(BABYLON.Scalar.RandomRange(0.6,0.4),BABYLON.Scalar.RandomRange(0.4,0),0);
        }
        for(let i = sps.nbParticles/2; i < sps.nbParticles; i++){
            const pIndex = i - sps.nbParticles/2
            sps.particles[i].position.x = positions[pIndex].x
            sps.particles[i].position.z = positions[pIndex].z
            sps.particles[i].color = new BABYLON.Color3(0,BABYLON.Scalar.RandomRange(1,0.4),0)
        }
    }

    const spsMesh = sps.buildMesh();

    sps.initParticles()
    sps.setParticles()

}

function generateRandomPositions(count){
    const positions = []
    for(let i = 0; i< count; i++){
        positions.push(new BABYLON.Vector3(
            BABYLON.Scalar.RandomRange(200,-200),
            BABYLON.Scalar.RandomRange(0,-20),
            BABYLON.Scalar.RandomRange(200,-200),
        ))
    }
    return positions
}

