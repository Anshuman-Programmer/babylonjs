
function createScene(){
    const scene = createBasicSceneArc( {noground: true} )

    // create a paths
    let path0 = [];
    let path1 = [];
    let path2 = [];
    let path3 = [];

    for( let i=0; i<20; i++){
        let x = 20 * i
        let y = 20 * Math.sin(i)
        path0.push(new BABYLON.Vector3(x, y, 0))
        path1.push(new BABYLON.Vector3(x, y, 30))
        path2.push(new BABYLON.Vector3(x, y, 50))
        path3.push(new BABYLON.Vector3(x, y, 60))
    }

    // BABYLON.MeshBuilder.CreateLines( "line", { points:path0 }, scene)

    let ribbon = BABYLON.MeshBuilder.CreateRibbon("",{
        pathArray: [path0, path1, path2, path3],
        sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene)
    ribbon.material = createRendomColorMaterial();
}

