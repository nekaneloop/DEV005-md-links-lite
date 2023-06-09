const mdLinks = require('../index');

// ejecutar la funcion mdlinks

console.log('hey', readingFiles('./example/text-two.md'));

mdLinks('./example/text.md', { validate: false })
  .then((result) => {
    console.log(result, 6);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = mdLinks;
