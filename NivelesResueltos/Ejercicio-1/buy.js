import products from '../products.json' assert {type : 'json'};

var cart = [];

export function buy(id) {
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