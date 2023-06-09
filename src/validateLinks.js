// Para la búsqueda del HTTP
const fetch = require('node-fetch');

/* Creamos una funcion que reciba un array de objetos. Se usará fetch(). Usar
MAP en el fetch: voy a tener un array de objetos. Queremos que cada uno se modifique
y agregue el status.Poner los errores manualmente sobre 404(status).
1- La función esta capturando un archivo y si la función está en forma de objeto.
2- Queremos saber el estatus de ese objeto
object.assign() copia todas las propiedades definidas en un obj a otro
Promise.all combinar promesas en una sola / Promesa y consumir promesa */

const validateLinks = (arrLinks) => {
  const validateArr = arrLinks.map((obj) => fetch(obj.href)
    .then((response) => {
      let status;
      if (response.status < 404 === true) {
        status = 'OK';
      } else {
        status = 'FAIL';
      }
      // Copia al objeto

      return {
        ...obj,
        status,
      };
    })
    .catch((error) => console.log(error)));
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
