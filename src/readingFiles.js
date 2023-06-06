// Metodo para construir y verificar rutas
const path = require('path');
// Permite realizar funciones como leer y escribir archivos
const fs = require('fs');

const extractLinks = (data) => {
  console.log(data, 17);
  const storingLinks = [];
  const regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/gm;

  console.log(data.match(regex), 11)

  // const unite = (links) => Array.from(links.matchAll(regex));
  // console.log(unite, 22);
  // unite.forEach((obj) => {
  //   const linkObj = {
  //     href: obj[0],
  //     text: obj[1],
  //     file: path.pathRoute(),
  //   };
  //   storingLinks.push(linkObj);
  // });

  // console.log(('./example/text.md'));
  return storingLinks;
};

const readingFile = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      const resultLinks = extractLinks(data);
      console.log(resultLinks, 34)
      // resolve(resultLinks);
      resolve(data);
    }
  });
});

module.exports = {
  readingFile, extractLinks,
};
