var txtInput = document.querySelector("#textAreaToTranslate");

var btnTranslate = document.getElementById("translateBtn");

btnTranslate.addEventListener("click", clickHandler);
function clickHandler() {
  console.log(" clicked ! ");
  console.log(" input ", txtInput.value);
}
