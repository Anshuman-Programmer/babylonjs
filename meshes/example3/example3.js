function createScene(){
    const scene = createBasicSceneArc()

    const sphere = BABYLON.MeshBuilder.CreateSphere( 'sphere', {
        diameter: 100
    }, scene)
    sphere.material = createRendomColorMaterial()

    const torus = BABYLON.MeshBuilder.CreateTorus( 'torus', {
        diameter: 200,
        thickness: 40,
        tessellation: 20
    }, scene);
    torus.material = createRendomColorMaterial()
    torus.parent = sphere

    sphere.position.y = 100;

    const theta = 2 * Math.PI / 7;
    for(let i = 0; i < 7; i++){
        
        let cloned = sphere.clone();
        
        cloned.position.x = 400 * Math.cos(i * theta)
        cloned.position.z = 400 * Math.sin(i * theta)
        cloned.position.y = 100

        cloned.material = createRendomColorMaterial();

        let meshes = cloned.getChildMeshes();
        meshes[0].material = createRendomColorMaterial();

        scene.registerBeforeRender( () => {
            cloned.rotation.x += 0.02,
            cloned.rotation.y += 0.04
        })
    }
}

