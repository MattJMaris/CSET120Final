let menulist = document.querySelector('.menulist')
var foodItems = JSON.parse(localStorage.getItem('foodItems'))

function renderManagerMenu() {
    menulist.innerHTML = "";
    foodItems.forEach((foodItem) => {
        menulist.innerHTML += `
            <div class="menulist">
                <div class="categories">
                    <div class="shop-item">
                        <ion-icon class="removeButton" onclick="removeFromMenu(${foodItem.id})" name="close-circle-outline"></ion-icon>
                        <img class="shop-item-image" src="${foodItem.image}" alt="">
                        <h3 class="itemName">${foodItem.name}</h3>
                        <div class="shop-item-details">
                        <span class="shop-item-price">$9.99</span> <br> 
                        <button class="btn btn-primary shop-item-button" type="button">Item back to cart</button>
                        </div>
                    </div>
            <div>
        `;
    });
};
renderManagerMenu() 
function removeFromMenu(id) {
    foodItems = foodItems.filter( (foodItem) => foodItem.id !== id);
    localStorage.setItem("foodItems", JSON.stringify(foodItems));
    renderManagerMenu();
};
// Check if the form has been submitted
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Store the form data in variables
    var addItem = document.querySelector('input[name="add_item"]').value;
    var removeItem = document.querySelector('input[name="remove_item"]').value;
  
    // Check if the user is adding a food item
    if (addItem) {
      // Get the existing menu from local storage
      var menu = localStorage.getItem('foodItems') ? JSON.parse(localStorage.getItem('foodItems')) : [];
  
      // Add the item to the menu
      menu.push(addItem);
  
      // Save the updated menu to local storage
      localStorage.setItem('foodItems', JSON.stringify(menu));
    }
  
    // Check if the user is removing a food item
    if (removeItem) {
      // Get the existing menu from local storage
      var menu = localStorage.getItem('foodItems') ? JSON.parse(localStorage.getItem('foodItems')) : [];
  
      // Remove the item from the menu
      var index = menu.indexOf(removeItem);
      if (index > -1) {
        menu.splice(index, 1);
      }
  
      // Save the updated menu to local storage
      localStorage.setItem('foodItems', JSON.stringify(menu));
    }
  });
  