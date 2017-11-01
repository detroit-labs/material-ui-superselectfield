'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _div, _div2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactInfinite = require('react-infinite');

var _reactInfinite2 = _interopRequireDefault(_reactInfinite);

var _Popover = require('material-ui/Popover/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _TextField = require('material-ui/TextField/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _ListItem = require('material-ui/List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _check = require('material-ui/svg-icons/navigation/check');

var _check2 = _interopRequireDefault(_check);

var _checkBoxOutlineBlank = require('material-ui/svg-icons/toggle/check-box-outline-blank');

var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Utilities
function entries(obj) {
  return 'entries' in Object ? (0, _entries2.default)(obj) : function (obj) {
    var entries = [];
    var keys = Object.keys(obj);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var prop = _step.value;

        entries.push([prop, obj[prop]]);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return entries;
  };
}

function areEqual(val1, val2) {
  if (!val1 || !val2 || (typeof val1 === 'undefined' ? 'undefined' : _typeof(val1)) !== (typeof val2 === 'undefined' ? 'undefined' : _typeof(val2))) return false;else if (typeof val1 === 'string' || typeof val1 === 'number' || typeof val1 === 'boolean') return val1 === val2;else if ((typeof val1 === 'undefined' ? 'undefined' : _typeof(val1)) === 'object') {
    return Object.keys(val1).length === Object.keys(val2).length && entries(val2).every(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key2 = _ref2[0],
          value2 = _ref2[1];

      return val1[key2] === value2;
    });
  }
}

var checkFormat = function checkFormat(value) {
  return value.findIndex(function (v) {
    return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) !== 'object' || !('value' in v);
  });
};

var objectShape = _react.PropTypes.shape({
  value: _react.PropTypes.any.isRequired,
  label: _react.PropTypes.string
});

// ================================================================
// ====================  FloatingLabel  =====================
// ================================================================

// TODO: implement style lock when disabled = true
var FloatingLabel = function FloatingLabel(_ref3) {
  var children = _ref3.children,
      shrink = _ref3.shrink,
      shrinkStyle = _ref3.shrinkStyle,
      disabled = _ref3.disabled;

  var defaultStyles = {
    position: 'absolute',
    lineHeight: '22px',
    transition: 'cubic-bezier(0.23, 1, 0.32, 1)', // transitions.easeOut(),
    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
    transform: 'scale(1) translate(0, 0)',
    transformOrigin: 'left top',
    pointerEvents: 'auto',
    userSelect: 'none'
  };

  var shrinkStyles = shrink ? _extends({
    transform: 'scale(0.75) translate(0, -28px)',
    pointerEvents: 'none'
  }, shrinkStyle) : null;

  // console.debug('shrink', shrink)

  return _react2.default.createElement(
    'label',
    { style: _extends({}, defaultStyles, shrinkStyles) },
    children
  );
};

