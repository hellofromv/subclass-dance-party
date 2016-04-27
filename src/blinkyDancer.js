var makeAnvil = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="anvil" src="anvil.png"/>');
  this.setPosition(null, left);
};

makeAnvil.prototype = Object.create(makeDancer.prototype);

makeAnvil.prototype.constructor = makeAnvil;

makeAnvil.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.animate({
    'top': '1000px'
  }, 'slow');
};