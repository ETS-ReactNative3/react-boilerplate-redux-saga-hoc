'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _toConsumableArray = _interopDefault(require('@babel/runtime/helpers/toConsumableArray'));
var _typeof = _interopDefault(require('@babel/runtime/helpers/typeof'));
var _slicedToArray = _interopDefault(require('@babel/runtime/helpers/slicedToArray'));
var _defineProperty = _interopDefault(require('@babel/runtime/helpers/defineProperty'));
var _objectSpread = _interopDefault(require('@babel/runtime/helpers/objectSpread2'));
var React = require('react');
var React__default = _interopDefault(React);
var redux = require('redux');
var reactRedux = require('react-redux');
var isEqual = _interopDefault(require('fast-deep-equal'));
var reselect = require('reselect');
var invariant = _interopDefault(require('invariant'));
require('@babel/runtime/helpers/objectWithoutProperties');
var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator = _interopDefault(require('@babel/runtime/helpers/asyncToGenerator'));
var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/classCallCheck'));
var _createClass = _interopDefault(require('@babel/runtime/helpers/createClass'));
var _createSuper = _interopDefault(require('@babel/runtime/helpers/createSuper'));
var _inherits = _interopDefault(require('@babel/runtime/helpers/inherits'));
var hoistNonReactStatics = _interopDefault(require('hoist-non-react-statics'));

/* eslint-disable no-console */

/* eslint-disable indent */

/* eslint-disable no-nested-ternary */

/* eslint-disable no-self-compare */

/* eslint-disable prefer-const */

/* eslint-disable no-var */

/* eslint-disable no-plusplus */

/* eslint-disable no-lonely-if */

/* eslint-disable no-unused-expressions */

/* eslint-disable no-underscore-dangle */
var CONSTRUCTOR_CHECK = {
  string: String,
  number: Number,
  boolean: Boolean
};

var errorConsole = function errorConsole(parentObj, error, path) {
  var func = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var notFound = arguments.length > 4 ? arguments[4] : undefined;
  if (!func) console.log("%c".concat(notFound ? '%c key' : "".concat(parentObj, " %c is undefined"), "%c \"").concat(error, "\" %cnot found ").concat(notFound ? "in %c\"".concat(parentObj, "\"%c object") : '%c%c', " %c ").concat(path, " %c is invalid"), 'background: #000; color: red; font-size: 12px', 'background: #000; color: orange; font-size: 12px', 'background: #000; color: red; font-size: 12px', 'background: #000; color: orange; font-size: 12px', 'background: #000; color: green; font-size: 12px', 'background: #000; color: orange; font-size: 12px', 'background: #000; color: red; font-size: 12px', 'background: #000; color: orange; font-size: 12px');else console.log("%c".concat(parentObj, " %c is found %c \"").concat(error, "\" %c not a function %c ").concat(path, " %c is invalid"), 'background: #000; color: red; font-size: 12px', 'background: #000; color: orange; font-size: 12px', 'background: #000; color: red; font-size: 12px', 'background: #000; color: orange; font-size: 12px', 'background: #000; color: red; font-size: 12px', 'background: #000; color: orange; font-size: 12px');
};

var errorLog = function errorLog() {
  var e = new Error();
  var stack = e.stack.toString().split(/\r\n|\n/);
  console.log('Error :');
  stack.splice(0, 1);
  stack.map(function (err, index) {
    return console.log("[".concat(stack[stack.length - 1 - index], " ]"));
  }); // console.log(`[ Error ${stack[stack.length - 1]} ]`);
};
/**
 * Required parameter for nullcheck
 *  @param object parent object {},[] !9
 *  @param path  path to be execute eg: a.b.c.e()[0]().f !(Required)
 *  @param default  default value to be print if it is null or error (optional)
 *  @param func  function parameters [ [1],[2]] (optional)
 *  @param errorDisplay  whether to show error in console - default false (optional)
 */


