
function createScene(){
    const scene = createBasicSceneArc()

    // create a sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere( "sphere", {
        diameter: 60
    }, scene)
    sphere.material = createRendomColorMaterial();
    sphere.bakeCurrentTransformIntoVertices();
    sphere.position.y = 40;
    sphere.position.x = 200 * Math.sin(Math.PI);
    sphere.position.z = 200 * Math.cos(Math.PI);
    sphere.computeWorldMatrix();

    // Create a trail mesh
    const trail = new BABYLON.TrailMesh( "trail", sphere, scene, 10, 150, true);
    const trailMat = new BABYLON.StandardMaterial( "trailMat", scene)
    trailMat.emissiveColor = BABYLON.Color3.Yellow();
    trailMat.diffuseColor = BABYLON.Color3.Yellow();
    trailMat.specularColor = BABYLON.Color3.Yellow();
    trail.material = trailMat;

    const glayer = new BABYLON.GlowLayer( "glayer", scene)
    glayer.addIncludedOnlyMesh(trail)

    let theta = Math.PI
    scene.registerBeforeRender(() => {
        sphere.position.x = 200 * Math.sin( theta )
        sphere.position.z = 200 * Math.cos( theta )
        theta += 0.03
    })

    // Create 2nd sphere
    const ball = BABYLON.MeshBuilder.CreateSphere( "sphere", {
        diameter: 30
    }, scene)
    ball.material = createRendomColorMaterial();
    ball.bakeCurrentTransformIntoVertices();
    ball.position.y = 40;
    ball.position.x = 300 * Math.sin(Math.PI);
    ball.position.z = 300 * Math.cos(Math.PI);
    ball.computeWorldMatrix();

    // Create trail for ball
    const ballTrail = new BABYLON.TrailMesh( "ballTrail", ball, scene, 5, 60, true);
    const ballTrailMat = new BABYLON.StandardMaterial( "trailMat", scene)
    ballTrailMat.emissiveColor = new BABYLON.Color3(0, 1, 1);
    ballTrailMat.diffuseColor = ballTrailMat.emissiveColor;
    ballTrailMat.specularColor = ballTrailMat.emissiveColor;
    ballTrail.material = ballTrailMat

    let beta = Math.PI;
    let phi = 0.0;
    scene.registerBeforeRender( ()=>{
        ball.position.x = 300 * Math.sin(beta)
        ball.position.z = 300 * Math.cos(beta)

        // ball.position.x += 20 * Math.sin(phi);
        beta += 0.05;
        phi += 0.4;
    })
}

