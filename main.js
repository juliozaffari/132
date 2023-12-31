prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//crie seu modelo e armazene-o na var classifier var
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LJuQ_g2ry/model.json', modelLoaded);
//defina a função modelLoaded
function modelLoaded(){
    console.log('Model Loaded!');
}

//defina função check()
function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }
function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("status").innerHTML = results[0].label;
    }
    }


//defina a função gotResult(error,results)
