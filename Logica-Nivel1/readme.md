## Ejercicio 1
* En primer lugar, dado que se trata de un comercio electrónico, haremos que el usuario pueda añadir productos al carrito.

* La función que necesitas completar se llama `buy()`, que recibe el identificador del producto a añadir. Debes localizar el producto utilizando este identificador recibido en el array `products`, para luego incluirlo en el array `cart`.

* Los botones que deben activar la función `buy()` son los de color azul que se encuentran en cada producto.

* Para cada producto que se desea añadir al carrito, debemos validar si ya se ha añadido previamente, formando parte del array `cart`:

- Si no existe, lo añadimos al array `cart` (ten cuidado de no olvidar añadir la propiedad `quantity` con valor 1 al producto antes de hacer push). 
- Si, en cambio, este producto ya se encuentra en el carrito, deberemos incrementar el campo `quantity` de este producto en el carrito.