var SandwichMaker = (function(maker) {

  var breadTypes = {
    "no_bread": 0.00,
    "white": 2.00,
    "wheat": 2.50,
    "pumpernickel": 2.75,
    "lettuce": 2.00,
    "rye": 8.50
  };             //private vars

  maker.addBread = function(breadChosen) {    //holds value from apps 'bread'
    return breadTypes[breadChosen];
                  // can use ['white'] or []property of SandwhichMaker - a method on SandwichMaker
  }

  return maker;             //returns an object  -cheeseTypes is not added as a property, local scope only

})(SandwichMaker || {});