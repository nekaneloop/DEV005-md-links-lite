// Metodo para construir y verificar rutas
const path = require('path');
// Permite realizar funciones como leer y escribir archivos
const fs = require('fs');
// Convierte de .md a hmtl
const marked = require('marked');
// Crear objetos
const jsdom = require('jsdom');
// Crear instancia
const { JSDOM } = jsdom;

/* Se realiza una función para extraer los links usando librerías, con dos parámetros.
Primero, un array constructor.Luego, se requiere convertir en html(que
contiene herf, text) así identificar los links. ¿Qué más necesita? (lexer/parse)
Utilizamos el 'parse': realiza un análisis léxico en un solo paso .md=>html + abreviado
Añadir un JSDOM constructor. Personalizamos. windowslocation/document.url
Se supone que si es "dom", tendrá algo que ver con la manipulación del dom?
Si uso el document.url puedo acceder: proporciona la url completa.
Según leí conviene usar el window.document ya que se utiliza para leer el objeto
(?) llamando a la colección con los elementos <a>.
Llamo a todos los 'tags' que son enlaces y los recorro. Llamo a mis arrays
asumiendo que ya están ahí. Y recorro por forEach, iba a usar map,
PERO el map crea otro array.
Añadí un forEach que crea la copia de un objeto (?), segun documentación */

const extractLinks = (moods, file) => {
  marked.setOptions({ mangle: false, headerIds: false });
  const convertHtml = marked.parse(moods);
  const dom = new JSDOM(convertHtml);
  const callLinksfromHtml = dom.window.document.querySelectorAll('a');
  const storingLinks = [];
  callLinksfromHtml.forEach((getInfo) => {
    const obj = {
      href: getInfo.href,
      text: getInfo.textContent,
      file,
    };
    storingLinks.push(obj);
  });

  return storingLinks;
};

const readingFile = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      const resultLinks = extractLinks(data, file);
      // console.log(resultLinks, 34);
      resolve(resultLinks);
    }
  });
});

// orden de los argumentos 

/* readingFile('D:/ProyectoLaboratoria4/DEV005-md-links-lite/example/text.md')
  .then((response) => {
    console.log(response, 58);
  })
  .catch((err) => {
    console.error(err.message, 61);
  }); */

module.exports = {
  readingFile,
  extractLinks,
};
