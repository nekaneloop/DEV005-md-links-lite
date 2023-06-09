// Para la búsqueda del HTTP
const fetch = require('node-fetch');

/* Creamos una funcion que reciba un array de objetos. Se usará fetch(). Usar
MAP en el fetch: voy a tener un array de objetos. Queremos que cada uno se modifique
y agregue el status.Poner los errores manualmente sobre 404(status).
1- La función esta capturando un archivo y si la función está en forma de objeto.
2- Queremos saber el estatus de ese objeto */

const validateLinks = (arrLinks) => {
  const validateArr = arrLinks.map((obj) => fetch(obj.href)
    .then((response) => console.log(response.status))
    // Modificar el objeto. Cómo agregar nuevos elementos a un objeto.
    .catch((error) => console.log(error)));
  console.log('aqui', validateArr);
};

// Argumento estático de prueba
const prueba = [{
  href: 'htps://www.youtube.com/watch?v=b9cG4DzpL_c&t=37s',
  text: 'MMA 2019',
  file: undefined,
},
{
  href: 'https://www.youtube.com/watch?v=EFHeeRIDAsg',
  text: 'Citi Music Series',
  file: undefined,
},
];
validateLinks(prueba);

module.exports = {
  validateLinks,
};