var nullCheck = function nullCheck(Error) {
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var path = arguments.length > 2 ? arguments[2] : undefined;
  var def = arguments.length > 3 ? arguments[3] : undefined;
  var callBack = arguments.length > 4 ? arguments[4] : undefined;
  var func = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
  var errorDisplay = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var returnDefaultData = def !== undefined ? def : undefined;

  if (typeof path !== 'string') {
    if (errorDisplay) {
      console.log("%c[Object] path is invalid it should be string", 'background: #000; color: orange; font-size: 12px');
      errorLog(new Error());
    }

    return typeof callBack === 'function' ? callBack(returnDefaultData) : returnDefaultData;
  }

  var propNames = path.split(/\.|\[|\(/);
  propNames = propNames.map(function (prop) {
    return prop.replace(/\]|\(/g, '').replace(/\)/, '()');
  });
  var parent = propNames.splice(0, 1);

  if (!obj || _typeof(obj) !== 'object' || Object.keys(obj).length === 0) {
    if (errorDisplay) errorLog(new Error());
    return typeof callBack === 'function' ? callBack(returnDefaultData) : returnDefaultData;
  }

  var data = obj;
  var error = parent;
  var index = 0;
  var parentObj = error; // eslint-disable-next-line no-undef-init

  var type = undefined;

  for (var key = 0; key < propNames.length; key++) {
    if (data[propNames[key]] || typeof data === 'boolean' || Object.prototype.hasOwnProperty.call(data, propNames[key])) {
      if (Number(propNames[key]) || Number(propNames[key]) === 0) error = "".concat(error, "[").concat(propNames[key], "]");else error = "".concat(error, ".").concat(propNames[key]);
      data = data[propNames[key]];
      if (!data && typeof data !== 'boolean' && key === propNames.length - 1) return typeof callBack === 'function' ? callBack(def !== undefined ? def : data) : def !== undefined ? def : data;

      if (!data && typeof data !== 'boolean') {
        if (errorDisplay) {
          errorLog(new Error());
          errorConsole(parentObj, error, path);
        }

        return typeof callBack === 'function' ? callBack(def !== undefined ? def : data) : def !== undefined ? def : data;
      }

      if ((data || typeof data === 'boolean') && propNames[key + 1] && typeof data[propNames[key + 1]] === 'function') {
        type = data;
      }

      if (propNames[key + 1]) {
        if (propNames[key + 1] === '()' && typeof data !== 'function') {
          if (errorDisplay) {
            errorLog(new Error());
            errorConsole(parentObj, error, path, true);
          }

          return typeof callBack === 'function' ? callBack(returnDefaultData) : returnDefaultData;
        }

        if (_typeof(data) !== 'object' && propNames[key + 1] !== '()' && !data[propNames[key + 1]] && typeof data !== 'boolean') {
          if (errorDisplay) {
            errorLog(new Error());
            errorConsole(parentObj, error, path, false);
          }

          return typeof callBack === 'function' ? callBack(returnDefaultData) : returnDefaultData;
        }
      }
    } else if (propNames[key] === '()') {
      error = "".concat(error).concat(propNames[key]);

      if (typeof data === 'function') {
        if (CONSTRUCTOR_CHECK[_typeof(type)]) {
          if (func && func[index]) data = CONSTRUCTOR_CHECK[_typeof(type)].prototype[propNames[key - 1]].apply(type, func[index]);else data = CONSTRUCTOR_CHECK[_typeof(type)].prototype[propNames[key - 1]].call(type);
        } else {
          if (func && func[index]) data = data.apply(null, _toConsumableArray(func[index]));else data = data();
        }

        if (!data && typeof data !== 'boolean' && key === propNames.length - 1) return typeof callBack === 'function' ? callBack(def !== undefined ? def : data) : def !== undefined ? def : data;

        if (!data && typeof data !== 'boolean') {
          if (errorDisplay) {
            errorLog(new Error());
            errorConsole(parentObj, error, path);
          }

          return typeof callBack === 'function' ? callBack(def !== undefined ? def : data) : def !== undefined ? def : data;
        }
      } else {
        if (errorDisplay) {
          errorLog(new Error());
          errorConsole(parentObj, error, path, true);
        }

        return typeof callBack === 'function' ? callBack(returnDefaultData) : returnDefaultData;
      }

      if (!data && typeof data !== 'boolean' && key === propNames.length - 1) return typeof callBack === 'function' ? callBack(def !== undefined ? def : data) : def !== undefined ? def : data;

      if (!data && typeof data !== 'boolean') {
        if (errorDisplay) {
          errorLog(new Error());
          errorConsole(parentObj, error, path);
        }

        return typeof callBack === 'function' ? callBack(def !== undefined ? def : data) : def !== undefined ? def : data;
      }

      if ((data || typeof data === 'boolean') && propNames[key + 1] && typeof data[propNames[key + 1]] === 'function') {
        type = data;
      }

      if (propNames[key + 1]) {
        if (propNames[key + 1] === '()' && typeof data !== 'function') {
          if (errorDisplay) {
            errorLog(new Error());
            errorConsole(parentObj, error, path, true);
          }

          return typeof callBack === 'function' ? callBack(returnDefaultData) : returnDefaultData;
        }

        if (_typeof(data) !== 'object' && propNames[key + 1] !== '()' && !data[propNames[key + 1]] && typeof data !== 'boolean') {
          if (errorDisplay) {
            errorLog(new Error());
            errorConsole(parentObj, error, path, true);
          }

          return typeof callBack === 'function' ? callBack(returnDefaultData) : returnDefaultData;
        }
      }

      index += 1;
    } else {
      if (Number(propNames[key]) || Number(propNames[key]) === 0) error = "".concat(error, "[").concat(propNames[key], "]");else error = "".concat(error, ".").concat(propNames[key]);

      if (errorDisplay) {
        errorLog(new Error());
        errorConsole(error, propNames[key], path, false, true);
      }

      return typeof callBack === 'function' ? callBack(returnDefaultData) : returnDefaultData;
    }

    parentObj = error;
  }

  var verifyData = (data || typeof data === 'boolean') && Object.prototype.toString.call(def) !== '[object Null]' && typeof def !== 'undefined' && Object.prototype.toString.call(data) === Object.prototype.toString.call(def) ? data : typeof def !== 'undefined' && Object.prototype.toString.call(def) !== '[object Null]' ? def : data;
  return typeof callBack === 'function' ? callBack(verifyData) : verifyData;
};

var nullcheck = nullCheck.bind(null, Error);

var indianStates = [{
  label: 'Andaman and Nicobar Islands',
  value: 'Andaman and Nicobar Islands'
}, {
  label: 'Andhra Pradesh',
  value: 'Andhra Pradesh'
}, {
  label: 'Arunachal Pradesh',
  value: 'Arunachal Pradesh'
}, {
  label: 'Assam',
  value: 'Assam'
}, {
  label: 'Bihar',
  value: 'Bihar'
}, {
  label: 'Chandigarh',
  value: 'Chandigarh'
}, {
  label: 'Chhattisgarh',
  value: 'Chhattisgarh'
}, {
  label: 'Dadra and Nagar Haveli',
  value: 'Dadra and Nagar Haveli'
}, {
  label: 'Daman and Diu',
  value: 'Daman and Diu'
}, {
  label: 'Delhi',
  value: 'Delhi'
}, {
  label: 'Goa',
  value: 'Goa'
}, {
  label: 'Gujarat',
  value: 'Gujarat'
}, {
  label: 'Haryana',
  value: 'Haryana'
}, {
  label: 'Himachal Pradesh',
  value: 'Himachal Pradesh'
}, {
  label: 'Jammu and Kashmir',
  value: 'Jammu and Kashmir'
}, {
  label: 'Jharkhand',
  value: 'Jharkhand'
}, {
  label: 'Karnataka',
  value: 'Karnataka'
}, {
  label: 'Kerala',
  value: 'Kerala'
}, {
  label: 'Lakshadweep',
  value: 'Lakshadweep'
}, {
  label: 'Madhya Pradesh',
  value: 'Madhya Pradesh'
}, {
  label: 'Maharashtra',
  value: 'Maharashtra'
}, {
  label: 'Manipur',
  value: 'Manipur'
}, {
  label: 'Meghalaya',
  value: 'Meghalaya'
}, {
  label: 'Mizoram',
  value: 'Mizoram'
}, {
  label: 'Nagaland',
  value: 'Nagaland'
}, {
  label: 'Odisha',
  value: 'Odisha'
}, {
  label: 'Puducherry',
  value: 'Puducherry'
}, {
  label: 'Punjab',
  value: 'Punjab'
}, {
  label: 'Rajasthan',
  value: 'Rajasthan'
}, {
  label: 'Sikkim',
  value: 'Sikkim'
}, {
  label: 'Tamil Nadu',
  value: 'Tamil Nadu'
}, {
  label: 'Telangana',
  value: 'Telangana'
}, {
  label: 'Tripura',
  value: 'Tripura'
}, {
  label: 'Uttar Pradesh',
  value: 'Uttar Pradesh'
}, {
  label: 'Uttarakhand',
  value: 'Uttarakhand'
}, {
  label: 'West Bengal',
  value: 'West Bengal'
}];

var passwordReg = new RegExp(/^.{6,16}$/);
var emailReg = new RegExp('^([\\w\\.\\+\\-]+\\@[a-zA-Z0-9\\.\\-]+\\.[a-zA-z0-9]{2,4})$');
var mobileReg = new RegExp(/^\d{10,10}$/);
var nameReg = new RegExp('^[a-zA-Z ]+$');
var stringReg = new RegExp(/^[a-zA-Z0-9\s,'-]*$/);
var numberReg = new RegExp('^[\\d]+$');
var decimalReg = new RegExp('^[+-]?([0-9]*[.])?[0-9]+');
var postiveIntegerReg = new RegExp('^([1-9][0-9]+|[0-9])$');

/* eslint-disable */

function _isEmpty(value) {
  if (value && typeof value === 'string' && value.trim()) return false;
  if (typeof value === 'number' && (value || value === 0)) return false;
  return true;
}
function _isValidPassword(value) {
  return passwordReg.test(value.trim());
}
function _isValidEmail(value) {
  return emailReg.test(value.trim());
}
function _isValidMobile(value) {
  return mobileReg.test(value.trim());
}
function _isValidNumber(value) {
  return numberReg.test(value);
}
function _isValidFloatNumber(value) {
  return decimalReg.test(value);
}
function _isPostiveInteger(value) {
  return postiveIntegerReg.test(value);
}
function _isMatching(val1, val2) {
  // return type should be boolean
  if (val1 && val2 && typeof val1 === 'string' && typeof val2 === 'string' && val1.trim() == val2.trim()) return true;
  return false;
}
function _isValidName(value) {
  return nameReg.test(value.trim());
}
function _isValidString(value) {
  return stringReg.test(value.trim());
}
function _isValidTextAreaInput(value) {
  return value.length > 4 ? false : true;
}
function _isValidArray(value) {
  return value.length > 0 ? false : true;
}

/* eslint-disable no-underscore-dangle */

function validateForm(validationData) {
  // let value = this[`${type}Ref`].value(),
  var error = {
    isError: false
  }; // eslint-disable-next-line

  Object.entries(validationData).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        formObject = _ref2[1];

    var type = formObject.type,
        value = formObject.value,
        message = formObject.message,
        _formObject$optional = formObject.optional,
        optional = _formObject$optional === void 0 ? false : _formObject$optional,
        formatMessage = formObject.formatMessage,
        emptyMessage = formObject.emptyMessage,
        length = formObject.length,
        _formObject$regex = formObject.regex,
        regex = _formObject$regex === void 0 ? {} : _formObject$regex,
        callback = formObject.callback; // const isEmpty = validate._isEmpty(validationData[value].value);

    var isEmpty;

    if (!optional || value) {
      if (Array.isArray(value)) {
        isEmpty = !value.length > 0;
      } else {
        isEmpty = _isEmpty(value);
      }

      var typeMatch = {};
      if (typeof callback === 'function' && !isEmpty) error["".concat(key)] = callback({
        type: type,
        value: value,
        message: message,
        optional: optional,
        formatMessage: formatMessage,
        emptyMessage: emptyMessage,
        length: length,
        regex: regex
      }) || null;else if (!isEmpty) {
        // Add more cases depending upon the types that need to be checked
        // eslint-disable-next-line default-case
        switch (type) {
          case 'email':
            typeMatch.hasPassed = (regex.test || _isValidEmail)(value);

            if (!typeMatch.hasPassed) {
              error["".concat(key)] = message || 'Please enter Valid Email eg. (abc@abc.com)';
            }

            break;

          case 'mobile':
            typeMatch.hasPassed = _isValidMobile(value);

            if (!typeMatch.hasPassed) {
              error["".concat(key)] = message || 'Please enter Valid Mobile Number';
            }

            break;

          case 'password':
            typeMatch.hasPassed = (regex.test || _isValidPassword)(value);

            if (!typeMatch.hasPassed) {
              error["".concat(key)] = message || 'Passwords must contain at least 6 characters to 20 characters';
            }

            break;

          case 'confirmPassword':
            {
              // eslint-disable-line no-case-declarations
              // const password  = findKey(validationData, { type: 'password' });
              var password = validationData[key].compareValue;
              typeMatch.hasPassed = _isMatching(password, value);

              if (!typeMatch.hasPassed) {
                error["".concat(key)] = message || 'Password & Confirm password do not match';
              }

              break;
            }

          case 'string':
            typeMatch.hasPassed = (regex.test || _isValidString)(value);

            if (!typeMatch.hasPassed) {
              error["".concat(key)] = message || 'Invalid format';
            }

            break;

          case 'name':
            typeMatch.hasPassed = (regex.test || _isValidName)(value);

            if (!typeMatch.hasPassed) {
              error["".concat(key)] = formatMessage || 'Invalid format';
            }

            if (validationData[value] && value.length < (length === 0 ? length : 3)) {
              error["".concat(key)] = message || 'Name Must Be Greater Than 2 Characters';
            }

            break;

          case 'number':
            typeMatch.hasPassed = (regex.test || _isValidNumber)(value);

            if (!typeMatch.hasPassed) {
              error["".concat(key)] = message || 'Invalid format';
            }

            break;

          case 'float':
            typeMatch.hasPassed = (regex.test || _isValidFloatNumber)(value);

            if (!typeMatch.hasPassed) {
              error["".concat(key)] = message || 'Invalid format';
            }

            break;

          case 'postiveIntegerReg':
            typeMatch.hasPassed = (regex.test || _isPostiveInteger)(value);

            if (!typeMatch.hasPassed) {
              error["".concat(key)] = message || 'Enter a valid input';
            }

            break;

          case 'array':
            typeMatch.hasPassed = _isValidArray(value);

            if (typeMatch.hasPassed) {
              error["".concat(key)] = message || 'Please upload Images';
            }

            break;

          case 'textarea':
            typeMatch.hasPassed = _isValidTextAreaInput(value);

            if (typeMatch.hasPassed) {
              error["".concat(key)] = message || 'Description should be of mininum 5 characters';
            }

            break;

          case 'dateString':
            typeMatch.hasPassed = _isValidTextAreaInput(value);

            if (typeMatch.hasPassed) {
              error["".concat(key)] = message || 'Description should be of mininum 5 characters';
            }

            break;
        }
      } else {
        error[key] = validationData[key].type === 'mobile' ? emptyMessage || 'Please enter Valid Mobile Number' : emptyMessage || 'Please provide the necessary details';
      }
    }
  });

  if (Object.keys(error).length > 1) {
    error.isError = true;
  }

  return error;
}

var cloneObject = function cloneObject(oldState) {
  var newState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.assign({}, oldState, newState);
};
var newObject = function newObject() {
  var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return rest.reduce(function (acc, curr) {
    return cloneObject(acc, typeof curr === 'function' && curr(oldState, acc) || curr);
  }, cloneObject(oldState));
};

function deleteIn(obj, arr) {
  var i = 0;
  var o = obj;

  function update() {
    if (Array.isArray(o)) {
      return function () {
        var a = !(arr.length - 1 === i && +arr[i] >= o.slice().length) ? o.slice().map(function (data, ind) {
          if (+arr[i] === ind) {
            if (arr.length - 1 === i) {
              if (Array.isArray(o)) o.splice(+arr[i], 1);else delete o[arr[i]];
              return Array.isArray(o) ? null : o;
            }

            return function () {
              o = data;
              i += 1;
              return update();
            }();
          }

          return data;
        }).filter(function (e) {
          return e;
        }) : function () {
          if (arr.length - 1 === i) {
            if (Array.isArray(o)) o.splice(+arr[i], 1);else delete o[arr[i]];
            return o;
          }

          return o;
        }();
        return a;
      }();
    }

    return function () {
      if (arr.length - 1 === i) {
        delete o[arr[i]];
        return o;
      }

      return cloneObject(o, _defineProperty({}, arr[i], function () {
        o = o[arr[i]];
        i += 1;
        return update();
      }()));
    }();
  }

  return update();
}

/* eslint-disable no-nested-ternary */

/* eslint-disable indent */
function getIn(obj, arr) {
  var i = 0;
  var o = obj;

  function get() {
    return arr.length > 0 && arr.length - 1 === i ? typeof o === 'undefined' || o === null ? o : o[arr[i]] : function () {
      if (typeof o === 'undefined' || o === null) return o;
      o = o[arr[i]];
      i += 1;
      return get();
    }();
  }

  return arr.length > 0 ? get() : obj;
}

/* eslint-disable no-restricted-syntax */

/* eslint-disable no-continue */
function objectEquals(x, y) {
  if (x === y) return true; // if both x and y are null or undefined and exactly the same

  if (!(x instanceof Object) || !(y instanceof Object)) return false; // if they are not strictly equal, they both need to be Objects

  if (x.constructor !== y.constructor) return false; // they must have the exact same prototype chain, the closest we can do is
  // test there constructor.

  for (var _i = 0, _Object$entries = Object.entries(x); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 1),
        p = _Object$entries$_i[0];

    if (!(p in x)) continue; // other properties were tested using x.constructor === y.constructor

    if (!(p in y)) return false; // allows to compare x[ p ] and y[ p ] when set to undefined

    if (x[p] === y[p]) continue; // if they have the same strict value or identity then they are equal

    if (_typeof(x[p]) !== 'object') return false; // Numbers, Strings, Functions, Booleans must be strictly equal

    if (!Object.equals(x[p], y[p])) return false; // Objects and Arrays must be tested recursively
  }

  for (var _i2 = 0, _Object$entries2 = Object.entries(y); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 1),
        _p = _Object$entries2$_i[0];

    if (_p in y && !(_p in x)) return false; // allows x[ p ] to be set to undefined
  }

  return true;
}

