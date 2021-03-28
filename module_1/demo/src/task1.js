import Validator from './validator.js';


export default class ChessDesk {

// TODO: check float inputs
  build(height = 2, width = 2, symbol = '*') {
    const invalid = Validator.validateChessDesk(height, width, symbol);
    if (invalid) {
      return invalid;
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
