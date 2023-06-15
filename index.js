const { checkExtension } = require('./src/checkExtension');
const { checkRoute } = require('./src/pathRoute');
const { readingFile } = require('./src/readingFiles');
const { validateLinks } = require('./src/validateLinks');

function mdLinks(path, options) {
  return new Promise((resolve, reject) => {
    const abosoluteRoute = checkRoute(path);
    if (!abosoluteRoute) {
      reject('The route not exists');
      // Para que la función se detenga
      return false;
    }
    const isMd = checkExtension(abosoluteRoute);
    if (isMd === false) {
      reject('This file is not .md');
      // Para que la función se detenga
      return false;
    }
    // resolve(isMd);
    readingFile(abosoluteRoute)
      .then((res) => {
        // console.log(res, 19);
        validateLinks(res).then((resAgain) => {
          resolve(resAgain);
        });
      })
      .catch((err) => {
        console.log(err, 22);
      });
  });
}

module.exports = mdLinks;
