function createScene(){
    const scene = createBasicSceneArc({noground: true});

    sunFunc(scene);

    const earth = earthFunc(scene);

    const moon = moonFunc(scene, earth);

    const mercury = mercuryFunc(scene);

    const venus = venusFunc(scene);

    const mars = marsFunc(scene);

    const jupiter = BABYLON.MeshBuilder.CreateSphere("sphere", {
        diameter: 40
    }, scene);
    jupiter.position.y = 40;
    jupiter.position.x = 300 * Math.sin(Math.PI);
    jupiter.position.z = 300 * Math.cos(Math.PI);

    const jupiterSurface = new BABYLON.StandardMaterial("jupiterSurface", scene);
    jupiterSurface.diffuseTexture = new BABYLON.Texture("/assets/images/assignment/jupiter.jpg");

    jupiter.material = jupiterSurface;

    

    let theta = Math.PI 
    let mthata = Math.PI
    let vthata = Math.PI
    let mathata = Math.PI
    let juthata = Math.PI

    scene.registerBeforeRender(() => {
        earth.position.x = 200 * Math.sin( theta )
        earth.position.z = 200 * Math.cos( theta )

        moon.position.x = 20 * Math.sin(theta);
        moon.position.z = 20 * Math.cos(theta);

        mercury.position.x = 100 * Math.sin( mthata )
        mercury.position.z = 100 * Math.cos( mthata )

        venus.position.x = 130 * Math.sin( vthata )
        venus.position.z = 130 * Math.cos( vthata )

        mars.position.x = 240 * Math.sin( mathata )
        mars.position.z = 240 * Math.cos( mathata )

        jupiter.position.x = 300 * Math.sin( juthata )
        jupiter.position.z = 300 * Math.cos( juthata )

        theta += 0.01
        mthata += 0.02
        vthata += 0.023
        mathata += 0.008
        juthata += 0.005

        earth.rotation.y += 0.03

        moon.position.x = 20 * Math.sin(theta);
        moon.position.z = 20 * Math.cos(theta);

    })
}

function marsFunc(scene) {
    const mars = BABYLON.MeshBuilder.CreateSphere("sphere", {
        diameter: 18
    }, scene);
    mars.position.y = 40;
    mars.position.x = 240 * Math.sin(Math.PI);
    mars.position.z = 240 * Math.cos(Math.PI);

    const marsSurface = new BABYLON.StandardMaterial("marsSurface", scene);
    marsSurface.diffuseTexture = new BABYLON.Texture("/assets/images/assignment/mars.png");

    mars.material = marsSurface;
    return mars;
}

function venusFunc(scene) {
    const venus = BABYLON.MeshBuilder.CreateSphere("sphere", {
        diameter: 15
    }, scene);
    venus.position.y = 40;
    venus.position.x = 150 * Math.sin(Math.PI);
    venus.position.z = 150 * Math.cos(Math.PI);

    const venusSurface = new BABYLON.StandardMaterial("venusSurface", scene);
    venusSurface.diffuseTexture = new BABYLON.Texture("/assets/images/assignment/venus.jpg");

    venus.material = venusSurface;
    return venus;
}

function mercuryFunc(scene) {
    const mercury = BABYLON.MeshBuilder.CreateSphere("sphere", {
        diameter: 10
    }, scene);
    mercury.position.y = 40;
    mercury.position.x = 100 * Math.sin(Math.PI);
    mercury.position.z = 100 * Math.cos(Math.PI);

    const mercurySurface = new BABYLON.StandardMaterial("mercurySurface", scene);
    mercurySurface.diffuseTexture = new BABYLON.Texture("/assets/images/assignment/mercury.jpg");

    mercury.material = mercurySurface;
    return mercury;
}

function moonFunc(scene, earth) {
    const moon = BABYLON.MeshBuilder.CreateSphere("sphere", {
        diameter: 5
    }, scene);
    moon.parent = earth;
    moon.position.x = 20 * Math.sin(Math.PI);
    moon.position.z = 20 * Math.cos(Math.PI);

    const moonSurface = new BABYLON.StandardMaterial("moonSurface", scene);
    moonSurface.diffuseTexture = new BABYLON.Texture("/assets/images/assignment/moon.jpg");

    moon.material = moonSurface;
    return moon;
}

function earthFunc(scene) {
    const earth = BABYLON.MeshBuilder.CreateSphere("sphere", {
        diameter: 20
    }, scene);
    earth.position.y = 40;
    earth.position.x = 200 * Math.sin(Math.PI);
    earth.position.z = 200 * Math.cos(Math.PI);

    const earthSurface = new BABYLON.StandardMaterial("earthSurface", scene);
    earthSurface.diffuseTexture = new BABYLON.Texture("/assets/images/assignment/earth.jpg");

    earth.material = earthSurface;
    return earth;
}

function sunFunc(scene) {
    const sun = BABYLON.MeshBuilder.CreateSphere("sun", {
        diameter: 50
    }, scene);


    //The sun    
    const sunMat = new BABYLON.StandardMaterial("sunMat", scene);
    sunMat.emissiveColor = BABYLON.Color3.Yellow();
    sunMat.diffuseColor = BABYLON.Color3.Yellow();
    sunMat.specularColor = BABYLON.Color3.Yellow();
    sun.material = sunMat;

    // Emissive material
    const sunLayer = new BABYLON.GlowLayer("sunLayer", scene);
    sunLayer.addIncludedOnlyMesh(sun);
    sunLayer.intensity = 1;
}