function setIn(obj, arr, value) {
  var i = 0;
  var o = obj;

  function update() {
    if (Array.isArray(o)) {
      return function () {
        var a = !(arr.length - 1 === i && +arr[i] >= o.slice().length) ? o.slice().map(function (data, ind) {
          if (+arr[i] === ind) {
            return arr.length - 1 === i ? value : function () {
              o = data;
              i += 1;
              return update();
            }();
          }

          return data;
        }) : function () {
          o[+arr[i]] = value;
          return o;
        }();
        return a;
      }();
    }

    return cloneObject(o, _defineProperty({}, arr[i], arr.length - 1 === i ? value : function () {
      o = o[arr[i]] || {};
      i += 1;
      return update();
    }()));
  }

  return update();
}

function updateIn(obj) {
  var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var i = 0;
  var o = obj;

  function update() {
    if (Array.isArray(o)) {
      return o.slice().map(function (data, ind) {
        if (+arr[i] === ind) {
          return arr.length - 1 === i ? callback(data) : function () {
            o = data;
            i += 1;
            return update();
          }();
        }

        return data;
      });
    }

    return cloneObject(o, _defineProperty({}, arr && arr[i], arr.length - 1 === i ? callback(o[arr[i]]) : function () {
      o = o[arr[i]] || {};
      i += 1;
      return update();
    }()));
  }

  return arr.length > 0 ? update() : obj;
}

