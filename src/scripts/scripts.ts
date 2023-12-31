// ------------------------------------------------------------------------------------ BOUNDARIES

import { useState } from "react";
import LoginScreen from "@screens/LoginScreen";
import { RouterProvider } from "react-router-dom";

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

// ------------------------------------------------------------------------------------ formatoFecha
export function formatoFecha(fecha: Date, largo = false) {
  const dia = fecha.getDate();
  const mes = fecha.toLocaleString("es-ES", {
    month: largo ? "long" : "short",
  });
  const año = fecha.getFullYear();

  if (largo) {
    return `${dia} de ${mes} del ${año}`;
  } else {
    // Asegurarse de que el día y el mes tengan dos dígitos
    const diaStr = dia.toString().padStart(2, "0");
    const mesStr = (fecha.getMonth() + 1).toString().padStart(2, "0"); // El mes es base 0

    return `${diaStr}/${mesStr}/${año}`;
  }
}

// ------------------------------------------------------------------------------------ refresh
/**
 * Hooks personalizados para el refresco manual de componente
 * @returns {{refresh: Function, refreshCont: number}} 'refresh' es un objeto con una funcion y 'refreshCont' es un contador
 */
export function useRefresh(): { refresh: Function; refreshCont: number } {
  const [refreshCont, setRefreshCont] = useState(0);

  const refresh = () => {
    setRefreshCont(refreshCont + 1);
  };

  return { refresh, refreshCont };
}

// ------------------------------------------------------------------------------------ GENERATE RANCOLOR
/**
 * Esta función te regresa un color en código hexadecimal
 * @param character es el rango del color
 */
export function generateColor() {
  let character = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const charRandom = character.charAt(
      Math.floor(Math.random() * character.length)
    );
    color += charRandom;
  }
  return color;
}

// ------------------------------------------------------------------------------------ VALIDACIÓN DE EMAIL
// Valida que el campo email tenga un email valido
export function validarEmailValido(email) {
  // Expresión regular para validar un correo electrónico
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(email);
}

// ------------------------------------------------------------------------------------ VALIDACIÓN DE INPUTS VACIOS
export function validarInput(input, name: string) {
  let isRegistered = true;
  if (input.length <= 0) {
    window.alert(`${name} no debe de estar vacio`);
    isRegistered = true;
  } else {
    isRegistered = false;
  }
  return isRegistered;
}
