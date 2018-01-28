

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

var files = ["ohhh","short breath","teleported","whohoho","no laugh","dying","how did that happen",
"ran into a wall","very very fast","wwwhat","waiwaiwait","replay through steam","no listen","i have nothing",
"nothing against","factorio","o ohhh","oh that grenade","hes dead","i heard someone walk"]; // put audio files here

window.onload = function() {
  for (i in files) {
    soundboardButton(files[i]);
  }
}
