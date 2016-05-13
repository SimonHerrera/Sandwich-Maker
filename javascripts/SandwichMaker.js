//SandwichMaker is original module and takes no argument
// Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a Sandwich module, then create the following as individual modules, using IIFE syntax, to augment Sandwich:
var SandwichMaker = (function(maker) {     //org function expression - not an augmentor //must pass if

  // Private variable to store the price
  var totalPrice = 0;                 //private interface

  // Return the public interface that other code can interact with - for eample key: value
// del*return {                    //what is returned is object that is public avail when
// del* addTopping: function(toppingPrice) {    //this is a property on SandwichMaker - addTopping is a function
// del*    totalPrice += toppingPrice;           //property on object, definded by : this is obj we are returning

  //OR

  maker.addTopping = function(toppingPrice) {
      totalPrice += toppingPrice;
  }

  return maker    //cause object we passed it


  // del*   }
  // del* };
// was* })();
})(SandwichMaker || {});                 //()immediately invokes  /first time creating, no need to pass into it
                      // when })(); - this must load first
  //  })(SandwichMaker || {}); creates and passes an empty object that gets something immediately
  // the return part could be made just an augmentor like the other pages and make this to })(SandwichMaker || {});
//differnt scope, stuff must be





//SandwichMaker.addTopping is returned so public


//NOTES - method is a funtion that is defined as a propery on a object