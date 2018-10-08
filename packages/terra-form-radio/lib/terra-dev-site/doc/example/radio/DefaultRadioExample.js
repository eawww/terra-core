'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('terra-form-radio/lib/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultRadioExample = function defaultRadioExample() {
  return _react2.default.createElement(_Radio2.default, { id: 'default-radio', labelText: 'Default Radio', name: 'default' });
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = defaultRadioExample;