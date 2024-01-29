let numero = parseInt(prompt("Introduce un numero de dos digitos"));
let unidades = numero%10;
let decenas = parseInt(numero / 10);
alert(`Las decenas son ${decenas} y las unidades son ${unidades}`);