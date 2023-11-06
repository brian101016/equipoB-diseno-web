/**
 * Función para esperar una cantidad determinada de tiempo en milisegundos.
 * @param ms - El número de milisegundos a esperar.
 * @returns Una promesa que se resuelve después de ms milisegundos.
 */
export function stall(ms: number): Promise<void> {
  const seconds: number = ms;
  // Crear una nueva promesa
  return new Promise((resolve, reject) => {
    //setTimeout para ejecutar una función después de ms milisegundos
    setTimeout(() => {
      // Resolver la promesa
      resolve();
    }, ms);
  });
}
