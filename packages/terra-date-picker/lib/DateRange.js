'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('terra-base/lib/baseStyles');

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * An ISO 8601 string representation of the default end date for a date range.
   */
  endDate: _propTypes2.default.string,
  /**
   * Name of the endDate input. The name should be unique.
   */
  endName: _propTypes2.default.string.isRequired,
  /**
   * An ISO 8601 string representation of the selected start date.
   */
  startDate: _propTypes2.default.string,
  /**
   * Name of the startDate input. The name should be unique.
   */
  startName: _propTypes2.default.string.isRequired,
  /**
   * A callback function to execute when a valid date is selected or entered. The parameters in the function are event, start date, end date.
   */
  onChange: _propTypes2.default.func
};

var defaultProps = {
  endDate: undefined,
  startDate: undefined,
  onChange: undefined
};

var DateRange = function (_React$Component) {
  _inherits(DateRange, _React$Component);

  function DateRange(props) {
    _classCallCheck(this, DateRange);

    var _this = _possibleConstructorReturn(this, (DateRange.__proto__ || Object.getPrototypeOf(DateRange)).call(this, props));

    _this.state = {
      startDate: props.startDate,
      endDate: props.endDate
    };
    _this.handleChangeStart = _this.handleChangeStart.bind(_this);
    _this.handleChangeEnd = _this.handleChangeEnd.bind(_this);
    return _this;
  }

  _createClass(DateRange, [{
    key: 'handleChange',
    value: function handleChange(event, _ref) {
      var _ref$startDate = _ref.startDate,
          startDate = _ref$startDate === undefined ? this.state.startDate : _ref$startDate,
          _ref$endDate = _ref.endDate,
          endDate = _ref$endDate === undefined ? this.state.endDate : _ref$endDate;

      var startDateForRange = startDate;
      var endDateForRange = endDate;

      if ((0, _moment2.default)(startDateForRange).isAfter((0, _moment2.default)(endDateForRange))) {
        var _ref2 = [endDateForRange, startDateForRange];
        startDateForRange = _ref2[0];
        endDateForRange = _ref2[1];
      }

      this.setState({ startDate: startDateForRange, endDate: endDateForRange });

      if (this.props.onChange) {
        this.props.onChange(event, startDateForRange, endDateForRange);
      }
    }
  }, {
    key: 'handleChangeStart',
    value: function handleChangeStart(event, startDate) {
      this.handleChange(event, { startDate: startDate });
    }
  }, {
    key: 'handleChangeEnd',
    value: function handleChangeEnd(event, endDate) {
      this.handleChange(event, { endDate: endDate });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          endDate = _props.endDate,
          endName = _props.endName,
          startDate = _props.startDate,
          startName = _props.startName,
          onChange = _props.onChange,
          customProps = _objectWithoutProperties(_props, ['endDate', 'endName', 'startDate', 'startName', 'onChange']);

      return _react2.default.createElement(
        'div',
        { className: 'terra-DatePicker-range' },
        _react2.default.createElement(_DatePicker2.default, _extends({}, customProps, {
          selectedDate: this.state.startDate,
          isStartDateRange: true,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          name: startName,
          onChange: this.handleChangeStart
        })),
        _react2.default.createElement(_DatePicker2.default, _extends({}, customProps, {
          selectedDate: this.state.endDate,
          isEndDateRange: true,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          name: endName,
          onChange: this.handleChangeEnd
        }))
      );
    }
  }]);

  return DateRange;
}(_react2.default.Component);

DateRange.propTypes = propTypes;
DateRange.defaultProps = defaultProps;

exports.default = DateRange;