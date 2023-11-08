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
