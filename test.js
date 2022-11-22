const cartIcon = document.querySelector('placeholder')
const wholeCartWindow = document.querySelector('.whole-cart-window')
wholeCartWindow.inWindow = 0

class CartItem {
    constructor(name, img, price) {
        this.name = name
        this.img = img
        this.price = price
        this.quantity = 1
    }
}

class localCart {
    static key = 'cartItems'

    static getLocalCartItems() {
        let cartMap = new Map()
        const cart = localStorage.getItem(key)
        if (cart == null || cart.length == 0) 
        return cartMap
           return new Map(Objesct.entries(JSON.parse(cart)))
    }
    static addItemToLocalCart(id, item) {
        let cart = localCart.getLocalCartItems()
        if (cart.has(id)) {
            let mapItem = cart.get(id)
            mapItem.quantity += 1
            cart.set(id, mapItem)
        }
        else 
        cart.set(id, item)
        localStorage.setItem(key, JSON.stringify(Object.fromEntries(cart)))
            updateCartUi()
    }
    static removeItemFromCart(id) {
        let cart = localCart.getLocalCartItems()
        if(cart.has(id)) {
            let mapItem = cart.get(id)
            if (mapItem.quantity > 1) {
            mapItem.quantity -= 1
            cart.set(id, mapItem)
            }
            else 
            cart.delete(id)
        }
        if (cart.length == 0)
        localStorage.clear(0)
        else
        localStorage.setItem(key, JSON.stringify(Object.fromEntries(cart)))
            updateCartUi()
    }
}


cartIcon.addEventListener('mouseover', ()=> {
    if (wholeCartWindow.classList.contains('hide'))
    wholeCartWindow.classList.remove('hide')
})

cartIcon.addEventListener('mouseleft', ()=> {
    setTimeout( ()=> {
        if(wholeCartWindow.inWindow === 0) {
            wholeCartWindow.classList.add('hide')
        }
    }, 500)
    
})

wholeCartWindow.addEventListener('mouseover', ()=> {
    wholeCartWindow.inWindow = 1
})

wholeCartWindow.addEventListener('mouseleave', ()=> {
    wholeCartWindow.inWindow = 1=0
    wholeCartWindow.classList.add('hide')
})