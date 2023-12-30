import products from '../products.json' assert {type : 'json'};

var carrito = [];

carrito.push(JSON.parse(JSON.stringify({ ...products[0], quantity: 3 })));
carrito.push(JSON.parse(JSON.stringify({ ...products[2], quantity: 10 })));

console.log("Productos con el precio original:", carrito);

var cart = carrito.map(product => ({ ...product }));

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

applyPromotionsCart()

console.log("Productos con descuento anadido:", cart);
