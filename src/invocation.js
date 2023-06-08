const mdLinks = require('../index');
// const readingFiles = require('./readingFiles');

const extractLinks = require('./readingFiles');

// console.log('hey', readingFiles('./example/text-two.md'));
// llamado a la ruta
mdLinks('./example/text.md', { validate: false })
  .then((result) => {
    console.log(result, 6);
  })
  .catch((error) => {
    console.error(error);
  });

console.log('hey', extractLinks('./example/text.md'));

mdLinks('./example/text.md', { validate: true }).then((result) => {
  console.log(result);
})
  .catch((error) => {
    console.error(error);
  });

module.exports = mdLinks;
