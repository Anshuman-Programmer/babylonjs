function createColorMaterial(scene, color){
    const mat = new BABYLON.StandardMaterial( "mat", scene);
    mat.diffuseColor = color
    return mat;
}

function createRendomColorMaterial(scene){
    const mat = new BABYLON.StandardMaterial( "mat", scene);
    mat.diffuseColor = generateRendomColor();
    return mat;
}

function generateRendomColor(){
    const value = 100 * Math.random();

    if ( value < 10){ return BABYLON.Color3.Yellow()}
    if ( value < 20){ return BABYLON.Color3.Red()}
    if ( value < 30){ return BABYLON.Color3.Blue()}
    if ( value < 40){ return BABYLON.Color3.Green()}
    if ( value < 50){ return BABYLON.Color3.Green()}
    if ( value < 60){ return BABYLON.Color3.Gray()}
    if ( value < 70){ return new BABYLON.Color3(0.1, 1.0, 0.6)}
    if ( value < 80){ return new BABYLON.Color3(0.5, 0.7, 0.4)}
    if ( value < 90){ return new BABYLON.Color3(0.4, 0.3, 0.8)}
    if ( value < 100){ return new BABYLON.Color3(0.8, 0.3, 0.1)}

    return BABYLON.Color3.Black();
}