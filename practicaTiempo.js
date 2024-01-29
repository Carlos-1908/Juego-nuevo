let horas =  parseInt(prompt("Introduce las horas"));
let minutos = parseInt(prompt("Intoduce los minutos"));
let segundos = ((horas * 60)*60) + (minutos * 60);

alert(`El tiempo es segundos es ${segundos} segundos`);