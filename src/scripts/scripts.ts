function prueba(num: string, num2?: number) {
  num.substring(1, 2);
}

prueba("sasasd", 121231);
prueba("asas");

const arreglo_de_meses_del_ano = [
  "Enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const num = 5 + (4 - 32) * 4;
// const asdasd = bfefr;

/**
 * DESCRIPCION Esta funcion regresa valores del 0 al 100 al azar
 * @param {number} ini PARAMETROS Representa desde donde agarrar numeros
 * @param {string} fin Representa el final de los numeros al azar
 * @returns REGRESA un valor al azar
 */
function random(ini, fin) {
  return Math.random() * 100;
}

// recomendaciones de TypeScript, pero en JS no son necesarias
random("", 3);

export {};