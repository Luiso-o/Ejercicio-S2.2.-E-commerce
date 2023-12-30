// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
import products from './products.json' assert {type: 'json'};

for (let product of products) {
    console.log(product);
}

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    var productToAdd = products.find(product => product.id === id);

    if (productToAdd) {
        var existingProductIndex = cart.findIndex(item => item.id === id);

        // 2. Add found product to the cart array
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity++;
            console.log(`Se ha incrementado la cantidad de ${productToAdd.name} en el carrito.`);

        } else {
            cart.push({ ...productToAdd, quantity: 1 });
            console.log(`Se ha añadido ${productToAdd.name} al carrito.`);
        }

        console.log("Carrito actual:", cart);

    } else {
        console.log(`Producto con ID ${id} no encontrado.`);
      }

}

//buy(1);
//buy(1);
//buy(1);

// Exercise 2
function cleanCart() {
 cart = []
 console.log("Carrito actual: ", cart);
}

//cleanCart();

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = cart.reduce((precio, producto) => precio + producto.price * producto.quantity, 0);
    console.log(`El precio total del carrito es de ${total} euros.`)
}

calculateTotal();

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach(product => {
        if (product.id === 1 && product.quantity >= 3) {
            product.price *= 0.80;

        } else if (product.id === 3 && product.quantity >= 10) {
            product.price *= 0.70;
        }
    });
}

//applyPromotionsCart();
//calculateTotal();

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}