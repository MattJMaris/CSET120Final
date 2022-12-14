let menuitem = document.getElementsByClassName('menuitem')[0];
var foodItems = JSON.parse(localStorage.getItem('foodItems'));

let cart_items = document.getElementsByClassName("cart-items")[0]

function renderManagerMenu() {
    // Clear the menuitem element
    menuitem.innerHTML = "";

    // Iterate through the food items
    foodItems.forEach((foodItem) => {
        // Create a new div element for the food item
        let div = document.createElement('div');
        div.classList.add('menulist');

        // Add the food item details to the div element
        div.innerHTML = `
            <div class="categories">
                <div class="shop-item">
                    <img class="shop-item-image" src="${foodItem.image}" alt="">
                    <h3 class="itemName">${foodItem.name}</h3>  
                    <div class="shop-item-details">
                    <span class="shop-item-price">${foodItem.price}</span> <br> 
                    <button class="btn btn-primary shop-item-button" onclick="AddtoCart(this)" type="button">Add Item to Cart</button>
                    </div>
                </div>
            </div>
        `;

        // Append the div to the menuitem element
        menuitem.appendChild(div);
    });
};

// Call the renderManagerMenu function to display the food items on the page
renderManagerMenu();

var foodItems = JSON.parse(localStorage.getItem('foodItems'))

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', onStart)
} else {
    onStart()
}

function onStart() {
    var removeCartItems = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItems.length; i++) {
        var button = removeCartItems[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function purchaseClicked() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}




function AddtoCart(button) {
    var checkItem = JSON.parse(localStorage.getItem("everythingitem"));console.log(checkItem);
    if (checkItem == null) checkItem = []; console.log("test");
    let item = button.parentElement.parentElement;
    let title = item.getElementsByClassName("itemName")[0].innerHTML
    let image = item.getElementsByClassName("shop-item-image")[0]
    let price = item.getElementsByClassName("shop-item-price")[0].innerHTML
    var itemEverything = {
        'title':title, 
        'image':image, 
        'price':price
    };
    let e = item.cloneNode(true)
    cart_items.appendChild(e)
    console.log("yeeee")
    //localStorage.setItem("itemEverything", JSON.stringify(itemEverything));
    checkItem.push(itemEverything);
    localStorage.setItem("everythingitem", JSON.stringify(checkItem));
}



function loadCart(cart) {
    localStorage.getItem(everythingitem);
    for (let i = 0; i <everythingitem.length; i++) {
        let everythingitem = localStorage.itemEverything(i);
        let checkItem = localStorage.getItem(everythingitem);
    }
}




function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

var cartRow = [];
localStorage.setItem("cartRow", JSON.stringify(cartRow));
var retrievedCart = localStorage.getItem('cartRow');
console.log('retrievedCart: ', JSON.parse(retrievedCart));


var testObject = { 'one': 1, 'two': 2, 'three': 3 };
localStorage.setItem('testObject', JSON.stringify(testObject));
var retrievedObject = localStorage.getItem('testObject');
console.log('retrievedObject: ', JSON.parse(retrievedObject));

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}


var shopcart = localStorage.getItem("everythingitem")
for (let i = 0; i < shopcart.length; i++) {
    
    let shopItem = document.getElementsByClassName("template")[0]
    let cloneditem = shopItem.CloneNode(true)

    let img = shopItem.children[0]
    let name = shopItem.children[1]
    let price = shopItem.children[2]
    let quantity = shopItem.children[3]

    name.textContent = shopcart.title
    

  }

