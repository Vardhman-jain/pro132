img="";
status=''

function preload() {
    img=loadImage(fruit_basket.jpg)
}

function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById(status).innerHTML= "Status: Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!")
    status= true;
}
function gotResults(error, results) {
    if(error){
        console.log(error);
    }else{
        console.log(results);
    }
}