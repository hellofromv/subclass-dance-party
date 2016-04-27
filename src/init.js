$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    //window.dancers.push(dancer.$node);
  });

  $('.line').on('click', function(event) {
    event.stopPropagation();
    $('.roadRunner').animate({
      'left': '85%',
    });
    $('.coyote').animate({
      'left': '15%'
    });
  }); 
  
  var playMusic = function () {
    $('#music')[0].volume = 0.7;
    $('#music')[0].load();
    $('#music')[0].play();
  };
  playMusic();

  setTimeout(function() {
    playMusic();
  }, 35000);

  var killCoyote = function() {
    var $anvil = $('.anvil').position();
    var $coyote = $('.coyote').position();
    if ($anvil.left + 100 <= $coyote.left || $anvil.left - 100 <= $coyote.left) {
      $('.coyote').remove();
    }
  };

  killCoyote();

});



