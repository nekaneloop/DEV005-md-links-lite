// Para la búsqueda del HTTP
const fetch = require('node-fetch');

// Creamos una funcion que reciba un array de objetos
const validateLinks = (arrLinks) => {
/* Asignamos una constante, usando nuestro parámetro que son  nuestros links. Luego,
con map tenemos un array de objetos. Utilizamos obj para acceder a la propiedades en fetch.
Queremos que cada uno se modifique y se agregue el status */
  const validateArr = arrLinks.map((obj) => fetch(obj.href)
    .then((response) => {
      let status;
      if (response.status < 404 === true) {
        status = 'OK';
      } else {
        status = 'FAIL';
      }
      // Copia al objeto agregando el 'status'
      return {
        ...obj,
        status,
      };
    })
    .catch((error) => console.log('Algo no salió bien')));
  // Combinamos todas las promesas (resueltas) en una sola
  return Promise.all(validateArr);
};

// Argumento estático de prueba
/* const prueba = [{
  href: 'https://www.youtube.com/watch?v=b9cG4DzpL_c&t=37s',
  text: 'MMA 2019',
  file: undefined,
},
{
  href: 'https://www.youtube.com/watch?v=EFHeeRIDAsg',
  text: 'Citi Music Series',
  file: undefined,
},
];
// Moverlo al index principal.
validateLinks(prueba).then((result) => {
  console.log(result);
}); */

module.exports = {
  validateLinks,
};
