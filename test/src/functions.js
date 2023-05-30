// módulo para trabajar con los directorios
const path = require('node:path');
// para verificar si la ruta existe
const fs =  require ( 'fs' ) ;

// convertir la ruta en absoluta
const mdLinks = (road) => {

if (fs.existsSync(road) === true) {
 if (path.isAbsolute(road)){
  return path; 
 }

} else {
  if (!road === false); {
    return 'error';  
   }
}
const isAbsolute = path.resolve(road);
return isAbsolute; 
console.log(isAbsolute);

};

// lectura de archivos?
// extraer links

// validar links 


  const urlStandar = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  mdLinks("../archives/archiveOne")
    .then(links => {
      href: ;
      // => [{ href, text, file }, ...]
    })
    .catch(console.error);

}


  
  // reutilizar ese codigo 
module.export (mdLinks);