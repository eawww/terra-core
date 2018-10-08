'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('../../../../List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = function list() {
  return _react2.default.createElement(
    _List2.default,
    { isDivided: true },
    _react2.default.createElement(_List2.default.Item, { content: _react2.default.createElement(
        'p',
        null,
        'test 1'
      ), key: '123' }),
    _react2.default.createElement(_List2.default.Item, { content: _react2.default.createElement(
        'p',
        null,
        'test 2'
      ), key: '124' }),
    _react2.default.createElement(_List2.default.Item, { content: _react2.default.createElement(
        'p',
        null,
        'test 3'
      ), key: '125' })
  );
};

exports.default = list;