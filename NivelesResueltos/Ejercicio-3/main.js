import products from '../products.json' assert {type : 'json'};

var cart = products;
var total = 0;

console.log(cart)

function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = cart.reduce((precio, producto) => precio + producto.price, 0);
    console.log(`El precio total del carrito es de ${total} euros.`)
}

calculateTotal();