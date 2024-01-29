let comensales = parseInt(prompt("Introduce la cantidad de comensales"));
let papas = comensales * 200;
papas /= 1000;
huevos = papas * 5;
cebolla = papas * 300;

alert(`Son ${comensales} comensales, entonces se necesitan ${papas} kg de papas, ${huevos} huevos y ${cebolla} gramos de cebolla`)