var generateTimeStamp = function generateTimeStamp() {
  return new Date().getTime();
};
var toCapitalize = function toCapitalize(string) {
  return string && typeof string === 'string' ? string.charAt(0).toUpperCase() + string.slice(1) : null;
};
var type = {
  '[object Null]': 'null',
  '[object Undefined]': 'undefined',
  '[object String]': 'string',
  '[object Array]': 'array',
  '[object Boolean]': 'boolean',
  '[object Object]': 'object',
  '[object Function]': 'function',
  '[object Error]': 'error' // '[object Symbol]': 'symbol',
  // '[object GeneratorFunction]': 'generatorFunction',

};
var typeOf = function typeOf(_obj) {
  return type[Object.prototype.toString.call(_obj)] || _typeof(_obj);
};

var ON_CANCEL_ERROR = 'API_CANCEL_ERROR';
var ON_ERROR = 'ERROR';
var ON_SUCCESS = 'SUCCESS';
var ON_FINALLY = 'FINALLY';
var ON_CANCEL = 'CANCEL';
var ON_REQUEST = 'REQUEST';
var ON_LOADING = 'LOADING';
var ON_UNMOUNT = 'UNMOUNT';
var ON_TOAST = 'TOAST';
var ERROR = 'ERROR';
var SUCCESS = 'SUCCESS';
var CALL = 'CALL';
var CANCEL = 'CANCEL';
var CUSTOM = 'CUSTOM_TASK';
var commonConstants = {
  ON_CANCEL_ERROR: ON_CANCEL_ERROR,
  ON_ERROR: ON_ERROR,
  ON_SUCCESS: ON_SUCCESS,
  ON_FINALLY: ON_FINALLY,
  ON_CANCEL: ON_CANCEL,
  ON_REQUEST: ON_REQUEST,
  ON_LOADING: ON_LOADING,
  ON_UNMOUNT: ON_UNMOUNT,
  ON_TOAST: ON_TOAST,
  ERROR: ERROR,
  SUCCESS: SUCCESS,
  CALL: CALL,
  CANCEL: CANCEL,
  CUSTOM: CUSTOM
};

var cache = {};
var cacheActions = {};
var safe = nullcheck;
var getData = function getData(data, def) {
  var loader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var filter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  return _objectSpread({}, safe(data, "".concat(filter.length ? '.data.' : '').concat(filter.join('.')), {}), {
    data: safe(data, ".data".concat(filter.length ? '.' : '').concat(filter.join('.')).concat(filter.length ? '.data' : ''), def),
    loader: safe(data, "".concat(filter.length ? '.data.' : '').concat(filter.join('.'), ".loading.status"), typeof loader !== 'boolean' ? false : loader),
    lastUpdated: safe(data, "".concat(filter.length ? '.data.' : '').concat(filter.join('.'), ".lastUpdated")),
    isInfinite: safe(data, "".concat(filter.length ? '.data.' : '').concat(filter.join('.'), ".isInfinite"), false),
    infiniteEnd: safe(data, "".concat(filter.length ? '.data.' : '').concat(filter.join('.'), ".infiniteEnd"), false),
    isError: safe(data, "".concat(filter.length ? '.data.' : '').concat(filter.join('.'), ".isError"), false),
    toast: safe(data, "".concat(filter.length ? '.data.' : '').concat(filter.join('.'), ".toast"), {}),
    error: safe(data, "".concat(filter.length ? '.data.' : '').concat(filter.join('.'), ".error"), {})
  });
};

var checkKey = function checkKey(key, name, dataType, message) {
  invariant(typeOf(key) === dataType, "(react-boilerplate-redux-saga-hoc)  Expected `".concat(name, "` to be  ").concat(message || dataType));
};

var checkKeyWithMessage = function checkKeyWithMessage(key, dataType, message) {
  invariant(typeOf(key) === dataType, message);
};

var previousData = new Map();
var initialRender = new Map();
var previousCallbackData = new Map();
var previousDependencyArrayData = new Map();
var isPreviousDependencyArrayCheckPassed = new Map(); // const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

