/**
 * Esta es una funcion que nada regresa el numero 1
 * @returns regresa el 1
 */
export function getNum() {
  return 1;
}

/**
 * Esta funcion es la importada del otro lado
 * @param {any} ini
 * @param {*} fin
 * @returns
 */
export function random(ini, fin) {
  return Math.random() * 100;
}

export const meses = [
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
