const Element = document.querySelector(".video-stream");

function Set(Value){
  Value = Number(Value);
  Condition = !isNaN(Value);
  if(Condition) Element.style.rotate = Value + "deg";
}

document.addEventListener('keyup', event => {
  if(event.code === 'NumpadMultiply'){
    Input = prompt("Enter Degree");
    Set(Input);
  }
})