var useQuery = function useQuery() {
  var _name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var __config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _callback = arguments.length > 3 ? arguments[3] : undefined;

  var _callbackSuccess = arguments.length > 4 ? arguments[4] : undefined;

  var _ref18 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {},
      _ref18$refreshKey = _ref18.refreshKey,
      _refreshKey = _ref18$refreshKey === void 0 ? undefined : _ref18$refreshKey;

  var _ref19 = typeOf(_name) === 'object' ? _name : {
    reducerName: _name,
    key: _array,
    config: __config,
    callback: _callback,
    callbackSuccess: _callbackSuccess,
    refreshKey: _refreshKey
  },
      name = _ref19.reducerName,
      array = _ref19.key,
      config = _ref19.config,
      callback = _ref19.callback,
      callbackSuccess = _ref19.callbackSuccess,
      refreshKey = _ref19.refreshKey;

  if (name) checkKey(name, 'reducer name', 'string', 'valid string'); // const store = useStore();

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 1),
      _key = _useState2[0];

  var exeuteRequiredData = React.useCallback(function (_data) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var initialData = (e.requiredKey || []).reduce(function (acc, _reqKey) {
      return _objectSpread({}, acc, {}, _reqKey && typeOf(_reqKey.key || _reqKey) === 'string' ? typeOf(_reqKey) === 'string' ? _defineProperty({}, _reqKey, undefined) : _defineProperty({}, _reqKey.key, _reqKey.default) : {});
    }, {});
    return e && e.requiredKey && Array.isArray(e.requiredKey) && e.requiredKey.length > 0 && typeOf(_data) === 'object' ? e.requiredKey.reduce(function (acc, _reqKey) {
      return _objectSpread({}, acc, {}, _reqKey && typeOf(_reqKey.key || _reqKey) === 'string' ? _defineProperty({}, _reqKey.key || _reqKey, typeOf(_data[_reqKey.key || _reqKey]) !== undefined ? _data[_reqKey.key || _reqKey] : _reqKey.default) : {});
    }, _objectSpread({}, initialData)) : e && e.requiredKey ? _data || _objectSpread({}, initialData) : _data;
  }, [refreshKey]);

  var _checkFilter = React.useCallback(function (e) {
    return e && e.filter ? Array.isArray(e.filter) ? e.filter : typeof e.filter === 'string' ? [e.filter] : undefined : undefined;
  }, []);

  var _getData = React.useCallback(function () {
    var ee = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isString = arguments.length > 1 ? arguments[1] : undefined;

    var _state = arguments.length > 2 ? arguments[2] : undefined;

    var state = _state || {};

    var _getDataFunc = function _getDataFunc(e) {
      var regex = "app/containers/".concat(name, "/+.*?_CALL");
      var isSearchMatched = ((isString ? array : e.key) || '').search(regex);
      return (typeof e.defaultDataFormat === 'boolean' || isSearchMatched || !(isString ? array : e.key) ? !e.defaultDataFormat || isSearchMatched || !(isString ? array : e.key) : false) ? (isString ? array : e.key) ? safe(state, "[".concat(isString ? array : e.key, "]").concat(e.query ? e.query : ''), e.default) : // : name
      // ? safe(state, `${e.query ? e.query : ''}`, e.default)
      safe(state, "".concat(e.query ? e.query : ''), e.default) : safe(getData(safe(state, "[".concat(isString ? array : e.key, "]")), e.query ? undefined : e.default || undefined, e.initialLoaderState || false, _checkFilter(e), e.dataQuery), "".concat(e.query && typeOf(e.query) === 'string' ? e.query : ''), e.query ? e.default !== undefined ? e.default : undefined : undefined);
    };

    return Array.isArray(ee.query) ? ee.query.reduce(function (acc, _query) {
      return acc.concat([_getDataFunc(_objectSpread({}, ee, {
        query: _query.key || _query,
        default: _query.default || undefined
      }))]);
    }, []) : _getDataFunc(ee);
  }, [refreshKey]);

  var _GetData = React.useCallback(function (_state) {
    var state = _state || {};
    var _data = {};

    if (name && (Array.isArray(array) && array.length > 0 || typeOf(array) === 'object' && Object.keys(array).length > 0)) {
      // eslint-disable-next-line consistent-return
      // eslint-disable-next-line no-underscore-dangle
      _data = (typeOf(array) === 'object' ? [array] : array).reduce(function (acc, e) {
        if (typeOf(e) === 'object') {
          if (typeOf(array) === 'object') return exeuteRequiredData(_getData(e, undefined, state), e);

          var _arr2 = acc.slice();

          _arr2.push(exeuteRequiredData(_getData(e, undefined, state), e));

          return _arr2;
        } // Below condition ( one config for all the keys )


        if (typeOf(e) === 'string' && typeOf(config) === 'object') {
          var _config = _objectSpread({
            key: e
          }, config);

          if (typeOf(array) === 'object') return exeuteRequiredData(_getData(_config, undefined, state), _config);

          var _arr3 = acc.slice();

          _arr3.push(exeuteRequiredData(_getData(_config, undefined, state), _config));

          return _arr3;
        }

        if (typeOf(array) === 'object') return safe(state, "[".concat(e.key, "]"));

        var _arr = acc.slice();

        _arr.push(safe(state, "[".concat(e, "]")));

        return _arr;
      }, typeOf(array) === 'object' ? {} : []); // if()
    } else if (typeof array === 'string' && config && typeOf(config) === 'array') _data = config.reduce(function (acc, _config) {
      return [].concat(_toConsumableArray(acc), [exeuteRequiredData(_getData(_config, true, state), _config)]);
    }, []);else if (typeof array === 'string') _data = exeuteRequiredData(_getData(config, true, state), config);else if (name) _data = state;else _data = state || {};

    return _data;
  }, [refreshKey]);

  var execute = React.useCallback(function (state) {
    var _queryData = previousData.get(_key);

    var isPassed = isPreviousDependencyArrayCheckPassed.get(_key);

    if ((config && config.dependencyArray && !Array.isArray(config.dependencyArray)) && !isPassed) {
      invariant(false, "dependencyArray expected an array but got ".concat(typeOf(config.dependencyArray)));
    } else if (isPassed || config && config.dependencyArray && Array.isArray(config.dependencyArray)) {
      if (!isPassed && config.dependencyArray.filter(function (e) {
        return typeof e !== 'string';
      })[0]) invariant(false, 'dependencyArray must be array of string');else {
        if (!isPassed) isPreviousDependencyArrayCheckPassed.set(_key, true);

        var _next = config.dependencyArray.map(function (_e) {
          return safe(state, _e);
        });

        var _previous = previousDependencyArrayData.get(_key);

        previousDependencyArrayData.set(_key, _next);

        if (isEqual(_previous, _next)) {
          return {
            isEqualCheck: true,
            data: previousCallbackData.get(_key) || _queryData
          };
        }
      }
    } // const state = safe(store, `.getState()`);
    // eslint-disable-next-line no-underscore-dangle


    var _data = _GetData(state);

    var _isEqual = isEqual(_data, _queryData);

    if (!_isEqual) {
      // previousData[`${key || name}_${_key}`] = _data;
      var callbackData;
      previousData.set(_key, _data // _data && typeof _data === 'object'
      //   ? JSON.parse(JSON.stringify(_data))
      //   : _data,
      );
      if (callback && typeof callback === 'function') callbackData = callback(_data);

      if (callbackData) {
        _queryData = callbackData;
        previousCallbackData.set(_key, callbackData);
      } else {
        previousCallbackData.set(_key, null);
        _queryData = _data;
      }
    } else _queryData = previousCallbackData.get(_key) || _queryData;

    previousData.set(_key, _data);
    return {
      data: _queryData // previousData: previousCallbackData.get(_key) || previousData.get(_key),

    };
  }, [refreshKey]); // const [executedData, setData] = useState(() => execute(store.getState()));
  // useEffect(() => {
  //   const unSubscribe = store.subscribe(execute);
  //   return () => {
  //     delete previousData.delete(_key);
  //     unSubscribe();
  //   };
  // }, []);
  // useEffect(() => {
  //   previousData.set(_key, {});
  //   if (
  //     !isEqual(previousConfig.get(_key), {
  //       array,
  //       config,
  //     })
  //   ) {
  //     previousConfig.set(_key, {
  //       array,
  //       config,
  //     });
  //     execute();
  //   }
  // }, [config, array]);

  React.useEffect(function () {
    previousData.set(_key, {});
    initialRender.set(_key, true); // const unSubscribe = store.subscribe(() => {
    //   const _data2 = execute(store.getState());
    //   if (
    //     (!_data2.isEqualCheck || initialRender.get(_key)) &&
    //     typeof callbackSuccess === 'function'
    //   ) {
    //     initialRender.set(_key, false);
    //     callbackSuccess(_data2.data, _data2.previousData);
    //   }
    //   if (!_data2.isEqualCheck) {
    //     setData(_data2);
    //   }
    // });

    return function () {
      // unSubscribe();
      previousData.delete(_key);
      previousCallbackData.delete(_key);
      initialRender.delete(_key);
      previousDependencyArrayData.delete(_key);
    };
  }, []);
  var equalityCheckFunction = React.useCallback(function (e, f) {
    var _isEqual = typeof e.isEqualCheck === 'undefined' ? isEqual(e.data, f.data) : e.isEqualCheck; // const _isEqual = e.isEqualCheck ? true : isEqual(e.data, f.data);


    if ((!_isEqual || initialRender.get(_key)) && typeof callbackSuccess === 'function') {
      initialRender.set(_key, false);
      callbackSuccess(e.data
      /* Updated Data */
      , f.data
      /* Previous Data */
      );
    }

    return _isEqual;
  }, []);
  var selectReducerKey = React.useMemo(function () {
    var _arr = [];

    var executeRequiredKey = function executeRequiredKey(_requiredKey) {
      return _requiredKey.forEach(function (e) {
        if (typeof e === 'string') _arr.push(e);else if (typeOf(e) === 'object' && e.key) _arr.push(e.key);
      });
    };

    if (typeof array === 'string' && array) _arr.push(array);else if (Array.isArray(array) || typeOf(array) === 'object') (Array.isArray(array) ? array : [array]).forEach(function (arr) {
      if (typeof arr === 'string') _arr.push(arr);else if (typeOf(arr) === 'object') {
        if (arr.key) {
          _arr.push(arr.key);
        } else if (Array.isArray(arr.requiredKey) && arr.requiredKey.length > 0) {
          executeRequiredKey(arr.requiredKey);
        } else if (arr.query) {
          var getKey = function getKey(_query) {
            return _query[0] === '.' ? _query.split('.')[1] : _query.split('.')[0];
          };

          if (typeof arr === 'string') _arr.push(getKey(arr));else if (Array.isArray(arr.query) && arr.query.length > 0) arr.query.forEach(function (e) {
            if (typeof e === 'string') _arr.push(getKey(e));else if (typeOf(e) === 'object' && e.key) _arr.push(getKey(e.key));
          });
        }
      }
    });
    return _arr;
  }, [refreshKey]);
  var selectState = React.useMemo(function () {
    if (selectReducerKey && selectReducerKey.length) {
      var _arr = [];
      selectReducerKey.forEach(function (_k) {
        return _arr.push(function (state) {
          return state[name] && state[name][_k];
        });
      });
      if (_arr.length > 0) return _arr;
    }

    return [function (state) {
      return state[name];
    }];
  }, [selectReducerKey]);
  var executeSelector = React.useCallback(function () {
    for (var _len = arguments.length, rest = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      rest[_key2] = arguments[_key2];
    }

    if (selectReducerKey.length > 0 || typeOf(array) === 'object' && !array.key && array.requiredKey) {
      if (typeOf(array) === 'object' && !array.key && array.requiredKey) {
        if (Array.isArray(array.requiredKey) && array.requiredKey.length) return {
          data: array.requiredKey.reduce(function (acc, curr, i) {
            if (typeOf(curr) === 'object') return _objectSpread({}, acc, _defineProperty({}, curr, rest[i] === undefined ? curr && curr.default : rest[i]));
            return _objectSpread({}, acc, _defineProperty({}, curr, rest[i]));
          }, {})
        };
        return {
          data: {}
        };
      }

      var _stateObj = selectReducerKey.reduce(function (acc, curr, i) {
        return _objectSpread({}, acc, _defineProperty({}, curr, rest[i]));
      }, {});

      return execute(_stateObj);
    }

    return execute(rest[0]);
  }, [selectReducerKey, refreshKey]);
  var createdSelector = React.useMemo(function () {
    return reselect.createSelector(selectState, executeSelector);
  }, [executeSelector, selectState]);

  var _selectorData = reactRedux.useSelector( // execute,
  // createSelector(state => (!name ? state : state[name]), execute),
  !name || !array ? execute : createdSelector, !name || !array ? undefined : equalityCheckFunction);

  return _selectorData.data;
};
var useActionsHook = function useActionsHook() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var dispatch = reactRedux.useDispatch();

  var _useState3 = React.useState(!actions ? cacheActions[name] || {} : redux.bindActionCreators(actions, dispatch)),
      _useState4 = _slicedToArray(_useState3, 2),
      dispatchAction = _useState4[0],
      setDispatchAction = _useState4[1];

  React.useEffect(function () {
    if (!isEqual(cacheActions[name], actions)) {
      cacheActions[name] = actions;
      cache[name] = redux.bindActionCreators(actions, dispatch);
      setDispatchAction(cache[name]);
    } else setDispatchAction(cache[name]);
  }, [isEqual(cacheActions[name], actions)]);
  return dispatchAction;
};
/** example
 * const mutateState = useMutation(reducerName);
 * mutateState({
 *   key: DEMP_API,
 *   value: {
 *     data: {}
 *   }
 *   filter: []
 * })
 */

