//Grabs the items from Products.JSON. The 'fetch' method returns a promise.
// The 'then' method returns that promise as a response.
//A second promise is made with the return response.json().

//This fulfills the previous promise as a response.
//Stores the items as a string data type.
//Creates an array for the 'cart' and checks if the cart exists.
//If the cart doesn't exist, it will create a cart.

fetch("products.json")
.then(function(response){
   return response.json();
})
.then(function(data){
   localStorage.setItem("products", JSON.stringify(data));
   if(!localStorage.getItem("cart")){
      localStorage.setItem("cart", "[]");
   }
});

//Global Variables to Access From Inside the Function
let product = JSON.parse(localStorage.getItem("product"));
let cart = JSON.parse(localStorage.getItem("cart"));


//Adds a product to the cart
//Finds the product id to match it with out 'productID and if found, 
//will be stored in the product variable

//If no products are in the cart, a product will be added
//The else statement checks for the product in the cart and if it exists
//the product will be stored in the res variable, otherwise it will return
//undefined
//The 'if' statement will see the undefined item and add it to the cart.

//Sets the cart back in the localStorage and overrides the old values
//with new values ones

function addItemToCart(productId){
    let product = product.find(function(item){
       return item.id == productId;
    });
  
    if(cart.length == 0){
       cart.push(product);
    }else{
       let res = cart.find(element => element.id == productId);
       if(res === undefined){
          cart.push(product);
       }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
 }
 addItemToCart(1);

//Remove Products from the Cart

function removeItemFromCart(productId){
    let tempCart = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(tempCart));
 }
 removeItemFromCart(1);

//Update Function for Product Quantity

function updateQuantity(productId, quantity){
    for(let product of cart){
       if(product.id == productId){
          product.quantity = quantity;
       }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
 }
 updateQuantity(1, 8);

//Get Cart Total Price

function getTotal() {
    let tempCart = cart.map(function(item) {
        return parseFloat(item.price);
    });

    let sum = tempCart.reduce(function(prev, next) {
        return prev + next;
    }, 0);

    console.log(sum);
}

getTotal(0);