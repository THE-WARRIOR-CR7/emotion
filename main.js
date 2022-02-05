prediction1="";
prediction2="";
Webcam.set ({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function capture() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image1' src='"+data_uri+"'>";
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bGnncIt2v/model.json",modelLoaded);
function modelLoaded() {
console.log("model has been loaded");
}
function predict() {
    img=document.getElementById("image1");
    classifier.classify(img,gotResult);
}
function gotResult(error,results) {
if (error) {
    console.error(error);
}
else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    prediction1=results[0].label;
    prediction2=results[1].label;
    speak();
    if(results[0].label == "HAPPY") {
        document.getElementById("update_emoji").innerHTML = "&#128522";
    }
    if(results[0].label == "ANGRY") {
        document.getElementById("update_emoji").innerHTML = "&#128548";
        
    }
    if(results[0].label == "SAD") {
        document.getElementById("update_emoji").innerHTML = "&#128532";
        
    }
    if(results[0].label == "CRY") {
        document.getElementById("update_emoji").innerHTML = "&#128546";
        
    }
    if(results[1].label == "HAPPY") {
        document.getElementById("update_emoji2").innerHTML = "&#128522";
    }
    if(results[1].label == "ANGRY") {
        document.getElementById("update_emoji2").innerHTML = "&#128548";
        
    }
    if(results[1].label == "SAD") {
        document.getElementById("update_emoji2").innerHTML = "&#128532";
        
    }
    if(results[1].label == "CRY") {
        document.getElementById("update_emoji2").innerHTML = "&#128546";
        
    }
}
}
function speak() {
    var synth=window.speechSynthesis;
    speakdata_1 ="the first prediction is " + prediction1;
    speakdata_2 ="the second prediction is " + prediction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata_1+speakdata_2);
    synth.speak(utterthis);
} 