var useMutation = function useMutation(reducerName) {
  if (!reducerName) checkKeyWithMessage(reducerName, 'string', 'useMutation(`reducerkey`) : Expected a valid reducer key');
  var store = reactRedux.useStore();
  React.useEffect(function () {
    if (reducerName) checkKeyWithMessage(reducerName, 'string', 'useMutation(`reducerkey`) : Expected a reducer key to be string');
    if (!store.getState()[reducerName]) checkKeyWithMessage(null, 'string', " reducerName '".concat(reducerName, "' not a valid reducer key."));
  }, []);
  var dispatch = reactRedux.useDispatch();

  var _callback = React.useCallback(function (_ref23) {
    var type = _ref23.key,
        value = _ref23.value,
        _ref23$filter = _ref23.filter,
        filter = _ref23$filter === void 0 ? [] : _ref23$filter;
    if (!type) checkKey(null, 'key', 'string', 'valid string');

    var _reducer_keys = Object.keys(store.getState()[reducerName]);

    if (type) invariant(_reducer_keys.includes(type), // type.includes('_CALL') && type.slice(-5) === '_CALL',
    "'key' is invalid.".concat(type, " not found in ").concat(reducerName, " reducer"));
    checkKey(filter, 'filter', 'array');
    checkKey(type, 'key', 'string');
    var regex = "app/containers/".concat(reducerName, "/+.*?_CALL");
    var isSearchMatched = (type || '').search(regex);

    if (type.includes('_CALL') && type.slice(-5) === '_CALL' && isSearchMatched && filter && Array.isArray(filter)) {
      // checkKey(value, 'value', 'object');
      dispatch({
        type: type.slice(0, -4).concat('CUSTOM_TASK'),
        response: {
          type: type,
          method: ON_SUCCESS,
          statusCode: 200,
          mutation: true,
          customTask: true,
          data: {
            data: typeof value === 'function' ? value(store.getState()[reducerName][type]) : value
          },
          payload: {
            filter: filter
          }
        }
      });
    } else dispatch({
      type: "".concat(reducerName, "_MUTATE_STATE"),
      payload: _defineProperty({}, type, typeof value === 'function' ? value(store.getState()[reducerName][type]) : value)
    });
  }, []);

  return _callback;
};
/** example
 * async function() {
 *   const { data, status } = await toPromise(DEMP_API_CALL, { task: 'Data-Handler' });
 * }
 */

var toPromise = function toPromise(action) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isReject = arguments.length > 2 ? arguments[2] : undefined;
  if (typeOf(config) !== 'null' || typeOf(config) !== 'undefined') checkKeyWithMessage(config, 'object', "toPromise() : Expected a config (second parameter) to be object");
  return new Promise(function (resolve, reject) {
    return action(_objectSpread({}, config, {
      resolve: resolve,
      reject: reject,
      isReject: isReject
    }));
  });
};
/** example
 * const asyncFunction = toPromiseFunction(DEMP_API_CALL);
 * async function() {
 *   const { data, status } = await asyncFunction({ task: 'Data-Handler' });
 * }
 */

var toPromiseFunction = function toPromiseFunction(action) {
  return function (config, isReject) {
    if (typeOf(config) !== 'null' || typeOf(config) !== 'undefined') checkKeyWithMessage(config, 'object', "toPromise() : Expected a config (first parameter) to be object");
    return new Promise(function (resolve, reject) {
      return action(_objectSpread({}, config, {
        resolve: resolve,
        reject: reject,
        isReject: isReject
      }));
    });
  };
};
var CACHE = {};

function stringify(val) {
  return _typeof(val) === 'object' ? JSON.stringify(val) : String(val);
}

function hashArgs() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return args.reduce(function (acc, arg) {
    return "".concat(stringify(arg), ":").concat(acc);
  }, '');
}
/* Example => used for background refresh it won't trigger the loader everytime api starts
  const pollingConfig = {
    request: {
      polling: true,
      delay: 8000,
    },
  };
  const [refresh, isUpdating] = useStaleRefresh(
    VENDORS_GET_DASBOARD_API_CALL,
    VENDORS_GET_DASBOARD_API,
    pollingConfig,
  );
  const [refreshOrders, isUpdating] = useStaleRefresh(
    VENDORS_GET_ORDERS_BY_DAY_API_CALL,
    VENDORS_GET_ORDERS_BY_DAY_API,
    pollingConfig,
  );
  useEffect(() => {
    function pollingStart() {
      /// refresh({loader, clearData, config}); optional parameters
      refreshOrders();
    }
    function pollingEnd() {
      VENDORS_GET_DASBOARD_API_CANCEL();
      VENDORS_GET_ORDERS_BY_DAY_API_CANCEL();
    }
    pollingStart();
    window.addEventListener('online', pollingStart);
    window.addEventListener('offline', pollingEnd);
    return () => {
      window.removeEventListener('online', pollingStart);
      window.removeEventListener('offline', pollingEnd);
      VENDORS_GET_DASBOARD_API_CANCEL();
      VENDORS_GET_ORDERS_BY_DAY_API_CANCEL();
    };
  }, []);
 */


