function createScene(){
    const scene = createBasicSceneArc({noground: true});
    scene.clearColor = new BABYLON.Color3(0.3,0.8,0.8);

    createGround(scene)

    const light1 = new BABYLON.DirectionalLight("light1", new BABYLON.Vector3(0, -5,  5));
    light1.intensity = 0.4;
    light1.position = new BABYLON.Vector3(50, 600, -600)

    const light2 = new BABYLON.DirectionalLight("light1", new BABYLON.Vector3(-5, -5,  0));
    light2.intensity = 0.5;
    light2.position = new BABYLON.Vector3(50, 400, 400)

    const box = BABYLON.MeshBuilder.CreateBox("box", {size: 75}, scene)
    box.position = new BABYLON.Vector3(200, 300, 50)

    const torus = BABYLON.MeshBuilder.CreateTorus("torus", {
        diameter: 100,
        thickness: 30,
        tessellation: 50
    }, scene)
    torus.position.y = 300

    // Create a shadow generator for light1
    const shadowGen1 = new BABYLON.ShadowGenerator(1024, light1)
    shadowGen1.getShadowMap().renderList.push(box) 
    shadowGen1.getShadowMap().renderList.push(torus)
    shadowGen1.usePoissonSampling = true; 

    const shadowGen2 = new BABYLON.ShadowGenerator(1024, light2)
    shadowGen2.getShadowMap().renderList.push(box) 
    shadowGen2.getShadowMap().renderList.push(torus)
    shadowGen2.useBlurCloseExponentialShadowMap = true;

    scene.registerBeforeRender(()=>{
        torus.rotation.x += 0.05;
        torus.rotation.y += 0.02;

        box.rotation.x += 0.06;
        box.rotation.z += 0.05;

    })

}

const createGround = (scene) => {
    const ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("ground", '/assets/images/heightmaps/heightmap2.png',{
        width: 1200,
        height: 1200,
        minHeight: -10,
        maxHeight: 200,
        subdivisions: 100,
    })
    ground.receiveShadows = true;
    ground.material = createColorMaterial(scene, new BABYLON.Color3(0.1, 0.4, 0.3))
    ground.material.specularColor = new BABYLON.Color3(0,0,0)


}


