## Comercio Electrónico

* Una empresa del sector de comercio electrónico nos ha solicitado una aplicación web que le permita ofrecer la compra de sus productos a través de internet.

* Serás el encargado/encargada de montar una versión inicial de demostración de la aplicación para el cliente: gestión del carrito de la compra y aplicación de promociones sobre el precio final.

### Notas:

* Tienes las siguientes indicaciones del responsable front-end:

- Dispones de la base del <a href = "github.com/IT-Academy-BCN/starter-code-frontend-shop">proyecto sobre la cual trabajar</a>, para que puedas centrarte en programar la lógica:

- Como por el momento no consumimos datos de un servidor usando una API, trabajaremos con datos hardcodeados en la aplicación. Por ahora, implementaremos la lógica utilizando un pequeño grupo de 9 productos divididos en 3 secciones.

- La lógica a implementar la deberás colocar en el archivo src/shop.js y src/checkout.js. Verás que ya se han creado las funciones vacías con el objetivo de que las vayas llenando.

- El itinerario está planteado para empezar a utilizar ES6 o superior en el siguiente sprint, pero si ya lo conoces, puedes utilizarlo en este sprint.

- Te recomendamos debatir los ejercicios con tus compañeros y compañeras, pedir su ayuda o, mejor aún, ayudar a los demás, ya que está demostrado que cuando enseñas algo es cuando mejor se aprende.

### Información de los datos a manipular:

* Se trata de un array de 9 productos. Cada elemento del array es un objeto que contiene la información de cada producto del comercio electrónico. A continuación se muestra un ejemplo de un producto:

```json
{
  "id": 1,
  "name": "aceite de cocina",
  "price": 10.5,
  "type": "comestibles"
}
```

* Estos datos del array "products" no se deben modificar.
