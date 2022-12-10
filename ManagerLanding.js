let menulist = document.querySelector('.menulist')
var foodItems = JSON.parse(localStorage.getItem('foodItems'))

function renderManagerMenu() {
    menulist.innerHTML = "";
    foodItems.forEach((foodItem) => {
        menulist.innerHTML += `
            <div class="menuItem">
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