'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TimeInput = require('../../../../TimeInput');

var _TimeInput2 = _interopRequireDefault(_TimeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeInputDefault = function TimeInputDefault() {
  return _react2.default.createElement(
    'div',
    { style: { caretColor: 'transparent' } },
    _react2.default.createElement(_TimeInput2.default, {
      id: 'timeInput',
      name: 'time-input'
    })
  );
};

exports.default = TimeInputDefault;