const mdLinks = require('../index');

// ejecutar la funcion mdlinks

mdLinks('./example/text.md', { validate: false })
  .then((result) => {
    console.log(result, 7);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = mdLinks;
