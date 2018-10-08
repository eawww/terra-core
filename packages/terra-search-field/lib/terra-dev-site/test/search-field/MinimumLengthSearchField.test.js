'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchField = require('../../../SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MinimumLengthSearchField = function (_React$Component) {
  _inherits(MinimumLengthSearchField, _React$Component);

  function MinimumLengthSearchField(props) {
    _classCallCheck(this, MinimumLengthSearchField);

    var _this = _possibleConstructorReturn(this, (MinimumLengthSearchField.__proto__ || Object.getPrototypeOf(MinimumLengthSearchField)).call(this, props));

    _this.state = {
      searchText: ''
    };
    return _this;
  }

  _createClass(MinimumLengthSearchField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'search-callback-text' },
          'Search Text:',
          ' ',
          this.state.searchText
        ),
        _react2.default.createElement(_SearchField2.default, {
          id: 'searchfieldWithMinimumLength',
          minimumSearchTextLength: 5,
          onSearch: function onSearch(searchText) {
            _this2.setState({ searchText: searchText });
          }
        })
      );
    }
  }]);

  return MinimumLengthSearchField;
}(_react2.default.Component);

exports.default = MinimumLengthSearchField;