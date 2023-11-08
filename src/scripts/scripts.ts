/**
 * Permite limitar un número entre un máximo y un mínimo. 
 * @param number De tipo number, es el número al que se le impondra los limites
 * @param max De tipo number, valor del limite máximo
 * @param min De tipo number, valor del limite mínimo
 * @param wrap De tipo boolean, especifica si un límite salta hasta el otro lado, o no.
 * 
 */
function boundaries(number: number, max?: number, min?: number, wrap?: boolean){
  if(min === undefined){
    min=number;
  }
  if(max === undefined){
    max=number;
  }

 if(number>max){
    if(wrap){
      return min;
    }else{
      return max;
    }
  }else if(number<min){
    if(wrap){
      return max;
    }else{
      return min;
    }
  }

  return number;
}

export default boundaries;


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
