'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _ActionFooter = require('../../../ActionFooter');

var _ActionFooter2 = _interopRequireDefault(_ActionFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_ActionFooter2.default, {
    end: _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButton2.default, { text: 'End Action 1' }),
      'FakeLink End Action 2',
      _react2.default.createElement(_terraButton2.default, { text: 'End Action 3' })
    )
  });
};