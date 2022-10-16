const createBasicSceneArc = (options) => {

        options = options ? options : {}
       
        // Step 1 - create engine
       const canvas = document.getElementById( "canvas" );
       const engine = new BABYLON.Engine(canvas, true)

       // Step 2 - create the world as a scene
       const scene = new BABYLON.Scene(engine)

       // Create a light
       if(!options.nolight){
        const light = new BABYLON.DirectionalLight( "light1", new BABYLON.Vector3(-5, -5, -5), scene);
        light.diffuse = new BABYLON.Color3(1, 1, 1);
        light.specular = new BABYLON.Color3(0, 0, 0);
       }
       
       // Create a camera
        const camera = new BABYLON.ArcRotateCamera( "camera1",-Math.PI/2, Math.PI/4, 800, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas);   

       // Create a ground
       if(!options.noground){
        const ground = BABYLON.MeshBuilder.CreateGround( "ground1", { width:1200, height:1200}, scene);
       }
       // Step 4 - Display the scene
       engine.runRenderLoop( function(){
           scene.render();
       })

       return scene;
}