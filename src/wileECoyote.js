var makeWileECoyote = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  var randomRRPictures = ['coyote-1.gif', 'coyote-2.gif', 'coyote-help1.png'];
  var randomPicture = Math.floor(Math.random() * randomRRPictures.length);
  this.$node = $('<img class="coyote" src="' + randomRRPictures[randomPicture] + '"/>');
  var context = this.$node;
  if (randomPicture === 2) {
    context.mouseenter(function(){
      context.animate({
        'left': '9%',
        'top': '2%',
        'height': '100%',
        'width': '100%'
      }, 1000);
    });
    context.mouseleave(function() {
      context.css({
        'height': '100px',
        'width': '150px',
        'position': 'absolute'
      });
    });
  }
  this.setPosition(top, left);
};

makeWileECoyote.prototype = Object.create(makeDancer.prototype);

makeWileECoyote.prototype.constructor = makeWileECoyote;

makeWileECoyote.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  var context = this.$node;
  
  var coyoteDance = function () {
    context.animate({
      'left': '-=200px',
    }, 'slow');
    context.animate({
      'left': '+=200px'
    }, 'slow');
  };

  setTimeout(function() {
    coyoteDance();
  }, 500);

};

makeWileECoyote.prototype.setPosition = function(top, left) {
  makeDancer.prototype.setPosition.call(this, top, left);
};