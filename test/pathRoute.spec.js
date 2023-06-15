const fs = require('fs');
const { checkRoute } = require('../src/pathRoute');

// argumento, resultado que esperas, resultado verdadero.
describe('checkRoute', () => {
  test('is a function', () => {
    expect(typeof checkRoute).toBe('function');
  });
  test('the route absolute exists', () => {
    const road = 'D:/ProyectoLaboratoria4/DEV005-md-links-lite/example/text.md';
    const result = road;
    const finalResult = checkRoute(road);
    expect(result).toBe(finalResult);
  });
  test('the route is relative', () => {
    const road = 'text.md';
    const absoluteRoute = 'D:/ProyectoLaboratoria4/DEV005-md-links-lite/example/text.md';
    const result = checkRoute(road);
    expect(result).toEqual(absoluteRoute);
  });
});
