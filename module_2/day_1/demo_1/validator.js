class Validator {

  static validateChessDesk(height, width, symbol) {
    const [minBounds, maxBounds] = [2, 256];
    const errors = {status: 'fail', reason: ''};

    if (!Number.isInteger(height) || !Number.isInteger(width)) {
      errors.reason += `Width and height should be integers!\n`;
    }

    if ((height < minBounds) || (height > maxBounds)) {
      errors.reason += `Height should be from ${minBounds} to ${maxBounds}. ${height} isn't correct value\n`;
    }

    if ((width < minBounds) || (width > maxBounds)) {
      errors.reason += `Width should be from ${minBounds} to ${maxBounds}. ${width} isn't correct value\n`;
    }

    if (!symbol && symbol !== 0) {
      errors.reason += `Symbol is required! Provide any value except empty string.\n`;
    }

    return errors.reason ? errors : null;
  }

  static validateEnvelops(first, second) {
    const [minLength, maxLength] = [1, 1000000];
    const errors = {status: 'fail', reason: ''};

    const emptyParameters = !(first && second);
    const notAnObject = !(typeof first === 'object' && typeof second === 'object');
    if (emptyParameters || notAnObject) {
      errors.reason += `Method should accept two parameters as objects with sides (a, b) or (c, d).\n`;
    }

    const isValid = (obj) => {
      const correctLength = Object.keys(obj).length === 2;
      const correctProps = (obj.hasOwnProperty('a') && obj.hasOwnProperty('b'))
        || (obj.hasOwnProperty('c') && obj.hasOwnProperty('d'));
     return correctLength && correctProps;
    };
    if (!(isValid(first) && isValid(second))) {
      errors.reason += `Envelops objects should contain two sides (a, b) or (c, d). Example: {a: 10, b: 12} and {c: 3, b: 5}\n`;
    }

    const isInvalidSideValue = (side) => side < minLength || side > maxLength || typeof side !== 'number' || isNaN(side);
    if([...Object.values(first), ...Object.values(second)].some(value => isInvalidSideValue(value))) {
      errors.reason += `Each side value should be a number in diapason from ${minLength} to ${maxLength}\n`;
    }

    return errors.reason ? errors : null;
  }

  static validateTriangles(triangles) {
    const errors = {status: 'fail', reason: ''};

    if (!triangles || triangles.length < 1) {
      errors.reason += `Provide array of triangle objects!`;
      return errors;
    }

    if (triangles.some(t => typeof t !== 'object')) {
      errors.reason += `Each triangle should be an object with vertices and valid sides. Example: {vertices: ‘ABC’, a: 10, b: 20, c: 22.36}`;
      return errors;
    }

    const isValidNames = (t) => {
      const name = t.hasOwnProperty('vertices') && t['vertices'];
      if (!name || name.length !== 3) {
        return false;
      }

      return !name.toLowerCase().split('').some(vertex => !t.hasOwnProperty(vertex));
    };

    const isTriangle = (t) => {
      const vertices = t['vertices'].toLowerCase().split('');
      const [a, b, c] = [t[vertices[0]], t[vertices[1]], t[vertices[2]]];

      if (a > b && a > c) {
        return a < b + c;
      }

      if (b > a && b > c) {
        return b < a + c;
      }

      return c < a + b;
    };

    for (let i = 0; i < triangles.length; i++) {
      const triangle = triangles[i];
      if (!(isValidNames(triangle) && isTriangle(triangle))) {
        errors.reason += `Each triangle should be an object with vertices and valid sides. Example: {vertices: ‘ABC’, a: 10, b: 20, c: 22.36}`;
        return errors;
      }
    }

    return null;
  }

  static validatePalindrome(palindrome) {
    const [minBounds, maxBounds] = [2, 20];
    const errors = {status: 'fail', reason: ''};

    if (!palindrome) {
      errors.reason += `Argument required.\n`;
    }

    const asNumber = +palindrome;
    if (typeof asNumber !== 'number' || isNaN(asNumber)) {
      errors.reason += `An argument should be a number or string of numbers.\n`;
    }

    const asString = palindrome.toString();
    if (asString.length < minBounds || asString.length > maxBounds) {
      errors.reason += `Minimal length should be ${minBounds} and maximum - ${maxBounds}.\n`;
    }

    return errors.reason ? errors : null;
  }

  static validateTickets(context) {
    const [minBounds, maxBounds] = [0, 999999];
    const errors = {status: 'fail', reason: ''};

    if (!context || typeof context !== 'object') {
      errors.reason += `Argument required and should be an object.\n`;
    }

    if (!context.hasOwnProperty('min') || !context.hasOwnProperty('max')) {
      errors.reason += `Context parameter should contain min and max properties.\n`;
    }

    const isValid = (field) => (typeof field === 'string' || typeof field === 'number')
      && !isNaN(+field) && field >= minBounds && field <= maxBounds;
    if (!isValid(context.min) || !isValid(context.max)) {
      errors.reason += `MIN and MAX should be a numbers or numbers in string limited from ${minBounds} to ${maxBounds}.\n`;
    }

    return errors.reason ? errors : null;
  }

  static validateSequence(length, square) {
    const [minBounds, maxBounds] = [1, 1000000];
    const errors = {status: 'fail', reason: ''};

    if (!length || !square) {
      errors.reason += `Should be two arguments with values from 1 to 1000000.\n`;
    }

    if (typeof length !== 'number' || typeof square !== 'number') {
      errors.reason += `Both parameters should be numbers.\n`;
    }

    if (length < minBounds || length > maxBounds) {
      errors.reason += `Length should be between ${minBounds} and ${maxBounds}. ${length} is invalid!\n`;
    }

    if (square < minBounds || square > maxBounds) {
      errors.reason += `Square should be between ${minBounds} and ${maxBounds}. ${square} is invalid!\n`;
    }

    return errors.reason ? errors : null;
  }

  static validateFibonacci(context) {
    const [minBounds, maxBounds] = [1, 1000000];
    const errors = {status: 'fail', reason: ''};

    if (!context) {
      errors.reason += `Argument is required.\n`;
    }

    if (typeof context !== 'object') {
      errors.reason += `Context should be an object.\n`;
    }

    if (!context.hasOwnProperty('length') && !(context.hasOwnProperty('min') && context.hasOwnProperty('max'))) {
      errors.reason += `Context should be an object with property length or properties min and max.\n`;
    }

    const isInvalidLimits = (prop) => context.hasOwnProperty(prop) && (context[prop] < minBounds || context[prop] > maxBounds);
    if (isInvalidLimits('length') || isInvalidLimits('min') || isInvalidLimits('max')) {
      errors.reason += `Properties values should be limited from ${minBounds} to ${maxBounds}.\n`;
    }

    return errors.reason ? errors : null;
  }
}

module.exports = Validator;
