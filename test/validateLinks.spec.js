const fetch = require('node-fetch');
const { validateLinks } = require('../src/validateLinks');

const jest = requiere('@jest/globals');

// jest.mock('node-fetch', () => jest.fn());

/* jest.mock('node-fetch', () => jest.fn().mockResolvedValue([{ href: 'https://www.youtube.com/watch?v=60g72d4Nqss', status: 'OK' }]));
describe('validateLinks', () => {
  it('should add a "status" object that responds if it is a valid or failed link', () =>
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
  expect(allData).toEqual()
  }); */
// Taer la funcion, si responde ok esta bien, de lo contrario es fail. en promesa

describe('validateLinks', () => {
  test('is a function', () => {
    expect(typeof validateLinks).toBe('function');
  })
  test('founding https//:', async () => {
  const = 
   {
  });
});
