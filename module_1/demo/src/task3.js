import Validator from './validator.js';


export default class Triangles {

  sort(triangles) {
    const invalid = Validator.validateTriangles(triangles);
    if (invalid) {
      return invalid;
    }

    const mapped = triangles.map(t => {
      const vertices = t['vertices'].toLowerCase().split('');
      const [a, b, c] = [t[vertices[0]], t[vertices[1]], t[vertices[2]]];

      const p = (a + b + c)/2;
      const square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
      return {
        vertices: t['vertices'],
        square
      }
    });

    return mapped.sort((first, second) => first.square - second.square).map(v => v['vertices']);
  }
}
