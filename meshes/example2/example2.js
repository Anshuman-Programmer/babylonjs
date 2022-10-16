function createScene(){
    const scene = createBasicSceneArc()

    const box = BABYLON.MeshBuilder.CreateBox( 'box', {
        size: 200
    }, scene)
    box.material = createrendomColorMaterial()

    const sphere1 = BABYLON.MeshBuilder.CreateSphere( 'sphere1', {
        diameter: 150
    }, scene)
    sphere1.position.y = 100
    sphere1.material = createRendomColorMaterial()
    sphere1.parent = box

    const sphere2 = BABYLON.MeshBuilder.CreateSphere( 'sphere2', {
        diameter: 150
    }, scene)
    sphere2.position.x = 100
    sphere2.material = createRendomColorMaterial()
    sphere2.parent = box

    box.position.x = 100
    box.position.y = 200

    scene.registerBeforeRender( () => {
        box.rotation.x += 0.02,
        box.rotation.y += 0.04
    })
    
}

