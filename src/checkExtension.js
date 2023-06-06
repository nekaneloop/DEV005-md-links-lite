// Metodo para construir y verificar rutas
const path = require('path');
// Permite realizar funciones como leer y escribir archivos
const fs = require('fs');

/* Se realiza la funcion para identificar qué tipo de extensión es. */

const checkExtension = (road) => {
  const getExtension = path.extname(road);
  if (getExtension !== '.md') {
    return false;
  }
  return true;
};

module.exports = {
  checkExtension
};
