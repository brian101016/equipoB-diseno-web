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

function generateId(long){
  let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let id = '';
  for (let i = 0; i < long; i++){
    const charRandom = character.charAt(Math.floor(Math.random() * character.length));
    id += charRandom;
  }
  return id;

}

//Id Random de 16 Caracteres
const id16 = generateId(16);
console.log(id16, ' id 16 caracteres')

//Id Random de 16 Caracteres
const id6 = generateId(6);
console.log(id6, ' id 6 caracteres')

function randomName(gender){
  const maleName = ["Juan", "Pedro", "Luis", "Carlos", "Manuel"];
  const femaleName = ["María", "Ana", "Luisa", "Isabel", "Laura"]

  if (gender === "Masculino") {
    const randomName = maleName[Math.floor(Math.random() * maleName.length)];
    return randomName;
  } else if(gender === "Femenino") {
    const randomName = femaleName[Math.floor(Math.random() * femaleName.length)];
    return randomName;
  } else {
    return "Genere no valide";
  }
}

// Generar un nombre masculino aleatorio
const maleName = randomName("masculino");
console.log('Nombre masculino aleatorio:', maleName);

// Generar un nombre femenino aleatorio
const femaleName = randomName("femenino");
console.log('Nombre femenino aleatorio:', femaleName);

function numRandom(min, max){
  if (min > max){
    const temp = min;
    min = max;
    max = temp;
  }

  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  return numeroAleatorio;
}

