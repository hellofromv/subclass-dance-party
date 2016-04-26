
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

makeDancer.prototype.step = function(timeBetweenSteps) {
  var context = this;
  setTimeout(context.step.bind(context, timeBetweenSteps), timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


