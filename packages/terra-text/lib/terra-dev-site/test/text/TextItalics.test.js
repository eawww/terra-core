'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('../../../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextItalics = function TextItalics() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Text2.default,
      { id: 'textItalic', isItalic: true },
      'Italics'
    )
  );
};

exports.default = TextItalics;