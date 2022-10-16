function createScene(){
    const scene = createBasicSceneArc()

    // Create a sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere( 'sphere', {
        diameter: 200
    }, scene)
    sphere.material = createrendomColorMaterial()
    sphere.position.y = 150;
    sphere.material.wireframe = true;
    sphere.showBoundingBox = true

    // Create a torus
    const torus = BABYLON.MeshBuilder.CreateTorus( "torus", {
        diameter: 200,
        thickness: 50,
        tessellation: 40
    }, scene)
    torus.position.x = 400;
    torus.position.y = 100;
    torus.material = createrendomColorMaterial()
    torus.material.wireframe = true;
    torus.showBoundingBox = true
}

