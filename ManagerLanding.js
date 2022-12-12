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
const addNewMenuItemBtn = document.getElementById('addNewMenuItem');
addNewMenuItemBtn.addEventListener('click', () => {
    const name = document.getElementById('newItemName').value;
    const price = document.getElementById('newItemPrice').value;
    const description = document.getElementById('newItemDescription').value;
    const image = document.getElementById('newItemImg').value;
    const calories = document.getElementById('newItemCalories').value;
    const id = document.getElementById('newItemId').value;
    const id1 = parseInt(id)
    for(let i = 0; i < foodItems.length; i++) {
        if(foodItems[i].name === name) {
            alert('Item already exists');
            return;
        }
    }

  