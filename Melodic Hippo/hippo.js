const hippo_button = document.getElementById("hippo");
var song = new Audio();
song.src = "Neon%20Disco.mp3";

hippo_button.addEventListener('click', function() {
  console.log("yo");
  song.play();
})
