

function soundboardButton(fileName) {
  var x = document.createElement("input");
  x.type = "button";
  x.value = fileName;
  x.addEventListener("click", function() {
    var snd = new Audio("sounds/" + fileName + ".mp3");
    snd.play();
    console.log("hi");
  });
  document.body.appendChild(x);
}

var files = ["ohhh","short breath","teleported","whohoho","no laugh"]; // put audio files here

window.onload = function() {
  for (i in files) {
    soundboardButton(files[i]);
  }
}
