(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactHtml5Video"] = factory(require("react"));
	else
		root["ReactHtml5Video"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_130__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(20);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(56)['default'];

	var _createClass = __webpack_require__(105)['default'];

	var _classCallCheck = __webpack_require__(110)['default'];

	var _objectWithoutProperties = __webpack_require__(112)['default'];

	var _extends = __webpack_require__(114)['default'];

	var _Object$assign = __webpack_require__(115)['default'];

	var _interopRequireDefault = __webpack_require__(119)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _propTypes = __webpack_require__(121);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(130);

	var _react2 = _interopRequireDefault(_react);

	var _overlayOverlay = __webpack_require__(131);

	var _overlayOverlay2 = _interopRequireDefault(_overlayOverlay);

	var _controlsControls = __webpack_require__(134);

	var _controlsControls2 = _interopRequireDefault(_controlsControls);

	var _controlsSeekSeek = __webpack_require__(136);

	var _controlsSeekSeek2 = _interopRequireDefault(_controlsSeekSeek);

	var _controlsPlayPlay = __webpack_require__(135);

	var _controlsPlayPlay2 = _interopRequireDefault(_controlsPlayPlay);

	var _controlsMuteMute = __webpack_require__(140);

	var _controlsMuteMute2 = _interopRequireDefault(_controlsMuteMute);

	var _controlsFullscreenFullscreen = __webpack_require__(142);

	var _controlsFullscreenFullscreen2 = _interopRequireDefault(_controlsFullscreenFullscreen);

	var _controlsTimeTime = __webpack_require__(141);

	var _controlsTimeTime2 = _interopRequireDefault(_controlsTimeTime);

	var _lodashThrottle = __webpack_require__(143);

	var _lodashThrottle2 = _interopRequireDefault(_lodashThrottle);

	var _assetsCopy = __webpack_require__(146);

	var _assetsCopy2 = _interopRequireDefault(_assetsCopy);

	var EVENTS = ['onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting'];

	var Video = (function (_React$Component) {
	    _inherits(Video, _React$Component);

	    function Video() {
	        var _this = this;

	        _classCallCheck(this, Video);

	        _get(Object.getPrototypeOf(Video.prototype), 'constructor', this).apply(this, arguments);

	        this.state = {
	            networkState: 0,
	            paused: !this.props.autoPlay,
	            muted: !!this.props.muted,
	            volume: 1,
	            playbackRate: 1,
	            error: false,
	            loading: false
	        };

	        this.togglePlay = function () {
	            if (_this.state.paused) {
	                _this.play();
	            } else {
	                _this.pause();
	            }
	        };

	        this.toggleMute = function () {
	            if (_this.state.muted) {
	                _this.unmute();
	            } else {
	                _this.mute();
	            }
	        };

	        this.load = function () {
	            _this.videoEl.load();
	        };

	        this.fullscreen = function () {
	            if (_this.videoEl.requestFullscreen) {
	                _this.videoEl.requestFullscreen();
	            } else if (_this.videoEl.msRequestFullscreen) {
	                _this.videoEl.msRequestFullscreen();
	            } else if (_this.videoEl.mozRequestFullScreen) {
	                _this.videoEl.mozRequestFullScreen();
	            } else if (_this.videoEl.webkitRequestFullscreen) {
	                _this.videoEl.webkitRequestFullscreen();
	            }
	        };

	        this.play = function () {
	            _this.videoEl.play();
	        };

	        this.pause = function () {
	            _this.videoEl.pause();
	        };

	        this.unmute = function () {
	            _this.videoEl.muted = false;
	        };

	        this.mute = function () {
	            _this.videoEl.muted = true;
	        };

	        this.seek = function (time, forceUpdate) {
	            _this.videoEl.currentTime = time;
	            // In some use cases, we wish not to wait for `onSeeked` or `onSeeking`
	            // throttled event to update state so we force it. This is because
	            // this method is often triggered when dragging a bar and can feel janky.
	            // See https://github.com/mderrick/react-html5video/issues/43
	            if (forceUpdate) {
	                _this.updateStateFromVideo();
	            }
	        };

	        this.setVolume = function (volume, forceUpdate) {
	            _this.videoEl.volume = volume;
	            // In some use cases, we wish not to wait for `onVolumeChange`
	            // throttled event to update state so we force it. This is because
	            // this method is often triggered when dragging a bar and can feel janky.
	            // See https://github.com/mderrick/react-html5video/issues/43
	            if (forceUpdate) {
	                _this.updateStateFromVideo();
	            }
	        };

	        this.setPlaybackRate = function (rate) {
	            _this.videoEl.playbackRate = rate;
	            _this.updateStateFromVideo();
	        };

	        this.updateStateFromVideo = function () {
	            _this.setState({
	                // Standard video properties
	                duration: _this.videoEl.duration,
	                currentTime: _this.videoEl.currentTime,
	                buffered: _this.videoEl.buffered,
	                paused: _this.videoEl.paused,
	                muted: _this.videoEl.muted,
	                volume: _this.videoEl.volume,
	                playbackRate: _this.videoEl.playbackRate,
	                readyState: _this.videoEl.readyState,

	                // Non-standard state computed from properties
	                percentageBuffered: _this.videoEl.buffered.length && _this.videoEl.buffered.end(_this.videoEl.buffered.length - 1) / _this.videoEl.duration * 100,
	                percentagePlayed: _this.videoEl.currentTime / _this.videoEl.duration * 100,
	                error: _this.videoEl.networkState === _this.videoEl.NETWORK_NO_SOURCE,
	                loading: _this.videoEl.readyState < _this.videoEl.HAVE_ENOUGH_DATA
	            });
	        };

	        this.renderControls = function () {
	            var extendedProps = _Object$assign({
	                // The public methods that all controls should be able to
	                // use.
	                togglePlay: _this.togglePlay,
	                toggleMute: _this.toggleMute,
	                play: _this.play,
	                pause: _this.pause,
	                mute: _this.mute,
	                unmute: _this.unmute,
	                seek: _this.seek,
	                fullscreen: _this.fullscreen,
	                setVolume: _this.setVolume,
	                setPlaybackRate: _this.setPlaybackRate
	            }, _this.state, { copyKeys: _this.props.copyKeys });

	            var controls = _react2['default'].Children.map(_this.props.children, function (child) {
	                if (child.type === 'source') {
	                    return void 0;
	                }
	                return _react2['default'].cloneElement(child, extendedProps);
	            });

	            if (!controls.length) {
	                controls = _react2['default'].createElement(
	                    'div',
	                    null,
	                    _react2['default'].createElement(_overlayOverlay2['default'], extendedProps),
	                    _react2['default'].createElement(_controlsControls2['default'], extendedProps)
	                );
	            }
	            return controls;
	        };

	        this.renderSources = function () {
	            return _react2['default'].Children.map(_this.props.children, function (child) {
	                if (child.type !== 'source') {
	                    return void 0;
	                }
	                return child;
	            });
	        };

	        this.getVideoClassName = function () {
	            var className = _this.props.className;

	            var classString = 'video';

	            if (_this.state.error) {
	                classString += ' video--error';
	            } else if (_this.state.loading) {
	                classString += ' video--loading';
	            } else if (_this.state.paused) {
	                classString += ' video--paused';
	            } else {
	                classString += ' video--playing';
	            }

	            if (_this.state.focused) {
	                classString += ' video--focused';
	            }
	            if (className) {
	                classString += ' ' + className;
	            }
	            return classString;
	        };

	        this.onFocus = function () {
	            _this.setState({
	                focused: true
	            });
	        };

	        this.onBlur = function () {
	            _this.setState({
	                focused: false
	            });
	        };
	    }

	    _createClass(Video, [{
	        key: 'componentWillMount',

	        /**
	         * Creates a throttle update method.
	         * @return {undefined}
	         */
	        value: function componentWillMount() {
	            var _this2 = this;

	            this._updateStateFromVideo = (0, _lodashThrottle2['default'])(this.updateStateFromVideo, 100);
	            // Set up all React media events and call method
	            // on props if provided.
	            this.mediaEventProps = EVENTS.reduce(function (p, c) {
	                p[c] = function (e) {
	                    if (c in _this2.props && typeof _this2.props[c] === 'function') {
	                        // A prop exists for this mediaEvent, call it.
	                        _this2.props[c](e);
	                    }
	                    _this2._updateStateFromVideo();
	                };
	                return p;
	            }, {});
	        }

	        /**
	         * Bind eventlisteners not supported by React's synthetic events
	         * https://facebook.github.io/react/docs/events.html
	         * @return {undefined}
	         */
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // Listen to error of last source.
	            this.videoEl.children[this.videoEl.children.length - 1].addEventListener('error', this._updateStateFromVideo);
	        }

	        /**
	         * Removes event listeners bound outside of React's synthetic events
	         * @return {undefined}
	         */
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            // Remove event listener from video.
	            this.videoEl.children[this.videoEl.children.length - 1].removeEventListener('error', this._updateStateFromVideo);
	            // Cancel the throttled function from being called once
	            // the video has been unmounted.
	            // https://github.com/mderrick/react-html5video/issues/35
	            this._updateStateFromVideo.cancel();
	        }

	        /**
	         * Toggles the video to play and pause.
	         * @return {undefined}
	         */
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            // If controls prop is provided remove it
	            // and use our own controls.
	            // Leave `copyKeys` here even though not used
	            // as per issue #36.
	            var _props = this.props;
	            var controls = _props.controls;
	            var copyKeys = _props.copyKeys;
	            var style = _props.style;

	            var otherProps = _objectWithoutProperties(_props, ['controls', 'copyKeys', 'style']);

	            return _react2['default'].createElement(
	                'div',
	                { className: this.getVideoClassName(),
	                    tabIndex: '0',
	                    onFocus: this.onFocus,
	                    onBlur: this.onBlur,
	                    style: style },
	                _react2['default'].createElement(
	                    'video',
	                    _extends({}, otherProps, {
	                        className: 'video__el',
	                        ref: function (el) {
	                            _this3.videoEl = el;
	                        }
	                        //  We have throttled `_updateStateFromVideo` so listen to
	                        //  every available Media event that React allows and
	                        //  infer the Video state in that method from the Video properties.
	                    }, this.mediaEventProps),
	                    this.renderSources()
	                ),
	                controls ? this.renderControls() : ''
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            // Non-standard props
	            copyKeys: _propTypes2['default'].object,
	            children: _propTypes2['default'].node,
	            className: _propTypes2['default'].string,

	            // HTML5 Video standard attributes
	            autoPlay: _propTypes2['default'].bool,
	            muted: _propTypes2['default'].bool,
	            controls: _propTypes2['default'].bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            copyKeys: _assetsCopy2['default']
	        },
	        enumerable: true
	    }]);

	    return Video;
	})(_react2['default'].Component);

	exports['default'] = Video;
	exports.Controls = _controlsControls2['default'];
	exports.Seek = _controlsSeekSeek2['default'];
	exports.Play = _controlsPlayPlay2['default'];
	exports.Mute = _controlsMuteMute2['default'];
	exports.Fullscreen = _controlsFullscreenFullscreen2['default'];
	exports.Time = _controlsTimeTime2['default'];
	exports.Overlay = _overlayOverlay2['default'];

	/**
	 * Toggles the video to mute and unmute.
	 * @return {undefined}
	 */

	/**
	 * Loads video.
	 * @return {undefined}
	 */

	/**
	 * Sets the video to fullscreen.
	 * @return {undefined}
	 */

	/**
	 * Plays the video.
	 * @return {undefined}
	 */

	/**
	 * Pauses the video.
	 * @return {undefined}
	 */

	/**
	 * Unmutes video.
	 * @return {undefined}
	 */

	/**
	 * Mutes the video.
	 * @return {undefined}
	 */

	/**
	 * Seeks the video timeline.
	 * @param  {number} time The value in seconds to seek to
	 * @param  {bool}   forceUpdate Forces a state update without waiting for
	 *                              throttled event.          
	 * @return {undefined}
	 */

	/**
	 * Sets the video volume.
	 * @param  {number} volume The volume level between 0 and 1.
	 * @param  {bool}   forceUpdate Forces a state update without waiting for
	 *                              throttled event.  
	 * @return {undefined}
	 */

	/**
	 * Sets the video playback rate.
	 * @param  {number} rate The playback rate (default 1.0).
	 * @return {undefined}
	 */

	/**
	 * Updates the React component state from the DOM video properties.
	 * This is where the magic happens.
	 * @return {undefined}
	 */

	/**
	 * Returns everything but 'source' nodes from children
	 * and extends props so all children have access to Video API and state.
	 * If there are no controls provided, returns default Controls.
	 * @return {Array.<ReactElement>} An array of components.
	 */

	/**
	 * Returns video 'source' nodes from children.
	 * @return {Array.<ReactElement>} An array of components.
	 */

	/**
	 * Gets the video class name based on its state
	 * @return {string} Class string
	 */

	/**
	 * Sets state to show focused class on video player.
	 * @return {undefined}
	 */

	/**
	 * Sets state to not be focused to remove class form video
	 * player.
	 * @return {undefined}
	 */

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getPrototypeOf = __webpack_require__(22);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _getOwnPropertyDescriptor = __webpack_require__(48);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);

	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;

	    if (getter === undefined) {
	      return undefined;
	    }

	    return getter.call(receiver);
	  }
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(24);
	module.exports = __webpack_require__(35).Object.getPrototypeOf;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(25)
	  , $getPrototypeOf = __webpack_require__(27);

	__webpack_require__(33)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(26);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(28)
	  , toObject    = __webpack_require__(25)
	  , IE_PROTO    = __webpack_require__(29)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(30)('keys')
	  , uid    = __webpack_require__(32);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(31)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(34)
	  , core    = __webpack_require__(35)
	  , fails   = __webpack_require__(44);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(31)
	  , core      = __webpack_require__(35)
	  , ctx       = __webpack_require__(36)
	  , hide      = __webpack_require__(38)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(37);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(39)
	  , createDesc = __webpack_require__(47);
	module.exports = __webpack_require__(43) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(40)
	  , IE8_DOM_DEFINE = __webpack_require__(42)
	  , toPrimitive    = __webpack_require__(46)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(43) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(43) && !__webpack_require__(44)(function(){
	  return Object.defineProperty(__webpack_require__(45)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(44)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41)
	  , document = __webpack_require__(31).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(41);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	var $Object = __webpack_require__(35).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(51)
	  , $getOwnPropertyDescriptor = __webpack_require__(54).f;

	__webpack_require__(33)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(52)
	  , defined = __webpack_require__(26);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(53);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(55)
	  , createDesc     = __webpack_require__(47)
	  , toIObject      = __webpack_require__(51)
	  , toPrimitive    = __webpack_require__(46)
	  , has            = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(42)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(43) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(57);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(61);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(74);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	module.exports = __webpack_require__(35).Object.setPrototypeOf;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(34);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(60).set});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(41)
	  , anObject = __webpack_require__(40);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(36)(Function.call, __webpack_require__(54).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(63);
	var $Object = __webpack_require__(35).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(34)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(64)});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(40)
	  , dPs         = __webpack_require__(65)
	  , enumBugKeys = __webpack_require__(72)
	  , IE_PROTO    = __webpack_require__(29)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(45)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(73).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(39)
	  , anObject = __webpack_require__(40)
	  , getKeys  = __webpack_require__(66);

	module.exports = __webpack_require__(43) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(67)
	  , enumBugKeys = __webpack_require__(72);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(28)
	  , toIObject    = __webpack_require__(51)
	  , arrayIndexOf = __webpack_require__(68)(false)
	  , IE_PROTO     = __webpack_require__(29)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(51)
	  , toLength  = __webpack_require__(69)
	  , toIndex   = __webpack_require__(71);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(70)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(70)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31).document && document.documentElement;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(75);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(91);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(77);
	__webpack_require__(86);
	module.exports = __webpack_require__(90).f('iterator');

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(78)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(79)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(70)
	  , defined   = __webpack_require__(26);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(80)
	  , $export        = __webpack_require__(34)
	  , redefine       = __webpack_require__(81)
	  , hide           = __webpack_require__(38)
	  , has            = __webpack_require__(28)
	  , Iterators      = __webpack_require__(82)
	  , $iterCreate    = __webpack_require__(83)
	  , setToStringTag = __webpack_require__(84)
	  , getPrototypeOf = __webpack_require__(27)
	  , ITERATOR       = __webpack_require__(85)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(38);

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(64)
	  , descriptor     = __webpack_require__(47)
	  , setToStringTag = __webpack_require__(84)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(38)(IteratorPrototype, __webpack_require__(85)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(39).f
	  , has = __webpack_require__(28)
	  , TAG = __webpack_require__(85)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(30)('wks')
	  , uid        = __webpack_require__(32)
	  , Symbol     = __webpack_require__(31).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	var global        = __webpack_require__(31)
	  , hide          = __webpack_require__(38)
	  , Iterators     = __webpack_require__(82)
	  , TO_STRING_TAG = __webpack_require__(85)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(88)
	  , step             = __webpack_require__(89)
	  , Iterators        = __webpack_require__(82)
	  , toIObject        = __webpack_require__(51);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(79)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(85);

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(93);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	module.exports = __webpack_require__(35).Symbol;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(31)
	  , has            = __webpack_require__(28)
	  , DESCRIPTORS    = __webpack_require__(43)
	  , $export        = __webpack_require__(34)
	  , redefine       = __webpack_require__(81)
	  , META           = __webpack_require__(94).KEY
	  , $fails         = __webpack_require__(44)
	  , shared         = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(84)
	  , uid            = __webpack_require__(32)
	  , wks            = __webpack_require__(85)
	  , wksExt         = __webpack_require__(90)
	  , wksDefine      = __webpack_require__(95)
	  , keyOf          = __webpack_require__(96)
	  , enumKeys       = __webpack_require__(97)
	  , isArray        = __webpack_require__(99)
	  , anObject       = __webpack_require__(40)
	  , toIObject      = __webpack_require__(51)
	  , toPrimitive    = __webpack_require__(46)
	  , createDesc     = __webpack_require__(47)
	  , _create        = __webpack_require__(64)
	  , gOPNExt        = __webpack_require__(100)
	  , $GOPD          = __webpack_require__(54)
	  , $DP            = __webpack_require__(39)
	  , $keys          = __webpack_require__(66)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(101).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(55).f  = $propertyIsEnumerable;
	  __webpack_require__(98).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(80)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(38)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(32)('meta')
	  , isObject = __webpack_require__(41)
	  , has      = __webpack_require__(28)
	  , setDesc  = __webpack_require__(39).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(44)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(31)
	  , core           = __webpack_require__(35)
	  , LIBRARY        = __webpack_require__(80)
	  , wksExt         = __webpack_require__(90)
	  , defineProperty = __webpack_require__(39).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(66)
	  , toIObject = __webpack_require__(51);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(66)
	  , gOPS    = __webpack_require__(98)
	  , pIE     = __webpack_require__(55);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ }),
