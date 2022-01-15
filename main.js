var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition()

function start() {

    document.getElementById("textbox").innerHTML = ""
    recognition.start()

}

recognition.onresult = function (empty) {
    console.log(empty)

    content = empty.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        speak()
    }

}

function speak() {

    var synth = window.speechSynthesis;

    var speak_data = "Taking your picture in 5 seconds"

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis)

    Webcam.attach(camera)

    setTimeout(function () {

        takeSnapshot()

        save()


    }, 5000)

}

camera = document.getElementById("camera")

Webcam.set({

    width: 340,
    height: 250,
    image_format: "jpeg",
    jpeg_quality: 90

})

function takeSnapshot() {

    Webcam.snap(function (data_uri) {

        document.getElementById("result").innerHTML = "<img id='selfie_img' src=" + data_uri + ">"

    })

}

function save() {

    link = document.getElementById("link")
    image = document.getElementById("selfie_img").src
    link.href = image
    link.click()

}
