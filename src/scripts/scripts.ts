<<<<<<< HEAD
import { useState } from "react";

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

=======
// ------------------------------------------------------------------------------------ BOUNDARIES
>>>>>>> main
/**
 * Permite limitar un número entre un máximo y un mínimo.
 * @param number De tipo number, es el número al que se le impondra los limites
 * @param max De tipo number, valor del limite máximo
 * @param min De tipo number, valor del limite mínimo
 * @param wrap De tipo boolean, especifica si un límite salta hasta el otro lado, o no.
 */
export function boundaries(
  number: number,
  max?: number,
  min?: number,
  wrap?: boolean
) {
  if (min === undefined) {
    min = number;
  }
  if (max === undefined) {
    max = number;
  }

  if (number > max) {
    if (wrap) {
      return min;
    } else {
      return max;
    }
  } else if (number < min) {
    if (wrap) {
      return max;
    } else {
      return min;
    }
  }

  return number;
}

// ------------------------------------------------------------------------------------ GENERATE ID
export function generateId(long) {
  let character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < long; i++) {
    const charRandom = character.charAt(
      Math.floor(Math.random() * character.length)
    );
    id += charRandom;
  }
  return id;
}

<<<<<<< HEAD

// ############################# Resfresh() #############################
/**
 * Hooks personalizados para el refresco manual de componente 
 * @returns {{refresh: Function, refreshCont: number}} 'refresh' es un objeto con una funcion y 'refreshCont' es un contador
 */
function useRefresh() {
  const [refreshCont, setRefreshCont] = useState(0);

  const refresh = () => {
    setRefreshCont(refreshCont + 1);
  };

  return { refresh, refreshCont };
}


export {};
=======
// ------------------------------------------------------------------------------------ RANDOM NAME
export function randomName(gender) {
  const maleName = ["Juan", "Pedro", "Luis", "Carlos", "Manuel"];
  const femaleName = ["María", "Ana", "Luisa", "Isabel", "Laura"];

  if (gender === "Masculino") {
    const randomName = maleName[Math.floor(Math.random() * maleName.length)];
    return randomName;
  } else if (gender === "Femenino") {
    const randomName =
      femaleName[Math.floor(Math.random() * femaleName.length)];
    return randomName;
  } else {
    return "Genere no valide";
  }
}

// ------------------------------------------------------------------------------------ NUM RANDOM
export function numRandom(min, max) {
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  return numeroAleatorio;
}

// ------------------------------------------------------------------------------------ PARSE NUMBER
/**
 * Esta función te permite sacar los números dentro de una cadena
 * @param {string} stringtext Cadena de texto a la cual se desea validar
 */
export function parseNumber(stringtext: string) {
  stringtext = stringtext.replace(/[^0-9.-]+/gim, "");
  if (Number.isNaN(Number.parseFloat(stringtext))) {
    return 0;
  }
  return parseFloat(stringtext);
}

// ------------------------------------------------------------------------------------ STALL
/**
 * Función para esperar una cantidad determinada de tiempo en milisegundos.
 * @param ms - El número de milisegundos a esperar.
 * @returns Una promesa que se resuelve después de ms milisegundos.
 */
export function stall(ms: number): Promise<void> {
  // Crear una nueva promesa
  return new Promise((resolve, reject) => {
    //setTimeout para ejecutar una función después de ms milisegundos
    setTimeout(() => {
      // Resolver la promesa
      resolve();
    }, ms);
  });
}
>>>>>>> main
