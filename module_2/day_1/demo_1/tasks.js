const Validator = require('./validator');

// Task 1
class ChessDesk {

  build(height = 2, width = 2, symbol = '*') {
    const invalid = Validator.validateChessDesk(height, width, symbol);
    if (invalid) {
      return invalid;
    }

    if (symbol.length > 1) {
      symbol = symbol[0];
    }

    let result = '';
    for (let i = 1; i <= height; i++) {
      result += this._isOdd(i) ? this._getOdd(symbol, width) : this._getEven(symbol, width);
    }

    return result;
  }

  _isOdd(int) {
    return !!(int % 2);
  }

  _getOdd(symbol, count) {
    const sequence = `${symbol} `;
    return `${sequence.repeat(count/2)}${this._isOdd(count) ? symbol : ''}\n`;
  }

  _getEven(symbol, count) {
    const sequence = ` ${symbol}`;
    return `${sequence.repeat(count/2)}${this._isOdd(count) ? '' : ' '}\n`;
  }
}

// Task 2
class Envelops {

  check(envelope1, envelope2) {
    const invalid = Validator.validateEnvelops(envelope1, envelope2);
    if (invalid) {
      return invalid;
    }

    const keys1 = Object.keys(envelope1);
    const keys2 = Object.keys(envelope2);

    if (envelope1[keys1[0]] > envelope2[keys2[0]] && envelope1[keys1[1]] > envelope2[keys2[1]]) {
      return 1;
    }

    if (envelope1[keys1[0]] < envelope2[keys2[0]] && envelope1[keys1[1]] < envelope2[keys2[1]]) {
      return 2;
    }

    return 0;
  }
}

exports.task1 = new ChessDesk();
exports.task2 = new Envelops();
