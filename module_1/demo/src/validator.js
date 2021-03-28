export default class Validator {

  static validateChessDesk(height, width, symbol) {
    const [minBounds, maxBounds] = [2, 256];
    const errors = {status: 'fail', reason: ''};

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
}