FloatingLabel.defaultProps = {
  disabled: false,
  shrink: false

  // ================================================================
  // ====================  SelectionsPresenter  =====================
  // ================================================================

  // noinspection JSDuplicatedDeclaration
};var styles = {
  div1: (_div = {
    position: 'relative',
    height: '100%',
    display: '-webkit-box'
  }, _defineProperty(_div, 'display', '-webkit-flex'), _defineProperty(_div, 'display', '-moz-box'), _defineProperty(_div, 'display', '-ms-flexbox'), _defineProperty(_div, 'display', '-o-flex'), _defineProperty(_div, 'display', 'flex'), _defineProperty(_div, 'WebkitBoxOrient', 'vertical'), _defineProperty(_div, 'WebkitBoxDirection', 'normal'), _defineProperty(_div, 'WebkitFlexDirection', 'column'), _defineProperty(_div, 'msFlexDirection', 'column'), _defineProperty(_div, 'OFlexDirection', 'column'), _defineProperty(_div, 'flexDirection', 'column'), _defineProperty(_div, 'WebkitBoxPack', 'end'), _defineProperty(_div, 'WebkitJustifyContent', 'flex-end'), _defineProperty(_div, 'msFlexPack', 'end'), _defineProperty(_div, 'OJustifyContent', 'flex-end'), _defineProperty(_div, 'justifyContent', 'flex-end'), _div),
  div2: (_div2 = {
    display: '-webkit-box'
  }, _defineProperty(_div2, 'display', '-webkit-flex'), _defineProperty(_div2, 'display', '-moz-box'), _defineProperty(_div2, 'display', '-ms-flexbox'), _defineProperty(_div2, 'display', '-o-flex'), _defineProperty(_div2, 'display', 'flex'), _defineProperty(_div2, 'WebkitBoxPack', 'end'), _defineProperty(_div2, 'WebkitJustifyContent', 'flex-end'), _defineProperty(_div2, 'msFlexPack', 'end'), _defineProperty(_div2, 'OJustifyContent', 'flex-end'), _defineProperty(_div2, 'justifyContent', 'flex-end'), _defineProperty(_div2, 'WebkitAlignItems', 'center'), _defineProperty(_div2, 'MozAlignItems', 'center'), _defineProperty(_div2, 'msAlignItems', 'center'), _defineProperty(_div2, 'OAlignItems', 'center'), _defineProperty(_div2, 'alignItems', 'center'), _div2),
  div3: {
    WebkitBoxFlex: 1,
    MozBoxFlex: 1,
    WebkitFlex: 1,
    msFlex: 1,
    OFlex: 1,
    flex: 1
  }
};

var SelectionsPresenter = function SelectionsPresenter(_ref4) {
  var selectedValues = _ref4.selectedValues,
      hintText = _ref4.hintText,
      selectionsRenderer = _ref4.selectionsRenderer;
  return _react2.default.createElement(
    'div',
    { style: styles.div1 },
    _react2.default.createElement(
      'div',
      { style: styles.div2 },
      _react2.default.createElement(
        'div',
        { style: styles.div3 },
        selectionsRenderer(selectedValues, hintText)
      ),
      _react2.default.createElement(_arrowDropDown2.default, null)
    ),
    _react2.default.createElement('hr', { style: { width: '100%', margin: 0 } })
  );
};

SelectionsPresenter.propTypes = {
  value: _react.PropTypes.oneOfType([objectShape, _react.PropTypes.arrayOf(objectShape)]),
  selectionsRenderer: _react.PropTypes.func,
  hintText: _react.PropTypes.string
};

