// audio

for (var i = 0; i <= 3; i++) {

    document.querySelectorAll(".myButton")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        document.write(text);


        audioPlay(text);
        //playAnimation(text);

    });
}

document.addEventListener("Keypress", function(event) {
    var text = event.key;

    audioPlay(text);
    //playAnimation(text);

});


function audioPlay(text) {


    switch (text) {
        case "a":
            var audio = new Audio("Audio/a.mp3");
            audio.play();
            break;


        case "b":
            var audio = new Audio("Audio/b.mp3");
            audio.play();
            break;



        case "c":
            var audio = new Audio("Audio/c.mp3");
            audio.play();
            break;
    }


}

/*function playAnimation(text) {

    var selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("anim");
}
*/