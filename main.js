var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

   setTimeout(function()
    {
        image_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your next Selfie in 3 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 3000);

    setTimeout(function()
    {
        image_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your next Selfie in 8 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 8000);

    setTimeout(function()
    {
        image_id = "selfie3";
        take_snapshot();
        speak_data = "Taking your next Selfie in 13 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 13000);

    var synth = window.speechSynthesis;
    Webcam.attach(camera);
}

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="' +data_uri+'"/>';
        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie1" src="' +data_uri+'"/>';
        }

        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie1" src="' +data_uri+'"/>';
        }
    });
}
