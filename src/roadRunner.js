var makeRoadRunner = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  var randomRRPictures = ['roadrunner-1.png', 'roadrunner-2.gif', 'roadrunner-3.gif'];
  var randomPicture = Math.floor(Math.random() * randomRRPictures.length);
  this.$node = $('<img class="roadRunner" src="' + randomRRPictures[randomPicture] + '"/>');
  this.setPosition(top, left);
};

makeRoadRunner.prototype = Object.create(makeDancer.prototype);

makeRoadRunner.prototype.constructor = makeRoadRunner;

makeRoadRunner.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};

makeRoadRunner.prototype.setPosition = function(top, left) {
  makeDancer.prototype.setPosition.call(this, top, left);
};




// split function
// on click
// function will check dancer class
// all dancers will go left or right depending if they are roadRunner or coyote
// create divs on left & right side to append the dancers

//find all types of one kind through classes
//make all their left/right properties equal zero
//iterate through them and make their top properties be relative to their size


// on click event handler to add img (OUCH)
// take anvil img
// put it in random spot on top of screen
// then make it fall





// on click of coyote img
// drop an anvil on him

// on mouseover of roadrunner
// maybe toggle img to a meep meep roadrunner

