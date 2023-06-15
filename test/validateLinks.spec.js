const { validateLinks } = require('../src/validateLinks');

global.fetch = () => Promise.resolve({
  href: 'https://www.youtube.com/watch?v=60g72d4Nqss',
  status: 200,
});

describe('validateLinks', () => {
  test('return a "status" object', async () => {
    const allData = [{
      href: 'https://www.youtube.com/watch?v=60g72d4Nqss',
    }];
    const result = await validateLinks(allData);
    expect(result).toStrictEqual([{
      href: 'https://www.youtube.com/watch?v=60g72d4Nqss',
      status: 'OK :)',
    }]);
  });
});
