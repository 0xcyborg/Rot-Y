const Element = document.querySelector(".html5-video-player .video-click-tracking, .html5-video-player .video-stream");

function Set(Value){
    if(isNaN(Number(Value))) return;
    Element.style.rotate = Value + "deg";
}

document.addEventListener('keyup', event => {
    if (event.code === 'NumpadMultiply') {
        Input = prompt("Enter Degree");
        Set(Input);
    }
})