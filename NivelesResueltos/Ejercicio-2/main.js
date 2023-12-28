import { buy } from '../Ejercicio-1/buy.js';

const product1 = buy(1);
const product2 = buy(2);
const product3 = buy(3);
const product4 = buy(4);

var products = [product1, product2, product3, product4];
console.log("Productos añadidos:", products);

products = [];
console.log("Productos después de vaciar:", products);