function useStaleRefresh(fn, name) // initialLoadingstate = true,
{
  var arg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var initial = arguments.length > 3 ? arguments[3] : undefined;
  var prevArgs = React.useRef(null);

  var _useState5 = React.useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      isUpdating = _useState6[0],
      setIsUpdating = _useState6[1];

  var refresh = React.useCallback(function () {
    var _ref24 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        loader = _ref24.loader,
        clearData = _ref24.clearData,
        config = _ref24.config;

    var args = config || arg;
    var cacheID = hashArgs(name, args); // look in cache and set response if present
    // fetch new data

    if (CACHE[cacheID]) setIsUpdating(true);
    toPromise(fn, Object.assign({}, args, CACHE[cacheID] && !loader ? {
      initialCallData: CACHE[cacheID]
    } : {}, clearData ? {
      task: args.task ? _objectSpread({}, args.task, {
        clearDataOnStart: true
      }) : {
        clearDataOnStart: true
      }
    } : {})).then(function (newData) {
      if (CACHE[cacheID]) setIsUpdating(false);

      if (newData && newData.status === 'SUCCESS') {
        CACHE[cacheID] = newData.data; // setData(newData);
      } // setLoading(false);

    });
  }, [arg, initial]);
  React.useEffect(function () {
    // args is an object so deep compare to rule out false changes
    if (isEqual(arg, prevArgs.current)) {
      return;
    }

    if (initial) refresh(); // cacheID is how a cache is identified against a unique request
  }, [arg, fn, name, initial]);
  React.useEffect(function () {
    prevArgs.current = arg;
  });
  return [refresh, isUpdating];
}
/** example
 * const mutateReducer = useMutateReducer(reducerName);
 * mutateReducer(state => state)
 */

var useMutateReducer = function useMutateReducer(reducerName) {
  var store = reactRedux.useStore();
  var dispatch = reactRedux.useDispatch();

  var _callback = React.useCallback(function (callback) {
    var state = reducerName ? store.getState()[reducerName] : store.getState();
    var newState = callback(state);
    if (newState) dispatch({
      type: reducerName ? "".concat(reducerName, "_MUTATE_STATE") : 'MUTATE_STATE',
      payload: newState || {}
    });
  }, []);

  return _callback;
};
/** example
 * const resetState = useResetState(reducerName);
 * const dontResetKeys = ['isLoggedIn'];
 * resetState(dontResetKeys); it will reset state to initial state except some dontResetKeys
 */

var useResetState = function useResetState(reducerName) {
  var dispatch = reactRedux.useDispatch();

  var _callback = React.useCallback(function () {
    var dontResetKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    dispatch({
      type: reducerName ? "".concat(reducerName, "_RESET_STATE") : 'RESET_STATE',
      payload: dontResetKeys
    });
  }, []);

  return _callback;
};
/** example
 * const resetState = useResetOnlyApiEndPointsState(reducerName);
 * const dontResetKeys = ['isLoggedIn'];
 * resetState(dontResetKeys); it will reset only endpoints to initial state except some dontResetKeys
 */

var useResetOnlyApiEndPointsState = function useResetOnlyApiEndPointsState(reducerName) {
  var dispatch = reactRedux.useDispatch();

  var _callback = React.useCallback(function () {
    var dontResetKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    dispatch({
      type: reducerName ? "".concat(reducerName, "_RESET_API") : 'RESET_API',
      payload: dontResetKeys
    });
  }, []);

  return _callback;
};

var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = {
  type: CHANNEL_END_TYPE
};

if (process.env.NODE_ENV !== 'production') ;

function withReduxSaga() {
  var BaseComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var WrappedComponent = /*#__PURE__*/function (_Component) {
    _inherits(WrappedComponent, _Component);

    var _super = _createSuper(WrappedComponent);

    function WrappedComponent() {
      _classCallCheck(this, WrappedComponent);

      return _super.apply(this, arguments);
    }

    _createClass(WrappedComponent, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default.createElement(BaseComponent, this.props);
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
          var props,
              isServer,
              store,
              pageProps,
              _args = arguments;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  props = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                  isServer = props.ctx ? props.ctx.isServer : props.isServer;
                  store = props.ctx ? props.ctx.store : props.store;
                  pageProps = {};

                  if (!BaseComponent.getInitialProps) {
                    _context.next = 8;
                    break;
                  }

                  _context.next = 7;
                  return BaseComponent.getInitialProps(props);

                case 7:
                  pageProps = _context.sent;

                case 8:
                  if (!isServer) {
                    _context.next = 17;
                    break;
                  }

                  store.dispatch(END);

                  if (!store.sagaTask.toPromise) {
                    _context.next = 15;
                    break;
                  }

                  _context.next = 13;
                  return store.sagaTask.toPromise();

                case 13:
                  _context.next = 17;
                  break;

                case 15:
                  _context.next = 17;
                  return store.sagaTask.done;

                case 17:
                  return _context.abrupt("return", pageProps);

                case 18:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function getInitialProps() {
          return _getInitialProps.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return WrappedComponent;
  }(React.Component);

  _defineProperty(WrappedComponent, "displayName", "withReduxSaga(".concat(BaseComponent.displayName || BaseComponent.name || 'BaseComponent', ")"));

  return WrappedComponent;
}

function CustomError(err) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var fileName = arguments.length > 2 ? arguments[2] : undefined;
  var lineNumber = arguments.length > 3 ? arguments[3] : undefined;
  var instance = new Error(message, fileName, lineNumber);
  instance = err;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));

  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }

  return instance;
}

CustomError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if (Object.setPrototypeOf) {
  Object.setPrototypeOf(CustomError, Error);
}

/* eslint-disable */

function _instanceof(left, right) {
  if (right != null && typeof Symbol !== 'undefined' && right[Symbol.hasInstance]) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

var __extends =  function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || _instanceof({
      __proto__: []
    }, Array) && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign =  function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter =  function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return _instanceof(value, P) ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator['throw'](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator =  function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    throw: verb(1),
    return: verb(2)
  }, typeof Symbol === 'function' && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __rest =  function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === 'function') for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __importStar =  function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result['default'] = mod;
  return result;
};

Object.defineProperty(typeof exports !== 'undefined' ? exports : {}, '__esModule', {
  value: true
});

var react_1 = __importStar(require('react'));

var defaultConfig = {
  storeKey: '__NEXT_REDUX_STORE__',
  debug: false,
  serializeState: function serializeState(state) {
    return state;
  },
  deserializeState: function deserializeState(state) {
    return state;
  }
};
function withRedux (makeStore, config) {
  config = __assign(__assign({}, defaultConfig), config);
  var isServer = typeof window === 'undefined';

  var initStore = function initStore(_a) {
    var initialState = _a.initialState,
        ctx = _a.ctx;
    var storeKey = config.storeKey;

    var createStore = function createStore() {
      return makeStore(config.deserializeState(initialState), __assign(__assign(__assign({}, ctx), config), {
        isServer: isServer
      }));
    };

    if (isServer) return createStore(); // Memoize store if client

    if (!(storeKey in window)) {
      window[storeKey] = createStore();
    }

    return window[storeKey];
  };

  return function (App) {
    var _a;

    return _a =
    /** @class */
    function (_super) {
      __extends(WrappedApp, _super);

      function WrappedApp(props, context) {
        var _this = _super.call(this, props, context) || this;

        var initialState = props.initialState;
        if (config.debug) console.log('4. WrappedApp.render created new store with initialState', initialState);
        _this.store = initStore({
          initialState: initialState
        });
        return _this;
      }

      WrappedApp.prototype.render = function () {
        var _a = this.props,
            initialProps = _a.initialProps,
            initialState = _a.initialState,
            props = __rest(_a, ['initialProps', 'initialState']); // Cmp render must return something like <Provider><Component/></Provider>


        return react_1.default.createElement(App, __assign({}, props, initialProps, {
          store: this.store
        }));
      };

      return WrappedApp;
    }(react_1.Component),
    /* istanbul ignore next */
    _a.displayName = 'withRedux(' + (App.displayName || App.name || 'App') + ')', _a.getInitialProps = function (appCtx) {
      return __awaiter(void 0, void 0, void 0, function () {
        var store, initialProps;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              /* istanbul ignore next */
              if (!appCtx) throw new Error('No app context');
              /* istanbul ignore next */

              if (!appCtx.ctx) throw new Error('No page context');
              store = initStore({
                ctx: appCtx.ctx
              });
              if (config.debug) console.log('1. WrappedApp.getInitialProps wrapper got the store with state', store.getState());
              appCtx.ctx.store = store;
              appCtx.ctx.isServer = isServer;
              initialProps = {};
              if (!('getInitialProps' in App)) return [3,
              /*break*/
              2];
              return [4,
              /*yield*/
              App.getInitialProps.call(App, appCtx)];

            case 1:
              initialProps = _a.sent();
              _a.label = 2;

            case 2:
              if (config.debug) console.log('3. WrappedApp.getInitialProps has store state', store.getState());
              return [2,
              /*return*/
              {
                isServer: isServer,
                initialState: isServer ? config.serializeState(store.getState()) : store.getState(),
                initialProps: initialProps
              }];
          }
        });
      });
    }, _a;
  };
}

