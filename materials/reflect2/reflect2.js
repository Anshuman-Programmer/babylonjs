function createScene(){
    const scene = createBasicSceneArc()

    const mirroTex = createMirrorGround(scene)
    
    const reflectionTex = new BABYLON.Texture( '/assets/images/checkers.jpg', scene);
    reflectionTex.coordinatesMode = BABYLON.Texture.PLANAR_MODE;
    reflectionTex.level = 1.0;

    const reflectMat = new BABYLON.StandardMaterial( "reflectMat", scene);
    reflectMat.reflectionTexture = reflectionTex;
    reflectMat.diffuseColor = new BABYLON.Color3(0, 0.5, 0.5)

    const sph = BABYLON.MeshBuilder.CreateSphere( "sph" , {
        diameter: 200
    }, scene)
    sph.position.y = 200
    sph.position.x = 200
    sph.material = reflectMat

    const box = BABYLON.MeshBuilder.CreateBox( "", {
        size: 200
    }, scene)
    box.position.y = 200
    box.position.x = -200
    box.rotation.y = 1.8
    box.rotation.x = 1.8

    box.material = reflectMat

    mirroTex.renderList.push(sph)
    mirroTex.renderList.push(box)
}

const createMirrorGround = (scene) => {
    const ground = BABYLON.MeshBuilder.CreateGround( 'ground1', {
        width: 800,
        height: 800,
    }, scene);
    ground.position.y = 10

    const mirrorTex = new BABYLON.MirrorTexture( 'mirrorTex', 512, scene, true);
    mirrorTex.mirrorPlane = new BABYLON.Plane(0, -1.0, 0, 10)

    const mirrorMat = new BABYLON.StandardMaterial('mirrorMat', scene);
    mirrorMat.diffuseColor = new BABYLON.Color3.Black()
    mirrorMat.reflectionTexture = mirrorTex;

    ground.material = mirrorMat

    return mirrorTex
}

