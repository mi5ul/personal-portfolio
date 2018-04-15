import Typed from 'typed.js';
import ProgressBar from 'progressbar.js';

// Typing animation
var options = {
  strings: ["Hello, my name is Mirt", "I am a Web Developer"],
  typeSpeed: 40
}

var typed = new Typed("#typed", options);

// Progress bars animation
const animateProgressBar = (container, pathPercent) => {
  // progressbar.js@1.0.0 version is used
  // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

  var bar = new ProgressBar.Circle(container, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';

  bar.animate(pathPercent);  // Number from 0.0 to 1.0
}

// Select all container to animate the progressbar
const progressbarContainers = [
  ['#container1', 0.8],
  ['#container2', 0.7],
  ['#container3', 0.5]
];

for (let cont of progressbarContainers) {
  animateProgressBar(cont[0], cont[1]);
}