// import isFunction from 'lodash/isFunction';
/**
 * Validate the shape of redux store
 */
// export default function checkStore(store) {
//   const shape = {
//     dispatch: isFunction,
//     subscribe: isFunction,
//     getState: isFunction,
//     replaceReducer: isFunction,
//     runSaga: isFunction,
//     injectedReducers: isObject,
//     injectedSagas: isObject,
// //   };
//   invariant(
//     conformsTo(store, shape),
//     '(app/utils...) injectors: Expected a valid redux store',
//   );
// }

function checkStore(store) {
  invariant(typeOf(store) === 'object' && typeOf(store.dispatch) === 'function' && typeOf(store.subscribe) === 'function' && typeOf(store.getState) === 'function' && typeOf(store.replaceReducer) === 'function' && typeOf(store.runSaga) === 'function' && typeOf(store.injectedReducers) === 'object' && typeOf(store.injectedSagas) === 'object', '(app/utils...) injectors: Expected a valid redux store');
}

var RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
var DAEMON = '@@saga-injector/daemon';
var ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

var allowedModes = [RESTART_ON_REMOUNT, DAEMON, ONCE_TILL_UNMOUNT];

var checkKey$1 = function checkKey(key) {
  return invariant(key && typeOf(key) === 'string', '(app/utils...) injectSaga: Expected `key` to be a non empty string');
};

var checkDescriptor = function checkDescriptor(descriptor) {
  // const shape = {
  //   saga: isFunction,
  //   mode: mode => isString(mode) && allowedModes.includes(mode),
  // };
  invariant(typeOf(descriptor) === 'object' && typeof descriptor.saga === 'function' && allowedModes.includes(descriptor.mode), '(app/utils...) injectSaga: Expected a valid saga descriptor');
};

function injectSagaFactory(store, isValid) {
  return function injectSaga(key) {
    var descriptor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var args = arguments.length > 2 ? arguments[2] : undefined;
    if (!isValid) checkStore(store);

    var newDescriptor = _objectSpread({}, descriptor, {
      mode: descriptor.mode || DAEMON
    });

    var saga = newDescriptor.saga,
        mode = newDescriptor.mode;
    checkKey$1(key);
    checkDescriptor(newDescriptor);
    var hasSaga = Reflect.has(store.injectedSagas, key);

    if (process.env.NODE_ENV !== 'production') {
      var oldDescriptor = store.injectedSagas[key]; // enable hot reloading of daemon and once-till-unmount sagas

      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }

    if (!hasSaga || hasSaga && mode !== DAEMON && mode !== ONCE_TILL_UNMOUNT) {
      /* eslint-disable no-param-reassign */
      store.injectedSagas[key] = _objectSpread({}, newDescriptor, {
        task: store.runSaga(saga, args)
      });
      /* eslint-enable no-param-reassign */
    }
  };
}
function ejectSagaFactory(store, isValid) {
  return function ejectSaga(key) {
    if (!isValid) checkStore(store);
    checkKey$1(key);

    if (Reflect.has(store.injectedSagas, key)) {
      var descriptor = store.injectedSagas[key];

      if (descriptor.mode && descriptor.mode !== DAEMON) {
        descriptor.task.cancel(); // Clean up in production; in development we need `descriptor.saga` for hot reloading

        if (process.env.NODE_ENV === 'production') {
          // Need some value to be able to detect `ONCE_TILL_UNMOUNT` sagas in `injectSaga`
          store.injectedSagas[key] = 'done'; // eslint-disable-line no-param-reassign
        }
      }
    }
  };
}
function getInjectors(store) {
  checkStore(store);
  return {
    injectSaga: injectSagaFactory(store, true),
    ejectSaga: ejectSagaFactory(store, true)
  };
}

/**
 * Dynamically injects a saga, passes component's props as saga arguments
 *
 * @param {string} key A key of the saga
 * @param {function} saga A root saga that will be injected
 * @param {string} [mode] By default (constants.DAEMON) the saga will be started
 * on component mount and never canceled or started again. Another two options:
 *   - constants.RESTART_ON_REMOUNT — the saga will be started on component mount and
 *   cancelled with `task.cancel()` on component unmount for improved performance,
 *   - constants.ONCE_TILL_UNMOUNT — behaves like 'RESTART_ON_REMOUNT' but never runs it again.
 *
 */

var injectSaga = (function (_ref) {
  var key = _ref.key,
      saga = _ref.saga,
      mode = _ref.mode;
  return function (WrappedComponent) {
    var InjectSaga = /*#__PURE__*/function (_React$Component) {
      _inherits(InjectSaga, _React$Component);

      var _super = _createSuper(InjectSaga);

      function InjectSaga(props, context) {
        var _this;

        _classCallCheck(this, InjectSaga);

        _this = _super.call(this, props, context);
        _this.injectors = getInjectors(context.store);

        _this.injectors.injectSaga(key, {
          saga: saga,
          mode: mode
        }, _this.props);

        return _this;
      }

      _createClass(InjectSaga, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.injectors.ejectSaga(key);
        }
      }, {
        key: "render",
        value: function render() {
          return /*#__PURE__*/React__default.createElement(WrappedComponent, this.props);
        }
      }]);

      return InjectSaga;
    }(React__default.Component);

    _defineProperty(InjectSaga, "WrappedComponent", WrappedComponent);

    _defineProperty(InjectSaga, "contextType", reactRedux.ReactReduxContext);

    _defineProperty(InjectSaga, "displayName", "withSaga(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")"));

    return hoistNonReactStatics(InjectSaga, WrappedComponent);
  };
});

var useInjectSaga = function useInjectSaga(_ref2) {
  var key = _ref2.key,
      saga = _ref2.saga,
      mode = _ref2.mode;
  var inject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var context = React__default.useContext(reactRedux.ReactReduxContext);
  React__default.useEffect(function () {
    var injectors = getInjectors(context.store);

    if (inject) {
      injectors.injectSaga(key, {
        saga: saga,
        mode: mode
      });
    }

    return function () {
      if (inject) injectors.ejectSaga(key);
    };
  }, []);
};

exports.CustomError = CustomError;
exports.FormValidator = validateForm;
exports.IndianStates = indianStates;
exports.Safe = nullcheck;
exports.cloneObject = cloneObject;
exports.commonConstants = commonConstants;
exports.deleteIn = deleteIn;
exports.generateTimeStamp = generateTimeStamp;
exports.getData = getData;
exports.getIn = getIn;
exports.injectSaga = injectSaga;
exports.newObject = newObject;
exports.objectEquals = objectEquals;
exports.setIn = setIn;
exports.toCapitalize = toCapitalize;
exports.toPromise = toPromise;
exports.toPromiseFunction = toPromiseFunction;
exports.typeOf = typeOf;
exports.updateIn = updateIn;
exports.useActions = useActionsHook;
exports.useInjectSaga = useInjectSaga;
exports.useMutateReducer = useMutateReducer;
exports.useMutation = useMutation;
exports.useQuery = useQuery;
exports.useResetOnlyApiEndPointsState = useResetOnlyApiEndPointsState;
exports.useResetState = useResetState;
exports.useStaleRefresh = useStaleRefresh;
exports.withRedux = withRedux;
exports.withReduxSaga = withReduxSaga;
