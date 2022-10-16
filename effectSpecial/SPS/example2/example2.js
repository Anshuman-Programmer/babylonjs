function createScene(){
    const scene = createBasicSceneArc();

    // scene.cameras[0].position = new BABYLON.Vector3(0, 10, -20)

    scene.clearColor = new BABYLON.Color4(0.2, 0.4, 0.8, 0.6)
    
    const sps = new BABYLON.SolidParticleSystem("sps",scene)

    const sph = new BABYLON.MeshBuilder.CreateSphere("sph", {diameter: 15}, scene)
    const box = new BABYLON.MeshBuilder.CreateBox("box", {size: 10}, scene)
    const torus = new BABYLON.MeshBuilder.CreateTorus("torus", {diameter: 15, thickness: 7}, scene)
    const terahedron = new BABYLON.MeshBuilder.CreatePolyhedron("terahedron", {type: 0, size: 10}, scene)
    const octahedron = new BABYLON.MeshBuilder.CreatePolyhedron("octahedron", {type: 1, size: 10}, scene)


    sps.addShape(sph, 1);
    sps.addShape(box, 1);
    sps.addShape(torus, 1);
    sps.addShape(terahedron, 1);
    sps.addShape(octahedron, 1);

    sps.initParticles = () =>{
        for(let i=0; i < sps.nbParticles; i++){
            const particle = sps.particles[i];
            particle.position.x = BABYLON.Scalar.RandomRange(-200, 200);
            particle.position.z = BABYLON.Scalar.RandomRange(-200, 200);
            // particle.position.y = BABYLON.Scalar.RandomRange(10, 410)
            particle.color = new BABYLON.Color3( Math.random(), Math.random(), Math.random())
        
            const amplitude = BABYLON.Scalar.RandomRange(30, 100)
            const angle = BABYLON.Scalar.RandomRange( -Math.PI , Math.PI)
            particle.props = { amplitude: amplitude, angle: angle }
            particle.position.y = 100 + particle.props.amplitude * Math.sin(particle.props.angle)

            // particle.rotation.y = Math.sin(particle.props.angle)
        }
    }

    sps.updateParticle = (particle) => {
        particle.props.angle += Math.PI/100
        particle.position.y = 100 + particle.props.amplitude * Math.sin(particle.props.angle)

        particle.rotation.x = Math.sin(particle.props.angle)*2
        particle.rotation.z = Math.sin(particle.props.angle)
        particle.rotation.y = Math.sin(particle.props.angle)

    }


    const spsMesh = sps.buildMesh();

    sps.initParticles()
    sps.setParticles()

    scene.registerBeforeRender(()=>{
        sps.setParticles();
    })

    sph.dispose();
    box.dispose();
    torus.dispose();
    terahedron.dispose();
    octahedron.dispose();
}

