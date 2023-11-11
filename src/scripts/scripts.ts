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
