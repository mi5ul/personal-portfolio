import Typed from 'typed.js';
import ProgressBar from 'progressbar.js';

// Typing animation
var options = {
  strings: ["Hello, my name is Mirt", "I am a Web Developer"],
  typeSpeed: 40
}

var typed = new Typed("#typed", options);

// Progress bars animation
var bar = new ProgressBar.Circle(container, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    value: '<i class="fab fa-js"></i>',
    style: {
      color: '#1B213B',
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: 0,
      margin: 0,
      // You can specify styles which will be browser prefixed
      transform: {
        prefix: true,
        value: 'translate(-50%, -50%)'
      }
    },
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);

    // if (value === 0) {
    //   circle.setText('');
    // } else {
    //   circle.setText(value);
    // }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(1.0);  // Number from 0.0 to 1.0
