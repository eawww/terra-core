'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _TableModule = require('./Table.module.scss');

var _TableModule2 = _interopRequireDefault(_TableModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_TableModule2.default);

var propTypes = {
  /**
   * Content to be displayed in the subheader row
   */
  content: _propTypes2.default.node.isRequired,

  /**
   * Number of columns the subheader must span
   */
  colSpan: _propTypes2.default.number
};

var TableSubheader = function TableSubheader(_ref) {
  var content = _ref.content,
      colSpan = _ref.colSpan,
      customProps = _objectWithoutProperties(_ref, ['content', 'colSpan']);

  return (
    // count is based on the number of columns and assigned in the table component which contains this subheader
    _react2.default.createElement(
      'tr',
      { 'data-terra-table-subheader-row': true },
      _react2.default.createElement(
        'td',
        _extends({}, customProps, { className: cx('subheader', customProps.className), colSpan: colSpan }),
        content
      )
    )
  );
};

TableSubheader.propTypes = propTypes;

exports.default = TableSubheader;