/**
 * Class representing a currency.
 *
 * @class
 * @classdesc This class represents a currency with a code and name.
 *
 * @example
 * const currency = new Currency('USD', 'United States Dollar');
 * console.log(currency.displayFullCurrency()); // Outputs: "United States Dollar (USD)"
 *
 * @property {string} code - The currency code (e.g., 'USD').
 * @property {string} name - The name of the currency (e.g., 'United States Dollar').
 *
 * @method get code - Gets the currency code.
 * @method set code - Sets the currency code.
 * @method get name - Gets the name of the currency.
 * @method set name - Sets the name of the currency.
 * @method displayFullCurrency - Returns a string representation of the
 *    currency in the format "name (code)".
 */

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