SelectionsPresenter.defaultProps = {
  hintText: 'Click me',
  value: null,
  selectionsRenderer: function selectionsRenderer(values, hintText) {
    if (!values) return hintText;
    var value = values.value,
        label = values.label;

    if (Array.isArray(values)) {
      return values.length ? values.map(function (_ref5) {
        var value = _ref5.value,
            label = _ref5.label;
        return label || value;
      }).join(', ') : hintText;
    } else if (label || value) return label || value;else return hintText;
  }

  // ================================================================
  // ========================  SelectField  =========================
  // ================================================================

};
var SelectField = function (_Component) {
  _inherits(SelectField, _Component);

  function SelectField(props, context) {
    _classCallCheck(this, SelectField);

    var _this = _possibleConstructorReturn(this, (SelectField.__proto__ || Object.getPrototypeOf(SelectField)).call(this, props, context));

    _this.onBlur = function (event) {
      var _this$state = _this.state,
          isFocused = _this$state.isFocused,
          isOpen = _this$state.isOpen;
      /*  console.debug('isFocused', isFocused,
          '\nisOpen', isOpen,
          '\nevent type', event.type,
          '\ntarget', event.target,
          '\nrelatedTarget', event.relatedTarget
        ) */

      if (!isOpen) _this.setState({ isFocused: false });
    };

    _this.closeMenu = function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;

      onChange(_this.state.selectedItems, name);
      _this.setState({ isOpen: false, searchText: '' }, function () {
        return (0, _reactDom.findDOMNode)(_this.root).focus();
      });
    };

    _this.handleClick = function (event) {
      return !_this.props.disabled && _this.openMenu();
    };

    _this.handleKeyDown = function (event) {
      return !_this.props.disabled && /ArrowDown|Enter/.test(event.key) && _this.openMenu();
    };

    _this.handlePopoverClose = function (reason) {
      return _this.closeMenu();
    };

    _this.handleTextFieldAutocompletionFiltering = function (event, searchText) {
      _this.setState({ searchText: searchText }, function () {
        return _this.focusTextField();
      });
    };

    _this.handleTextFieldKeyDown = function (_ref6) {
      var key = _ref6.key;

      switch (key) {
        case 'ArrowDown':
          _this.focusMenuItem();
          break;

        case 'Escape':
          _this.clearTextField();
          _this.closeMenu();
          break;

        default:
          break;
      }
    };

    _this.handleMenuSelection = function (selectedItem) {
      return function (event) {
        event.preventDefault();
        var selectedItems = _this.state.selectedItems;

        if (_this.props.multiple) {
          var selectedItemExists = selectedItems.some(function (obj) {
            return areEqual(obj.value, selectedItem.value);
          });
          var updatedValues = selectedItemExists ? selectedItems.filter(function (obj) {
            return !areEqual(obj.value, selectedItem.value);
          }) : selectedItems.concat(selectedItem);
          _this.setState({ selectedItems: updatedValues });
          if (_this.props.clearAutocompleteUponSelection) {
            _this.clearTextField(function () {
              return _this.focusTextField();
            });
          }
        } else {
          var updatedValue = areEqual(selectedItems, selectedItem) ? null : selectedItem;
          _this.setState({ selectedItems: updatedValue }, function () {
            return _this.closeMenu();
          });
        }
      };
    };

    _this.handleMenuKeyDown = function (_ref7) {
      var key = _ref7.key,
          tabIndex = _ref7.target.tabIndex;

      var cleanMenuItems = _this.menuItems.filter(function (item) {
        return !!item;
      });
      var firstTabIndex = cleanMenuItems[0].props.tabIndex;
      var lastTabIndex = cleanMenuItems[cleanMenuItems.length - 1].props.tabIndex;
      var currentElementIndex = cleanMenuItems.findIndex(function (item) {
        return item.props.tabIndex === tabIndex;
      });
      switch (key) {
        case 'ArrowUp':
          if (+tabIndex === firstTabIndex) {
            _this.state.showAutocomplete ? _this.focusTextField() : _this.focusMenuItem(lastTabIndex);
          } else {
            var previousTabIndex = cleanMenuItems.slice(0, currentElementIndex).slice(-1)[0].props.tabIndex;
            _this.focusMenuItem(previousTabIndex);
          }
          break;

        case 'ArrowDown':
          if (+tabIndex === lastTabIndex) {
            _this.state.showAutocomplete ? _this.focusTextField() : _this.focusMenuItem();
          } else {
            var nextTabIndex = cleanMenuItems.slice(currentElementIndex + 1)[0].props.tabIndex;
            _this.focusMenuItem(nextTabIndex);
          }
          break;

        case 'PageUp':
          _this.focusMenuItem();
          break;

        case 'PageDown':
          _this.focusMenuItem(lastTabIndex);
          break;

        case 'Escape':
          _this.closeMenu();
          break;

        default:
          break;
      }
    };

    var children = props.children,
        value = props.value,
        multiple = props.multiple,
        showAutocompleteThreshold = props.showAutocompleteThreshold;

    var itemsLength = _this.getChildrenLength(children);
    _this.state = {
      isOpen: false,
      isFocused: false,
      itemsLength: itemsLength,
      showAutocomplete: itemsLength > showAutocompleteThreshold || false,
      selectedItems: value || (multiple ? [] : null),
      searchText: ''
    };
    _this.menuItems = [];
    return _this;
  }

  _createClass(SelectField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!areEqual(nextProps.value, this.state.selectedItems)) {
        this.setState({ selectedItems: nextProps.value });
      }
      if (!areEqual(nextProps.children, this.props.children)) {
        var itemsLength = this.getChildrenLength(nextProps.children);
        this.setState({
          itemsLength: itemsLength,
          showAutocomplete: itemsLength > this.props.showAutocompleteThreshold
        });
      }
    }

    // Counts nodes with non-null value property without optgroups
    // noinspection JSMethodCanBeStatic

  }, {
    key: 'getChildrenLength',
    value: function getChildrenLength(children) {
      if (!children) return 0;else if (Array.isArray(children) && children.length) {
        return children.reduce(function (count, _ref8) {
          var type = _ref8.type,
              _ref8$props = _ref8.props,
              value = _ref8$props.value,
              cpc = _ref8$props.children;

          if (type === 'optgroup') {
            if (cpc) {
              if (Array.isArray(cpc)) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = cpc[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var c = _step2.value;

                    if (c.props.value) ++count;
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                      _iterator2.return();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
                }
              } else if ((typeof cpc === 'undefined' ? 'undefined' : _typeof(cpc)) === 'object' && cpc.props.value) ++count;
            }
          } else if (value) ++count;
          return count;
        }, 0);
      } else if (!Array.isArray(children) && (typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object') {
        if (children.type === 'optgroup') return this.getChildrenLength(children.props.children);else if (children.props.value) return 1;
      }
      return 0;
    }
  }, {
    key: 'openMenu',
    value: function openMenu() {
      var _this2 = this;

      if (this.state.itemsLength) this.setState({ isOpen: true }, function () {
        return _this2.focusTextField();
      });
    }
  }, {
    key: 'focusTextField',
    value: function focusTextField() {
      if (this.state.showAutocomplete) {
        var input = (0, _reactDom.findDOMNode)(this.searchTextField).getElementsByTagName('input')[0];
        input.focus();
      } else this.focusMenuItem();
    }
  }, {
    key: 'focusMenuItem',
    value: function focusMenuItem(index) {
      var targetMenuItem = this.menuItems.find(function (item) {
        return !!item && (index ? item.props.tabIndex === index : true);
      });

      if (!targetMenuItem) throw Error('targetMenuItem not found.');
      targetMenuItem.applyFocusState('keyboard-focused');
    }
  }, {
    key: 'clearTextField',
    value: function clearTextField(callback) {
      this.setState({ searchText: '' }, callback);
    }

    /**
     * Main Component Wrapper methods
     */
    // toggle instead of close ? (in case user changes  targetOrigin/anchorOrigin)


    /**
     * Popover methods
     */
    // toggle instead of close ? (in case user changes targetOrigin/anchorOrigin)


    /**
     * TextField autocomplete methods
     */


    /**
     * Menu methods
     */


    // TODO: add Shift+Tab
    /**
     * this.menuItems can contain uncontinuous React elements, because of filtering
     */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          floatingLabelText = _props.floatingLabelText,
          hintText = _props.hintText,
          hintTextAutocomplete = _props.hintTextAutocomplete,
          noMatchFound = _props.noMatchFound,
          multiple = _props.multiple,
          disabled = _props.disabled,
          nb2show = _props.nb2show,
          autocompleteFilter = _props.autocompleteFilter,
          selectionsRenderer = _props.selectionsRenderer,
          menuCloseButton = _props.menuCloseButton,
          anchorOrigin = _props.anchorOrigin,
          style = _props.style,
          menuStyle = _props.menuStyle,
          elementHeight = _props.elementHeight,
          innerDivStyle = _props.innerDivStyle,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          menuGroupStyle = _props.menuGroupStyle,
          menuFooterStyle = _props.menuFooterStyle,
          checkedIcon = _props.checkedIcon,
          unCheckedIcon = _props.unCheckedIcon,
          hoverColor = _props.hoverColor,
          checkPosition = _props.checkPosition;
      var _context$muiTheme = this.context.muiTheme,
          palette = _context$muiTheme.baseTheme.palette,
          menuItem = _context$muiTheme.menuItem;

      // Condition for shrinking the floating Label

      var shrinkCondition = Array.isArray(this.state.selectedItems) && !!this.state.selectedItems.length || (typeof selectedValues === 'undefined' ? 'undefined' : _typeof(selectedValues)) === 'object' || this.state.isFocused;

      // Default style depending on Material-UI context
      var mergedSelectedMenuItemStyle = _extends({
        color: menuItem.selectedTextColor }, selectedMenuItemStyle);
      if (checkedIcon) checkedIcon.props.style.fill = mergedSelectedMenuItemStyle.color;
      var mergedHoverColor = hoverColor || menuItem.hoverColor;

      /**
       * MenuItems building, based on user's children
       * 1st function is the base process for producing a MenuItem,
       * including filtering from the Autocomplete.
       * 2nd function is the main loop over children array,
       * accounting for optgroups.
       */
      var menuItemBuilder = function menuItemBuilder(nodes, child, index) {
        var selectedItems = _this3.state.selectedItems;
        var _child$props = child.props,
            childValue = _child$props.value,
            label = _child$props.label;

        if (!autocompleteFilter(_this3.state.searchText, label || childValue)) return nodes;
        var isSelected = Array.isArray(selectedItems) ? selectedItems.some(function (obj) {
          return areEqual(obj.value, childValue);
        }) : selectedItems ? selectedItems.value === childValue : false;
        var leftCheckbox = multiple && checkPosition === 'left' && (isSelected ? checkedIcon : unCheckedIcon) || null;
        var rightCheckbox = multiple && checkPosition === 'right' && (isSelected ? checkedIcon : unCheckedIcon) || null;
        if (multiple && checkPosition !== '') {
          if (checkedIcon) checkedIcon.props.style.marginTop = 0;
          if (unCheckedIcon) unCheckedIcon.props.style.marginTop = 0;
        }
        return [].concat(_toConsumableArray(nodes), [_react2.default.createElement(_ListItem2.default, {
          key: ++index,
          tabIndex: index,
          ref: function ref(_ref9) {
            return _this3.menuItems[++index] = _ref9;
          },
          onTouchTap: _this3.handleMenuSelection({ value: childValue, label: label }),
          disableFocusRipple: true,
          leftIcon: leftCheckbox,
          rightIcon: rightCheckbox,
          primaryText: child,
          hoverColor: mergedHoverColor,
          innerDivStyle: _extends({
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: multiple && checkPosition === 'left' ? 56 : 16,
            paddingRight: multiple && checkPosition === 'right' ? 56 : 16
          }, innerDivStyle),
          style: isSelected ? mergedSelectedMenuItemStyle : {}
        })]);
      };

      var fixedChildren = Array.isArray(children) ? children : [children];

      var menuItems = !disabled && fixedChildren.length && this.state.isOpen && fixedChildren.reduce(function (nodes, child, index) {
        if (child.type !== 'optgroup') return menuItemBuilder(nodes, child, index);
        var nextIndex = nodes.length ? +nodes[nodes.length - 1].key + 1 : 0;
        var menuGroup = _react2.default.createElement(_ListItem2.default, {
          disabled: true,
          key: nextIndex,
          primaryText: child.props.label,
          style: _extends({ cursor: 'default', paddingTop: 10, paddingBottom: 10 }, menuGroupStyle)
        });
        var groupedItems = [];
        var cpc = child.props.children;
        if (cpc) {
          if (Array.isArray(cpc) && cpc.length) {
            groupedItems = cpc.reduce(function (nodes, child, idx) {
              return menuItemBuilder(nodes, child, nextIndex + idx);
            }, []);
          } else if ((typeof cpc === 'undefined' ? 'undefined' : _typeof(cpc)) === 'object') groupedItems = menuItemBuilder(nodes, cpc, nextIndex);
        }
        return groupedItems.length ? [].concat(_toConsumableArray(nodes), [menuGroup], _toConsumableArray(groupedItems)) : nodes;
      }, []);

      /*
      const menuItemsHeights = this.state.isOpen
        ? this.menuItems.map(item => findDOMNode(item).clientHeight) // can't resolve since items not rendered yet, need componentDiDMount
        : elementHeight
      */
      var autoCompleteHeight = this.state.showAutocomplete ? 53 : 0;
      var footerHeight = menuCloseButton ? 36 : 0;
      var noMatchFoundHeight = 36;
      var containerHeight = (Array.isArray(elementHeight) ? elementHeight.reduce(function (totalHeight, height) {
        return totalHeight + height;
      }, 6) : elementHeight * (nb2show < menuItems.length ? nb2show : menuItems.length) + 6) || 0;
      var popoverHeight = autoCompleteHeight + (containerHeight || noMatchFoundHeight) + footerHeight;
      var scrollableStyle = { overflowY: nb2show >= menuItems.length ? 'hidden' : 'scroll' };
      var menuWidth = this.root ? this.root.clientWidth : null;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(_ref12) {
            return _this3.root = _ref12;
          },
          tabIndex: '0',
          onFocus: function onFocus() {
            return _this3.setState({ isFocused: true });
          },
          onBlur: this.onBlur,
          onKeyDown: this.handleKeyDown,
          onTouchTap: this.handleClick,
          title: !this.state.itemsLength ? 'Nothing to show' : '',
          style: _extends({
            cursor: disabled ? 'not-allowed' : 'pointer',
            color: disabled ? palette.disabledColor : palette.textColor
          }, style)
        },
        floatingLabelText && _react2.default.createElement(
          FloatingLabel,
          {
            shrink: shrinkCondition,
            disabled: disabled
          },
          floatingLabelText
        ),
        _react2.default.createElement(SelectionsPresenter, {
          isFocused: this.state.isFocused,
          disabled: disabled,
          hintText: hintText,
          floatingLabelText: floatingLabelText,
          selectedValues: this.state.selectedItems,
          selectionsRenderer: selectionsRenderer
        }),
        _react2.default.createElement(
          _Popover2.default,
          {
            open: this.state.isOpen,
            anchorEl: this.root,
            canAutoPosition: false,
            anchorOrigin: anchorOrigin,
            useLayerForClickAway: false,
            onRequestClose: this.handlePopoverClose,
            style: { height: popoverHeight }
          },
          this.state.showAutocomplete && _react2.default.createElement(_TextField2.default, {
            ref: function ref(_ref10) {
              return _this3.searchTextField = _ref10;
            },
            value: this.state.searchText,
            hintText: hintTextAutocomplete,
            onChange: this.handleTextFieldAutocompletionFiltering,
            onKeyDown: this.handleTextFieldKeyDown,
            style: { marginLeft: 16, marginBottom: 5, width: menuWidth - 16 * 2 }
          }),
          _react2.default.createElement(
            'div',
            {
              ref: function ref(_ref11) {
                return _this3.menu = _ref11;
              },
              onKeyDown: this.handleMenuKeyDown,
              style: _extends({ width: menuWidth }, menuStyle)
            },
            menuItems.length ? _react2.default.createElement(
              _reactInfinite2.default,
              {
                elementHeight: elementHeight,
                containerHeight: containerHeight,
                styles: { scrollableStyle: scrollableStyle }
              },
              menuItems
            ) : _react2.default.createElement(_ListItem2.default, { primaryText: noMatchFound, style: { cursor: 'default', padding: '10px 16px' }, disabled: true })
          ),
          multiple && _react2.default.createElement(
            'footer',
            { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } },
            _react2.default.createElement(
              'div',
              { onTouchTap: this.closeMenu, style: menuFooterStyle },
              menuCloseButton
            )
          )
        )
      );
    }
  }]);

  return SelectField;
}(_react.Component);

