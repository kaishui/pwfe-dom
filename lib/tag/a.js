/**
 * Created by chkui on 2017/5/27.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('../../router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  内置A标签。
 *  1）标签提供服务器跳转和本地跳转2种模式。通过server参数配置。
 *  @param {object} props{
 *      {string} href:要跳转的路径
 *      {boolean} server:是否经过服务器跳转，默认为false。
 *      {object} style: 样式
  *     {string} className: css样式
 *  }
 */
var A = (0, _router.withRouter)(function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
        var _ref;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(props)));

        var params = _this.props;
        _this.hrefHandle = _this.hrefHandle.bind(_this);
        //设定参数
        _this.params = {};
        params.style && (_this.params.style = params.style);
        params.className && (_this.params.className = params.className);
        if (params.server) {
            _this.params.href = params.href;
        } else {
            _this.params.onClick = _this.hrefHandle;
        }
        return _this;
    }

    _createClass(_class, [{
        key: 'hrefHandle',
        value: function hrefHandle() {
            var _props = this.props,
                href = _props.href,
                history = _props.history;

            href && history.push(href);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'a',
                this.params,
                this.props.children
            );
        }
    }]);

    return _class;
}(_react2.default.Component));

exports.default = A;