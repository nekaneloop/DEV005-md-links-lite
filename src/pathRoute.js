// Metodo para construir y verificar rutas
const path = require('path');
// Permite realizar funciones como leer y escribir archivos
const fs = require('fs');

/* Si retorna true, la ruta existe. Determina si la ruta es absoluta.
Luego se resuelve si una ruta no es absoluta. Se usa string que es equivalente a false */
const checkRoute = (road) => {
  if (fs.existsSync(road) === true) {
    if (path.isAbsolute(road)) {
      return road;
    }
    const convertPath = path.resolve(road);
    return convertPath;
  }
  return '';
};

module.exports = {
  checkRoute,
};
