
function createScene(){
    const scene = createBasicSceneArc()

    let dude = null;
    let skeleton = null;

    const assetManager = new BABYLON.AssetsManager(scene);

    const meshtask = assetManager.addMeshTask("task1", "", "/assets/dude/", "dude.babylon");
    meshtask.onSuccess = function(result){
        dude = result.loadedMeshes[0];
        skeleton = result.loadedSkeletons[0];

        dude.scaling = new BABYLON.Vector3( 3, 3, 3)
        skeleton.scaling = new BABYLON.Vector3( 3, 3, 3)

        dude.position.x = 300;
        dude.rotation.y = Math.PI;

        scene.beginAnimation(skeleton, 0, 100, true, 1.0)

        let theta = 0.0

        scene.registerBeforeRender( ()=>{
            dude.position.x = 300*Math.cos(theta)
            dude.position.z = 300*Math.sin(theta)
            dude.rotation.y -= 0.005
            theta += 0.005
        })
    }

    meshtask.onError = function(err){
        console.error(err)
    }
    assetManager.load()
}

