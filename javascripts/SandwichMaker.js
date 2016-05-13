//SandwichMaker is original module and takes no argument
// Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a Sandwich module, then create the following as individual modules, using IIFE syntax, to augment Sandwich:
var SandwichMaker = (function() {     //org function expression - not an augmentor

  // Private variable to store the price
  var totalPrice = 0;                 //private interface

  // Return the public interface that other code can interact with
  return {                            //what is returned is public avail when
    addTopping: function(toppingPrice) {    //this is a property on SandwichMaker - addTopping is a function
      totalPrice += toppingPrice;           //property on object, definded by : this is obj we are returning
    }
  };
})();                 //()immediately invokes
//differnt scope, stuff must be





//SandwichMaker.addTopping is returned so public


//NOTES - method is a funtion that is defined as a propery on a object