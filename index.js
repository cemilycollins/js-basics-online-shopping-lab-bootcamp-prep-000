var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {
  itemName: item, 
  itemPrice: Math.floor(Math.random()*100 + 1)
 };
 cart.push(newItem);
 return `${item} has been added to your cart.`;
 // write your code here
}

function viewCart() {
  if(cart.length > 1) {
    var viewCartArray = [];
    for(var i = 0; i < cart.length; i++) {
      viewCartArray.push(` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
    }
    var lastItem = viewCartArray.slice(-1)
    viewCartArray.pop()
    return `In your cart, you have${viewCartArray}, and${lastItem}.`
  } else if(cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  } else {
    return `Your shopping cart is empty.`
  }
  // write your code here
}

function total() {
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + getCart()[i].itemPrice
  }
  return totalPrice
  // write your code here
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if (getCart()[i].itemName === item) {
      getCart().splice(i, 1)
      console.log("found it")
    }
  }
  
  // write your code here
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var subtotal = total()
    cart = []
    return `Your total cost is $${subtotal}, which will be charged to the card ${cardNumber}.`
  }
  // write your code here
}
