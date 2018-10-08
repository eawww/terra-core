'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ActionHeader = require('terra-action-header/lib/ActionHeader');

var _ActionHeader2 = _interopRequireDefault(_ActionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionHeaderExample = function ActionHeaderExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ActionHeader2.default, {
      title: 'Default Action Header'
    }),
    _react2.default.createElement('br', null)
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = ActionHeaderExample;