$(function(){
  Foundation.global.namespace = '';
  $(document).foundation({
    accordion: {
      // allow multiple accordion panels to be active at the same time
      multi_expand: true,
      // allow accordion panels to be closed by clicking on their headers
      // setting to false only closes accordion panels when another is opened
      toggleable: true
    },

    orbit: {
      animation: 'slide', // Sets the type of animation used for transitioning between slides, can also be 'fade'
      timer_speed: 10000, // Sets the amount of time in milliseconds before transitioning a slide
      pause_on_hover: false, // Pauses on the current slide while hovering
      next_on_click: false, // Advance to next slide on click
      //animation_speed: 500, // Sets the amount of time in milliseconds the transition between slides will last
      stack_on_small: false,
      navigation_arrows: true,
      slide_number: false,
      bullets: true, // Does the slider have bullets visible?
      //circular: true, // Does the slider should go to the first slide after showing the last?
      timer: true, // Does the slider have a timer active? Setting to false disables the timer.
      variable_height: false, // Does the slider have variable height content?
      swipe: true
    }
  });
});
