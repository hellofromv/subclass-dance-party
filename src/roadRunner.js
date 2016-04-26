var makeRoadRunner = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // $('.dancer').addClass('roadRunner');
  console.log(this);
};

makeRoadRunner.prototype = Object.create(makeDancer.prototype);

makeRoadRunner.prototype.constructor = makeRoadRunner;

makeRoadRunner.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
};


// split function
// on click
// function will check dancer class
// all dancers will go left or right depending if they are roadRunner or coyote
// create divs on left & right side to append the dancers


// on click event handler to add img (OUCH)
// take anvil img
// put it in random spot on top of screen
// then make it fall

// on click event handler to add img (ROADRUNNER)
// loop through array of roadrunner imgs (Math.random will choose which img)
// take that img & make it appear on random spot
// moves in a blinking motion

// on click event handler to add img (WILE E COYOTE)
// loop through array of coyote imgs
// put img & set it to random spot on screen
// animate it to run l/r & u/d ==> have a count var to determine direction if odd or even # of coyotes

// on click of coyote img
// drop an anvil on him

// on mouseover of roadrunner
// maybe toggle img to a meep meep roadrunner