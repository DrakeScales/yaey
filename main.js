Webcam.set({
    height: 300,
    width:300 ,
    image_format:'png',
    png_quality:90
})

camera = document.getElementById("camera")

Webcam.attach(camera);

function take_snapshot(data_uri){

    Webcam.snap(function(data_uri)
   { document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>";

   })};
console.log('ml5version:',ml5.version)

classifier = ml5.imageClassifier(" https://teachablemachine.withgoogle.com/models/2YcdDkjE_/model.json",modelLoaded)

function modelLoaded(){
    console.log('Model Loaded')
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotresult);
}

prediction_1 =""
prediction_2 =""

function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is "+prediction_1;
    speak_data2 = "and the second prediction is "+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    utterThis.rate = 0.5;
    synth.speak(utterThis)
}

function gotresult(error, results){
    if(error){
        console.log(error);
    } else{
        console.log(results);
        document.getElementById("result_Hand_Gesture_Name_1").innerHTML = results [0].label;
       document.getElementById("result_Hand_Gesture_Name_2").innerHTML = results [1].label;
       prediction_1 = results [0].label;
       prediction_2 = results [1].label;
        speak();
       if(results[0].label == "Victory"){
         document.getElementById("update_emoji_1").innerHTML = "&#9996;";}
       if(results[0].label == "Best"){
         document.getElementById("update_emoji_1").innerHTML = "&#128077;";}
       if(results[0].label == "Amazing"){
         document.getElementById("update_emoji_1").innerHTML = "&#128076;";}
        if(results[0].label == "You Rock!"){
            document.getElementById("update_emoji_1").innerHTML = "&#129304;";}
      if(results[0].label == "Hi"){
                document.getElementById("update_emoji_1").innerHTML = "&#128075;";}


         if(results[1].label == "Victory"){
         document.getElementById("update_emoji_2").innerHTML = "&#9996;";}
       if(results[1].label == "Best"){
         document.getElementById("update_emoji_2").innerHTML = "&#128077;";}
       if(results[1].label == "Amazing"){
         document.getElementById("update_emoji_2").innerHTML = "&#128076;";}
         if(results[1].label == "You Rock!"){
            document.getElementById("update_emoji_2").innerHTML = "&#129304;";}
            if(results[1].label == "Hi"){
                document.getElementById("update_emoji_2").innerHTML = "&#128075;";}
       
    }
}