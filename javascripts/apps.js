// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var breadChoice= document.getElementById("menu_bread");
var cheeseChoice = document.getElementById("menu_cheese");  //checkboxes
var meatChoice = document.getElementById("menu_meat");  //checkboxes
var condimentChoice = document.getElementById("menu_condiment");  //checkboxes
var veggieChoice = document.getElementById("menu_veggie");  //checkboxes


var checkout = document.getElementById("order_output");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChoice.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var bread = breadChoice.value;
  // selectedTopping = event.target.value;
  var breadPrice = SandwichMaker.addBread(bread);
  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += breadPrice
  console.log("price", finalSandwichPrice.toFixed(2) );
  checkout.innerHTML = finalSandwichPrice.toFixed(2);
});

cheeseChoice.addEventListener("change", function(event) {   //checkbox, so not on change,
  var cheeseSeletor = event.target;
  console.log("cheeseSeletor", cheeseSeletor );
  if(cheeseSeletor .checked) {
      finalSandwichPrice+= SandwichMaker.addCheese(cheeseSeletor.value);
      console.log("cheese selected", cheeseSeletor.value );
  } else {
      finalSandwichPrice-= SandwichMaker.addCheese(cheeseSeletor.value);

    console.log("unselected", cheeseSeletor.value );
  }
    console.log("current price", finalSandwichPrice);
  checkout.innerHTML = finalSandwichPrice.toFixed(2);

});

meatChoice.addEventListener("change", function(event) {   //checkbox, so not on change,
  var meatSeletor = event.target;
  console.log("meatSeletor", meatSeletor );
  if(meatSeletor .checked) {
      finalSandwichPrice+= SandwichMaker.addMeat(meatSeletor.value);
      console.log("meat selected", meatSeletor.value );
  } else {
      finalSandwichPrice-= SandwichMaker.addMeat(meatSeletor.value);

    console.log("unselected", meatSeletor.value );
  }
    console.log("current price", finalSandwichPrice);
  checkout.innerHTML = finalSandwichPrice.toFixed(2);

});

condimentChoice.addEventListener("change", function(event) {   //checkbox, so not on change,
  var condimentSeletor = event.target;
  console.log("condimentSeletor", condimentSeletor );
  if(condimentSeletor .checked) {
      finalSandwichPrice+= SandwichMaker.addCondiment(condimentSeletor.value);
      console.log("condiment selected", condimentSeletor.value );
  } else {
      finalSandwichPrice-= SandwichMaker.addCondiment(condimentSeletor.value);

    console.log("unselected", condimentSeletor.value );
  }
    console.log("current price", finalSandwichPrice);
  checkout.innerHTML = finalSandwichPrice.toFixed(2);

});

veggieChoice.addEventListener("change", function(event) {   //checkbox, so not on change,
  var veggieSeletor = event.target;
  console.log("veggieSeletor", veggieSeletor );
  if(veggieSeletor .checked) {
      finalSandwichPrice+= SandwichMaker.addVeggie(veggieSeletor.value);
      console.log("veggie selected", veggieSeletor.value );
  } else {
      finalSandwichPrice-= SandwichMaker.addVeggie(veggieSeletor.value);

    console.log("unselected", veggieSeletor.value );
  }
    console.log("current price", finalSandwichPrice);
  checkout.innerHTML = finalSandwichPrice.toFixed(2);

});