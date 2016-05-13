var SandwichMaker = (function(maker) {

  var cheeseTypes = {
    "no_cheese": 0.00,
    "american": 0.50,
    "swiss": 0.75,
    "provolone": 0.50,
    "pepperjack": 1.00,
  };             //private vars

  maker.addCheese = function(cheeseChosen) {
    return cheeseTypes[cheeseChosen];   //property of SandwhichMaker - a method on SandwichMaker
  };






  return maker;             //returns an object  -cheeseTypes is not added as a property, local scope only

})(SandwichMaker);