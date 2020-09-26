var photo = ["Images/Mahbub.jpg", "Images/Milton.jpg", "Images/Mil.jpg"]; //Array
var ImgTag = document.querySelector("img");
var count = 0;

function next() {
    count++


    if (count >= photo.length) { //for next
        count = 0;
        ImgTag.src = photo[count];
    } else {
        ImgTag.src = photo[count];
    }
}

function prev() { //for previous               
    count--


    if (count < 0) {
        count = photo.length - 1;
        ImgTag.src = photo[count];
    } else {
        ImgTag.src = photo[count];
    }
}