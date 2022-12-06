//Grabs the items from Products.JSON. The 'fetch' method returns a promise.
// The 'then' method returns that promise as a response.
//A second promise is made with the return response.json().

fetch("Products.JSON")
.then(function(response) {
    return response.json();
})


//This fulfills the previous promise as a response.
//Stores the items as a string data type.
//Creates an array for the 'cart' and checks if the cart exists.
//If the cart doesn't exist, it will create a cart.

.then(function(data) {
    localStorage.setItem("products", JSON.stringify(data));
    if (!localStorage.getItem("shopCart")) {
        localStorage.setItem("shopCart", "[]");
    }
});

//Global Variables From Inside the Function

//Holds all the products from localStorage
let products = JSON.parse(localStorage.getItem("products"));
//Holds all the product values stored in the cart
let cart = JSON.parse(localStorage,getItem("shopCart"));

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

function addItemToCart(productID) {
    let product = products.find(function(product) {
        return product.id == productID;
    });
    if(shopCart.length == 0) {
        shopCart.push(product);
    } else {
        let res = shopCart.find(element => element.id == productID)
        if (res === undefined) {
            shopCart.push(product);
        }
    }
    localStorage.setItem("shopCart", JSON.stringify(shopCart));
}

addItemToCart(1);