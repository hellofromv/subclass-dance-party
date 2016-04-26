var makeWileECoyote = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeWileECoyote.prototype = Object.create(makeDancer.prototype);

makeWileECoyote.prototype.constructor = makeWileECoyote;

makeWileECoyote.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
};