SelectField.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};

SelectField.propTypes = {
  anchorOrigin: _react.PropTypes.shape({
    vertical: _react.PropTypes.oneOf(['top', 'bottom']),
    horizontal: _react.PropTypes.oneOf(['left', 'right'])
  }),
  style: _react.PropTypes.object,
  menuStyle: _react.PropTypes.object,
  menuGroupStyle: _react.PropTypes.object,
  checkPosition: _react.PropTypes.oneOf(['', 'left', 'right']),
  checkedIcon: _react.PropTypes.node,
  unCheckedIcon: _react.PropTypes.node,
  hoverColor: _react.PropTypes.string,
  // children can be either:
  // an html element with a required 'value' property, and optional label prop,
  // an optgroup with valid children (same as bove case),
  // an array of either valid chidlren, or of optgroups hosting valid children
  children: _react.PropTypes.oneOfType([objectShape, function (props, propName, componentName, location, propFullName) {
    var pp = props[propName];
    if (pp.type === 'optgroup' && pp.props.children) {
      if (Array.isArray(pp.props.children)) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = pp.props.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var child = _step3.value;

            if (!child.props.value) {
              return new Error('\n              Missing required property \'value\' for \'' + propFullName + '\' supplied to \'' + componentName + ' ' + props.name + '\'. \n              Validation failed.');
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      } else if (_typeof(pp.props.children) === 'object' && !pp.props.children.props.value) {
        return new Error('\n          Missing required property \'value\' for \'' + propFullName + '\' supplied to \'' + componentName + ' ' + props.name + '\'. \n          Validation failed.');
      }
    }
  }, _react.PropTypes.arrayOf(function (props, propName, componentName, location, propFullName) {
    if (props[propName].type !== 'optgroup') {
      if (!props[propName].props.value) {
        return new Error('\n          Missing required property \'value\' for \'' + propFullName + '\' supplied to \'' + componentName + ' ' + props.name + '\'. \n          Validation failed.');
      }
    } else {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = props[propName].props.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var child = _step4.value;

          if (!child.props.value) {
            return new Error('\n            Missing required property \'value\' for \'' + propFullName + '\' supplied to \'' + componentName + ' ' + props.name + '\'. \n            Validation failed.');
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  })]),
  innerDivStyle: _react.PropTypes.object,
  selectedMenuItemStyle: _react.PropTypes.object,
  menuFooterStyle: _react.PropTypes.object,
  name: _react.PropTypes.string,
  floatingLabelText: _react.PropTypes.string,
  hintText: _react.PropTypes.string,
  hintTextAutocomplete: _react.PropTypes.string,
  noMatchFound: _react.PropTypes.string,
  showAutocompleteThreshold: _react.PropTypes.number,
  elementHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)]),
  nb2show: _react.PropTypes.number,
  value: function value(props, propName, componentName, location, propFullName) {
    var multiple = props.multiple,
        value = props.value;
    // console.debug(`value ${props.name}`, value)

    if (multiple) {
      if (!Array.isArray(value)) {
        return new Error('\n          When using \'multiple\' mode, \'value\' of \'' + componentName + ' ' + props.name + '\' must be an array. \n          Validation failed.');
      } else if (checkFormat(value) !== -1) {
        var index = checkFormat(value);
        return new Error('\n          \'value[' + index + ']\' of \'' + componentName + ' ' + props.name + '\' must be an object including a \'value\' property. \n          Validation failed.');
      }
    } else if (value !== null && ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || !('value' in value))) {
      return new Error('\n        \'value\' of \'' + componentName + ' ' + props.name + '\' must be an object including a \'value\' property. \n        Validation failed.');
    }
  },
  autocompleteFilter: _react.PropTypes.func,
  selectionsRenderer: _react.PropTypes.func,
  menuCloseButton: _react.PropTypes.node,
  multiple: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  clearAutocompleteUponSelection: _react.PropTypes.bool
};

SelectField.defaultProps = {
  anchorOrigin: { vertical: 'top', horizontal: 'left' },
  checkPosition: '',
  checkedIcon: _react2.default.createElement(_check2.default, { style: { top: 'calc(50% - 12px)' } }),
  unCheckedIcon: _react2.default.createElement(_checkBoxOutlineBlank2.default, { style: { top: 'calc(50% - 12px)' } }),
  menuCloseButton: null,
  multiple: false,
  disabled: false,
  nb2show: 5,
  floatingLabelText: '',
  hintText: 'Click me',
  hintTextAutocomplete: 'Type something',
  noMatchFound: 'No match found',
  showAutocompleteThreshold: 10,
  elementHeight: 36,
  autocompleteFilter: function autocompleteFilter(searchText, text) {
    if (!text || typeof text !== 'string' && typeof text !== 'number') return false;
    if (typeof searchText !== 'string' && typeof searchText !== 'number') return false;
    return (text + '').toLowerCase().includes(searchText.toLowerCase());
  },
  value: null,
  onChange: function onChange() {},
  clearAutocompleteUponSelection: true,
  children: []
};

exports.default = SelectField;
/**
 * Created by Raphaël on 17/02/2017.
 */
