"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _i18n = require("../i18n/i18n");
var _reactI18next = require("react-i18next");
var _english = _interopRequireDefault(require("../../public/images/flags/english.png"));
var _vietnamese = _interopRequireDefault(require("../../public/images/flags/vietnamese.png"));
var _image = _interopRequireDefault(require("next/image"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Header = function Header() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    i18n = _useTranslation.i18n;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpenBurger = _useState4[0],
    setIsOpenBurger = _useState4[1];
  var _useState5 = (0, _react.useState)('Tiếng Việt'),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedOption = _useState6[0],
    setSelectedOption = _useState6[1];
  var currentLanguage = _i18n.locales[i18n.language];
  console.log(currentLanguage);
  var changeLanguage = function changeLanguage(lng) {
    if (lng == 'en') {
      setSelectedOption('Tiếng Anh');
    } else {
      setSelectedOption('Tiếng Việt');
    }
    i18n.changeLanguage(lng);
    setIsOpen(!isOpen);
  };
  var toggleOptions = function toggleOptions() {
    setIsOpen(!isOpen);
  };
  var toggleBurger = function toggleBurger() {
    setIsOpenBurger(!isOpenBurger);
    if (!isOpenBurger) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible'; // hoặc 'auto' nếu bạn muốn phục hồi overflow mặc định
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("header", {
    className: "c-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "l-container select-language"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-select ".concat(isOpen ? 'open' : ''),
    id: "customSelect"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "select-selected",
    onClick: toggleOptions
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faEarthAmericas,
    className: "color-white"
  }), " ", selectedOption), /*#__PURE__*/_react.default.createElement("div", {
    className: "select-options"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "option",
    onClick: function onClick() {
      return changeLanguage('vi');
    }
  }, " ", /*#__PURE__*/_react.default.createElement(_image.default, {
    alt: "vietnamese",
    src: _vietnamese.default,
    width: 20,
    height: 20,
    unoptimized: true
  }), " Ti\u1EBFng Vi\u1EC7t"), /*#__PURE__*/_react.default.createElement("div", {
    className: "option",
    onClick: function onClick() {
      return changeLanguage('en');
    }
  }, /*#__PURE__*/_react.default.createElement(_image.default, {
    alt: "english",
    src: _english.default,
    width: 20,
    height: 20,
    unoptimized: true
  }), " Ti\u1EBFng Anh")))), /*#__PURE__*/_react.default.createElement("nav", {
    className: "c-header__nav ".concat(isOpenBurger ? 'is-active' : ''),
    onClick: toggleBurger
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: '',
    className: "btn btn-login"
  }, "Login")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: '',
    className: "btn btn-sign"
  }, "Sign up")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "c-burger ".concat(isOpenBurger ? 'is-active' : ''),
    onClick: toggleBurger
  }, /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null)))));
};
var _default = exports.default = Header;