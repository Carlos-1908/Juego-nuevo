let precio = parseInt(prompt("Introduce el precio del producto"));
let iva = 21;
let subtotal = (precio * iva) / 100;
let total = precio + subtotal;

alert(`Tu total a pagar es de ${total}`);

