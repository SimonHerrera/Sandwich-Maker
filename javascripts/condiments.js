var SandwichMaker = (function(maker) {      //'maker' defined here - passing in object - var maker = whatever is passed in
                                            //scoped to the function within where defined
                                            //this var is = to what it returns below'maker'


  // Private variable to store the different meat prices
  //add properties to objects with . notation
  var condimentPrices = {
    "no_condiments": 0.00,
    "mayo": 3.00,
    "mustard": 2.00,
    "relish": 39.69
  };

  // Augment the original object with another method
  maker.addCondiment = function(condimentChosen) {          //adding a property here, now had addTopping and addMeat which are functions
    return condimentPrices[condimentChosen];
  };

  // Return the new, augmented object with the new method on it
  return maker;       //here passed on with new info - returning an object
})(SandwichMaker || {});    //this is the org SandwichMake defined back on SandwichMaker.js the var Sandwichpassing a value into the function
//take the org and pass it through so this augmenter adds to this one
//SandwichMaker(SandwichMaker) - defining it and then calling it, line above
//maker does not exist out here