/* 98 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(53);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(51)
	  , gOPN      = __webpack_require__(101).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(67)
	  , hiddenKeys = __webpack_require__(72).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(95)('asyncIterator');

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(95)('observable');

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(106);

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(107);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(109);
	var $Object = __webpack_require__(35).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(34);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(43), 'Object', {defineProperty: __webpack_require__(39).f});

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(111);

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(113);

/***/ }),
/* 113 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(115);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(117);
	module.exports = __webpack_require__(35).Object.assign;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(34);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(118)});

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(66)
	  , gOPS     = __webpack_require__(98)
	  , pIE      = __webpack_require__(55)
	  , toObject = __webpack_require__(25)
	  , IObject  = __webpack_require__(52)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(44)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(120);

/***/ }),
/* 120 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(123)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(129)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(122)))

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(124);
	var invariant = __webpack_require__(125);
	var warning = __webpack_require__(126);

	var ReactPropTypesSecret = __webpack_require__(127);
	var checkPropTypes = __webpack_require__(128);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(122)))

/***/ }),
/* 124 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(122)))

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(124);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(122)))

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(125);
	  var warning = __webpack_require__(126);
	  var ReactPropTypesSecret = __webpack_require__(127);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(122)))

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(124);
	var invariant = __webpack_require__(125);
	var ReactPropTypesSecret = __webpack_require__(127);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 130 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_130__;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(56)['default'];

	var _createClass = __webpack_require__(105)['default'];

	var _classCallCheck = __webpack_require__(110)['default'];

	var _interopRequireDefault = __webpack_require__(119)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _propTypes = __webpack_require__(121);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(130);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(132);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var _spinnerSpinner = __webpack_require__(133);

	var _spinnerSpinner2 = _interopRequireDefault(_spinnerSpinner);

	var Overlay = (function (_React$Component) {
	    _inherits(Overlay, _React$Component);

	    function Overlay() {
	        var _this = this;

	        _classCallCheck(this, Overlay);

	        _get(Object.getPrototypeOf(Overlay.prototype), 'constructor', this).apply(this, arguments);

	        this.renderContent = function () {
	            var content;
	            if (_this.props.error) {
	                content = _react2['default'].createElement(
	                    'div',
	                    { className: 'video-overlay__error' },
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'video-overlay__error-text' },
	                        _this.props.copyKeys.sourceError
	                    )
	                );
	            } else if (_this.props.loading) {
	                content = _react2['default'].createElement(
	                    'div',
	                    { className: 'video-overlay__loader' },
	                    _react2['default'].createElement(_spinnerSpinner2['default'], null)
	                );
	            } else {
	                content = _react2['default'].createElement(
	                    'div',
	                    { className: 'video-overlay__play', onClick: _this.props.togglePlay },
	                    _this.props.paused ? _react2['default'].createElement(_iconIcon2['default'], { name: 'play-1' }) : ''
	                );
	            }
	            return content;
	        };
	    }

	    _createClass(Overlay, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'video-overlay' },
	                this.renderContent()
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            error: _propTypes2['default'].bool,
	            togglePlay: _propTypes2['default'].func,
	            paused: _propTypes2['default'].bool,
	            copyKeys: _propTypes2['default'].object,
	            loading: _propTypes2['default'].bool
	        },
	        enumerable: true
	    }]);

	    return Overlay;
	})(_react2['default'].Component);

	exports['default'] = Overlay;
	module.exports = exports['default'];

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(56)['default'];

	var _createClass = __webpack_require__(105)['default'];

	var _classCallCheck = __webpack_require__(110)['default'];

	var _interopRequireDefault = __webpack_require__(119)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _propTypes = __webpack_require__(121);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	/*eslint-disable */
	/*
	 * Generated by the 'fontello-react' Grunt task.
	 */

	var _react = __webpack_require__(130);

	var _react2 = _interopRequireDefault(_react);

	var Icon = (function (_React$Component) {
	    _inherits(Icon, _React$Component);

	    function Icon() {
	        _classCallCheck(this, Icon);

	        _get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Icon, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement('span', { className: 'video-icon video-icon--' + this.props.name });
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            name: _propTypes2['default'].oneOf(['play-1', 'volume-off', 'volume-down', 'volume-up', 'resize-full', 'resize-small', 'pause-1'])
	        },

	        /**
	         * Default the icon to the first one just to show something
	         * @return {Object} The default props
	         */
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            name: 'play-1'
	        },
	        enumerable: true
	    }]);

	    return Icon;
	})(_react2['default'].Component);

	exports['default'] = Icon;
	module.exports = exports['default'];

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(56)["default"];

	var _createClass = __webpack_require__(105)["default"];

	var _classCallCheck = __webpack_require__(110)["default"];

	var _interopRequireDefault = __webpack_require__(119)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(130);

	var _react2 = _interopRequireDefault(_react);

	var Spinner = (function (_React$Component) {
	    _inherits(Spinner, _React$Component);

	    function Spinner() {
	        _classCallCheck(this, Spinner);

	        _get(Object.getPrototypeOf(Spinner.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Spinner, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "div",
	                { className: "video-spinner" },
	                _react2["default"].createElement("div", { className: "video-spinner__rect1" }),
	                _react2["default"].createElement("div", { className: "video-spinner__rect2" }),
	                _react2["default"].createElement("div", { className: "video-spinner__rect3" }),
	                _react2["default"].createElement("div", { className: "video-spinner__rect4" }),
	                _react2["default"].createElement("div", { className: "video-spinner__rect5" })
	            );
	        }
	    }]);

	    return Spinner;
	})(_react2["default"].Component);

	exports["default"] = Spinner;
	module.exports = exports["default"];

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(56)['default'];

	var _createClass = __webpack_require__(105)['default'];

	var _classCallCheck = __webpack_require__(110)['default'];

	var _extends = __webpack_require__(114)['default'];

	var _interopRequireDefault = __webpack_require__(119)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _propTypes = __webpack_require__(121);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(130);

	var _react2 = _interopRequireDefault(_react);

	var _playPlay = __webpack_require__(135);

	var _playPlay2 = _interopRequireDefault(_playPlay);

	var _seekSeek = __webpack_require__(136);

	var _seekSeek2 = _interopRequireDefault(_seekSeek);

	var _muteMute = __webpack_require__(140);

	var _muteMute2 = _interopRequireDefault(_muteMute);

	var _timeTime = __webpack_require__(141);

	var _timeTime2 = _interopRequireDefault(_timeTime);

	var _fullscreenFullscreen = __webpack_require__(142);

	var _fullscreenFullscreen2 = _interopRequireDefault(_fullscreenFullscreen);

	var Controls = (function (_React$Component) {
	    _inherits(Controls, _React$Component);

	    function Controls() {
	        var _this = this;

	        _classCallCheck(this, Controls);

	        _get(Object.getPrototypeOf(Controls.prototype), 'constructor', this).apply(this, arguments);

	        this.renderChildren = function () {
	            return _react2['default'].Children.map(_this.props.children, function (child) {
	                return _react2['default'].cloneElement(child, _extends({}, _this.props));
	            });
	        };
	    }

	    _createClass(Controls, [{
	        key: 'render',
	        value: function render() {
	            return !this.props.error ? _react2['default'].createElement(
	                'div',
	                { className: 'video-controls video__controls' },
	                this.renderChildren()
	            ) : null;
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            error: _propTypes2['default'].bool,
	            children: _propTypes2['default'].oneOfType([_propTypes2['default'].arrayOf(_propTypes2['default'].node), _propTypes2['default'].node])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            children: [_react2['default'].createElement(_playPlay2['default'], null), _react2['default'].createElement(_seekSeek2['default'], null), _react2['default'].createElement(_timeTime2['default'], null), _react2['default'].createElement(_muteMute2['default'], null), _react2['default'].createElement(_fullscreenFullscreen2['default'], null)]
	        },

	        /**
	         * Returns children components with props
	         * from the parent Video component. Needed
	         * for when custom React components are used.
	         * @return {Array.<ReactElement>} An array of components.
	         */
	        enumerable: true
	    }]);

	    return Controls;
	})(_react2['default'].Component);

	exports['default'] = Controls;
	module.exports = exports['default'];

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(56)['default'];

	var _createClass = __webpack_require__(105)['default'];

	var _classCallCheck = __webpack_require__(110)['default'];

	var _interopRequireDefault = __webpack_require__(119)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _propTypes = __webpack_require__(121);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(130);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(132);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var Play = (function (_React$Component) {
	    _inherits(Play, _React$Component);

	    function Play() {
	        _classCallCheck(this, Play);

	        _get(Object.getPrototypeOf(Play.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Play, [{
	        key: 'shouldComponentUpdate',

	        /**
	         * As controls receive all props for extensibility, we do a quick
	         * check and make sure only the props we care about have changed.
	         * @param  {object} nextProps The next props from parent
	         * @return {boolean}          Whether we re-render or not
	         */
	        value: function shouldComponentUpdate(nextProps) {
	            return this.props.paused !== nextProps.paused || this.props.togglePlay !== nextProps.togglePlay;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'button',
	                {
	                    className: 'video-play video__control',
	                    onClick: this.props.togglePlay,
	                    'aria-label': this.props.paused ? this.props.copyKeys.play : this.props.copyKeys.pause },
	                this.props.paused ? _react2['default'].createElement(_iconIcon2['default'], { name: 'play-1' }) : _react2['default'].createElement(_iconIcon2['default'], { name: 'pause-1' })
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            copyKeys: _propTypes2['default'].object,
	            togglePlay: _propTypes2['default'].func,
	            paused: _propTypes2['default'].bool
	        },
	        enumerable: true
	    }]);

	    return Play;
	})(_react2['default'].Component);

	exports['default'] = Play;
	module.exports = exports['default'];

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(56)['default'];

	var _createClass = __webpack_require__(105)['default'];

	var _classCallCheck = __webpack_require__(110)['default'];

	var _interopRequireDefault = __webpack_require__(119)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _propTypes = __webpack_require__(121);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(130);

	var _react2 = _interopRequireDefault(_react);

	var _progressbarProgressBar = __webpack_require__(137);

	var _progressbarProgressBar2 = _interopRequireDefault(_progressbarProgressBar);

	var Seek = (function (_React$Component) {
	    _inherits(Seek, _React$Component);

	    function Seek() {
	        var _this = this;

	        _classCallCheck(this, Seek);

	        _get(Object.getPrototypeOf(Seek.prototype), 'constructor', this).apply(this, arguments);

	        this.state = {
	            // When the child range input becomes focused,
	            // we need to set this custom seek bar to look
	            // 'focused' with the correct styles. Need to
	            // do this via a class.
	            focused: false
	        };

	        this.seek = function (e) {
	            _this.props.seek(e.target.value * _this.props.duration / 100, true);
	        };

	        this.onFocus = function () {
	            _this.setState({
	                focused: true
	            });
	        };

	        this.onBlur = function () {
	            _this.setState({
	                focused: false
	            });
	        };
	    }

	    _createClass(Seek, [{
	        key: 'shouldComponentUpdate',

	        /**
	         * As controls receive all props for extensibility, we do a quick
	         * check and make sure only the props we care about have changed.
	         * @param  {object} nextProps The next props from parent
	         * @return {boolean}          Whether we re-render or not
	         */
	        value: function shouldComponentUpdate(nextProps) {
	            return this.props.seek !== nextProps.seek || this.props.percentageBuffered !== nextProps.percentageBuffered || this.props.percentagePlayed !== nextProps.percentagePlayed || this.props.duration !== nextProps.duration;
	        }

	        /**
	         * Calculates the seek time based on change of input.
	         * @param  {object} e Event object
	         * @return {undefined}
	         */
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                {
	                    className: 'video-seek video__control' + (this.state.focused ? ' video__control--focused' : ''),
	                    'aria-label': this.props.copyKeys.seek },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'video-seek__container' },
	                    _react2['default'].createElement('div', { style: {
	                            width: this.props.percentageBuffered + '%'
	                        }, className: 'video-seek__buffer-bar' }),
	                    _react2['default'].createElement(_progressbarProgressBar2['default'], {
	                        onBlur: this.onBlur,
	                        onFocus: this.onFocus,
	                        onChange: this.seek,
	                        progress: this.props.percentagePlayed })
	                )
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            copyKeys: _propTypes2['default'].object,
	            seek: _propTypes2['default'].func,
	            percentageBuffered: _propTypes2['default'].number,
	            percentagePlayed: _propTypes2['default'].number,
	            duration: _propTypes2['default'].number
	        },
	        enumerable: true
	    }]);

	    return Seek;
	})(_react2['default'].Component);

	exports['default'] = Seek;
	module.exports = exports['default'];

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(56)['default'];

	var _createClass = __webpack_require__(105)['default'];

	var _classCallCheck = __webpack_require__(110)['default'];

	var _defineProperty = __webpack_require__(138)['default'];

	var _interopRequireDefault = __webpack_require__(119)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _this = this;

	var _propTypes = __webpack_require__(121);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(130);

	var _react2 = _interopRequireDefault(_react);

	var ProgressBar = (function (_React$Component) {
	    _inherits(ProgressBar, _React$Component);

	    function ProgressBar() {
	        _classCallCheck(this, ProgressBar);

	        _get(Object.getPrototypeOf(ProgressBar.prototype), 'constructor', this).apply(this, arguments);

	        this.onChange = function () {
	            // Placeholder
	        };

	        this.onFocus = function () {
	            // Placeholder
	        };

	        this.onBlur = function () {
	            // Placeholder
	        };
	    }

	    _createClass(ProgressBar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // 'orient' is not supported by React but
	            // is required for Firefox. Setting manually.
	            // https://github.com/facebook/react/issues/2453
	            this.refs.input.setAttribute('orient', this.props.orientation);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'video-progress-bar ' + (this.props.orientation === 'horizontal' ? 'video-progress-bar--horizontal' : 'video-progress-bar--vertical') },
	                _react2['default'].createElement('div', { className: 'video-progress-bar__fill', style: _defineProperty({}, this.props.orientation === 'horizontal' ? 'width' : 'height', this.props.progress + '%') }),
	                _react2['default'].createElement('input', { className: 'video-progress-bar__input',
	                    onBlur: this.props.onBlur,
	                    onFocus: this.props.onFocus,
	                    ref: 'input',
	                    onChange: this.props.onChange,
	                    type: 'range',
	                    min: '0',
	                    max: '100',
	                    value: this.props.progress,
	                    step: this.props.step })
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            orientation: _propTypes2['default'].string,
	            step: _propTypes2['default'].number,
	            progress: _propTypes2['default'].number,
	            onChange: _propTypes2['default'].func,
	            onFocus: _propTypes2['default'].func,
	            onBlur: _propTypes2['default'].func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            orientation: 'horizontal',
	            step: 0.1,
	            progress: 0,
	            onChange: _this.onChange,
	            onFocus: _this.onFocus,
	            onBlur: _this.onBlur
	        },
	        enumerable: true
	    }]);

	    return ProgressBar;
	})(_react2['default'].Component);

	exports['default'] = ProgressBar;
	module.exports = exports['default'];

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(139);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(107);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(56)['default'];

	var _createClass = __webpack_require__(105)['default'];

	var _classCallCheck = __webpack_require__(110)['default'];

	var _interopRequireDefault = __webpack_require__(119)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _propTypes = __webpack_require__(121);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(130);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(132);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var _progressbarProgressBar = __webpack_require__(137);

	var _progressbarProgressBar2 = _interopRequireDefault(_progressbarProgressBar);

	var Mute = (function (_React$Component) {
	    _inherits(Mute, _React$Component);

	    function Mute() {
	        var _this = this;

	        _classCallCheck(this, Mute);

	        _get(Object.getPrototypeOf(Mute.prototype), 'constructor', this).apply(this, arguments);

	        this.changeVolume = function (e) {
	            _this.props.setVolume(e.target.value / 100, true);
	            _this.props.unmute();
	        };

	        this.toggleMute = function () {
	            // If we volume has been dragged to 0, assume it is in
	            // a muted state and then toggle to full volume.
	            if (_this.props.volume <= 0) {
	                _this.props.setVolume(1);
	            } else {
	                _this.props.toggleMute();
	            }
	        };
	    }

	    _createClass(Mute, [{
	        key: 'shouldComponentUpdate',

	        /**
	         * As controls receive all props for extensibility, we do a quick
	         * check and make sure only the props we care about have changed.
	         * @param  {object} nextProps The next props from parent
	         * @return {boolean}          Whether we re-render or not
	         */
	        value: function shouldComponentUpdate(nextProps) {
	            return this.props.muted !== nextProps.muted || this.props.toggleMute !== nextProps.toggleMute || this.props.volume !== nextProps.volume || this.props.setVolume !== nextProps.setVolume || this.props.unmute !== nextProps.unmute;
	        }

	        /**
	         * Calculates the seek time based on click position and element offset.
	         * @param  {object} e Event object
	         * @return {undefined}
	         */
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'video-mute video__control' },
	                _react2['default'].createElement(
	                    'button',
	                    {
	                        className: 'video-mute__inner',
	                        onClick: this.toggleMute,
	                        'aria-label': this.props.muted || this.props.volume <= 0 ? this.props.copyKeys.unmute : this.props.copyKeys.mute },
	                    this.props.muted || this.props.volume <= 0 ? _react2['default'].createElement(_iconIcon2['default'], { name: 'volume-off' }) : _react2['default'].createElement(_iconIcon2['default'], { name: 'volume-up' })
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'video-mute__volume' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'video-mute__track' },
	                        _react2['default'].createElement(_progressbarProgressBar2['default'], {
	                            orientation: 'vertical',
	                            onChange: this.changeVolume,
	                            progress: this.props.muted ? 0 : this.props.volume * 100
	                        })
	                    )
	                )
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            copyKeys: _propTypes2['default'].object,
	            volume: _propTypes2['default'].number,
	            unmute: _propTypes2['default'].func,
	            setVolume: _propTypes2['default'].func,
	            toggleMute: _propTypes2['default'].func,
	            muted: _propTypes2['default'].bool
	        },
	        enumerable: true
	    }]);

	    return Mute;
	})(_react2['default'].Component);

	exports['default'] = Mute;
	module.exports = exports['default'];

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(56)['default'];

	var _createClass = __webpack_require__(105)['default'];

	var _classCallCheck = __webpack_require__(110)['default'];

	var _interopRequireDefault = __webpack_require__(119)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _propTypes = __webpack_require__(121);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(130);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(132);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var Time = (function (_React$Component) {
	    _inherits(Time, _React$Component);

	    function Time() {
	        _classCallCheck(this, Time);

	        _get(Object.getPrototypeOf(Time.prototype), 'constructor', this).apply(this, arguments);

	        this.formatTime = function (seconds) {
	            var date = new Date(Date.UTC(1970, 1, 1, 0, 0, 0, 0));
	            seconds = isNaN(seconds) ? 0 : Math.floor(seconds);
	            date.setSeconds(seconds);
	            return date.toISOString().substr(11, 8);
	        };
	    }

	    _createClass(Time, [{
	        key: 'shouldComponentUpdate',

	        /**
	         * As controls receive all props for extensibility, we do a quick
	         * check and make sure only the props we care about have changed.
	         * @param  {object} nextProps The next props from parent
	         * @return {boolean}          Whether we re-render or not
	         */
	        value: function shouldComponentUpdate(nextProps) {
	            return this.props.currentTime !== nextProps.currentTime || this.props.duration !== nextProps.duration;
	        }

	        /**
	         * Formats time into a friendlier format
	         * @param  {number} seconds Time in seconds
	         * @return {string}         Timestamp in the format of HH:MM:SS
	         */
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'video-time video__control' },
	                _react2['default'].createElement(
	                    'span',
	                    { className: 'video-time__current' },
	                    this.formatTime(this.props.currentTime)
	                ),
	                '/',
	                _react2['default'].createElement(
	                    'span',
	                    { className: 'video-time__duration' },
	                    this.formatTime(this.props.duration)
	                )
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            currentTime: _propTypes2['default'].number,
	            duration: _propTypes2['default'].number
	        },
	        enumerable: true
	    }]);

	    return Time;
	})(_react2['default'].Component);

	exports['default'] = Time;
	module.exports = exports['default'];

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(56)['default'];

	var _createClass = __webpack_require__(105)['default'];

	var _classCallCheck = __webpack_require__(110)['default'];

	var _interopRequireDefault = __webpack_require__(119)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _propTypes = __webpack_require__(121);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(130);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(132);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var Fullscreen = (function (_React$Component) {
	    _inherits(Fullscreen, _React$Component);

	    function Fullscreen() {
	        _classCallCheck(this, Fullscreen);

	        _get(Object.getPrototypeOf(Fullscreen.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Fullscreen, [{
	        key: 'shouldComponentUpdate',

	        /**
	         * As controls receive all props for extensibility, we do a quick
	         * check and make sure only the props we care about have changed.
	         * @param  {object} nextProps The next props from parent
	         * @return {boolean}          Whether we re-render or not
	         */
	        value: function shouldComponentUpdate(nextProps) {
	            return this.props.fullscreen !== nextProps.fullscreen;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'button',
	                {
	                    onClick: this.props.fullscreen,
	                    className: 'video-fullscreen video__control',
	                    'aria-label': this.props.copyKeys.fullscreen },
	                _react2['default'].createElement(_iconIcon2['default'], { name: 'resize-full' })
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            copyKeys: _propTypes2['default'].object,
	            fullscreen: _propTypes2['default'].func
	        },
	        enumerable: true
	    }]);

	    return Fullscreen;
	})(_react2['default'].Component);

	exports['default'] = Fullscreen;
	module.exports = exports['default'];

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var debounce = __webpack_require__(144);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed invocations. Provide an options object to indicate
	 * that `func` should be invoked on the leading and/or trailing edge of the
	 * `wait` timeout. Subsequent calls to the throttled function return the
	 * result of the last `func` call.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the throttled function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=true] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // avoid excessively updating the position while scrolling
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	 * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	 *   'trailing': false
	 * }));
	 *
	 * // cancel a trailing throttled call
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (options === false) {
	    leading = false;
	  } else if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = throttle;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(145);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeNow = getNative(Date, 'now');

	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }

	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }

	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }

	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }

	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);

	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;

	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = debounce;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = getNative;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var copy = {
	    sourceError: 'Video cannot be played in this browser.',
	    play: 'Play video',
	    pause: 'Pause video',
	    mute: 'Mute video',
	    unmute: 'Unmute video',
	    fullscreen: 'View video fullscreen',
	    seek: 'Seek video'
	};
	exports['default'] = copy;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;