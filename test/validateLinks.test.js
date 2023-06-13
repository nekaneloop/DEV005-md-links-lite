// const assert = require('node:assert');
const fetch = require('node-fetch');
const jest = require('jest');
const validateLinks = require('../src/validateLinks');
// Interceptando importaciones del fetch
jest.mock('node-fetch', () => jest.fn().mockResolvedValue([{ href: 'https://www.youtube.com/watch?v=60g72d4Nqss', status: 'OK' }]));

describe('validateLinks', () => {
  it('should add a "status" object that responds if it is a valid or failed link', () => {
    // const route = '../example/text.md';
    const allData = [
      {
        href: 'https://www.youtube.com/watch?v=60g72d4Nqss',
        // text: 'Coldplays cover - BTS',
        // file: 'D://ProyectoLaboratoria4//DEV005-md-links-lite//example//text.md',
      },
    ];
    validateLinks(allData)
      .then((res) => expect(res).toEqual({
        href: 'https://www.youtube.com/watch?v=60g72d4Nqss',
        status: 'OK',
      }));
  });
});
