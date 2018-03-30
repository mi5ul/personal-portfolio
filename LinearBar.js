// Does not work for some reason
// Can also be included with a regular script tag
// import Typed from "typed.js";

// var options = {
//   strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//   typeSpeed: 40
// }

// var typed = new Typed(".element", options);

function move() {
  var elem = document.getElementById("myBar");
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

move();