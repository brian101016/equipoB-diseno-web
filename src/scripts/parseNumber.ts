/**
 * Esta función te permite sacar los números dentro de una cadena
 * @param {stirng} stringtext Cadena de texto a la cual se desea validar
 */
function parseNumber(stringtext : string){
stringtext = stringtext.replace(/[^0-9.-]+/gim, "");
  if (Number.isNaN(Number.parseFloat(stringtext))) {
    return 0;
  }
  return parseFloat(stringtext);
}

export default parseNumber;