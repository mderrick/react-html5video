(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-addons-pure-render-mixin"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-addons-pure-render-mixin"], factory);
	else if(typeof exports === 'object')
		exports["ReactHtml5Video"] = factory(require("react"), require("react-dom"), require("react-addons-pure-render-mixin"));
	else
		root["ReactHtml5Video"] = factory(root["React"], root["ReactDOM"], root["react-addons-pure-render-mixin"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_54__) {
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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(20);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _objectWithoutProperties = __webpack_require__(21)['default'];

	var _extends = __webpack_require__(22)['default'];

	var _Object$assign = __webpack_require__(23)['default'];

	var _interopRequireDefault = __webpack_require__(38)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(39);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(40);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _overlayOverlay = __webpack_require__(41);

	var _overlayOverlay2 = _interopRequireDefault(_overlayOverlay);

	var _controlsControls = __webpack_require__(44);

	var _controlsControls2 = _interopRequireDefault(_controlsControls);

	var _controlsSeekSeek = __webpack_require__(46);

	var _controlsSeekSeek2 = _interopRequireDefault(_controlsSeekSeek);

	var _controlsPlayPlay = __webpack_require__(45);

	var _controlsPlayPlay2 = _interopRequireDefault(_controlsPlayPlay);

	var _controlsMuteMute = __webpack_require__(51);

	var _controlsMuteMute2 = _interopRequireDefault(_controlsMuteMute);

	var _controlsFullscreenFullscreen = __webpack_require__(53);

	var _controlsFullscreenFullscreen2 = _interopRequireDefault(_controlsFullscreenFullscreen);

	var _controlsTimeTime = __webpack_require__(52);

	var _controlsTimeTime2 = _interopRequireDefault(_controlsTimeTime);

	var _reactAddonsPureRenderMixin = __webpack_require__(54);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _lodashThrottle = __webpack_require__(55);

	var _lodashThrottle2 = _interopRequireDefault(_lodashThrottle);

	var _assetsCopy = __webpack_require__(58);

	var _assetsCopy2 = _interopRequireDefault(_assetsCopy);

	var Video = _react2['default'].createClass({
	    displayName: 'Video',

	    propTypes: {
	        // Non-standard props
	        copyKeys: _react2['default'].PropTypes.object,
	        children: _react2['default'].PropTypes.node,

	        // HTML5 Video standard attributes
	        autoPlay: _react2['default'].PropTypes.bool,
	        muted: _react2['default'].PropTypes.bool,
	        controls: _react2['default'].PropTypes.bool
	    },

	    mixins: [_reactAddonsPureRenderMixin2['default']],

	    getDefaultProps: function getDefaultProps() {
	        return {
	            copyKeys: _assetsCopy2['default']
	        };
	    },

	    getInitialState: function getInitialState() {
	        // Set state from props and always use these
	        // to check state of video as they will update
	        // on the video events. Changing this state however will not
	        // change the video. The API methods must be used.
	        return {
	            networkState: 0,
	            paused: !this.props.autoPlay,
	            muted: !!this.props.muted,
	            volume: 1,
	            error: false,
	            loading: false
	        };
	    },

	    /**
	     * Creates a throttle update method.
	     * @return {undefined}
	     */
	    componentWillMount: function componentWillMount() {
	        // Also bind 'this' as we call _updateStateFromVideo outside
	        // of Reacts synthetic events as well.
	        this._updateStateFromVideo = (0, _lodashThrottle2['default'])(this.updateStateFromVideo, 100).bind(this);
	    },

	    /**
	     * Bind eventlisteners not supported by React's synthetic events
	     * https://facebook.github.io/react/docs/events.html
	     * @return {undefined}
	     */
	    componentDidMount: function componentDidMount() {
	        // Listen to error of last source.
	        this.videoEl.children[this.videoEl.children.length - 1].addEventListener('error', this._updateStateFromVideo);
	    },

	    /**
	     * Removes event listeners bound outside of React's synthetic events
	     * @return {undefined}
	     */
	    componentWillUnmount: function componentWillUnmount() {
	        // Remove event listener from video.
	        this.videoEl.children[this.videoEl.children.length - 1].removeEventListener('error', this._updateStateFromVideo);
	    },

	    /**
	     * Toggles the video to play and pause.
	     * @return {undefined}
	     */
	    togglePlay: function togglePlay() {
	        if (this.state.paused) {
	            this.play();
	        } else {
	            this.pause();
	        }
	    },

	    /**
	     * Toggles the video to mute and unmute.
	     * @return {undefined}
	     */
	    toggleMute: function toggleMute() {
	        if (this.state.muted) {
	            this.unmute();
	        } else {
	            this.mute();
	        }
	    },

	    /**
	     * Loads video.
	     * @return {undefined}
	     */
	    load: function load() {
	        this.videoEl.load();
	    },

	    /**
	     * Sets the video to fullscreen.
	     * @return {undefined}
	     */
	    fullscreen: function fullscreen() {
	        if (this.videoEl.requestFullscreen) {
	            this.videoEl.requestFullscreen();
	        } else if (this.videoEl.msRequestFullscreen) {
	            this.videoEl.msRequestFullscreen();
	        } else if (this.videoEl.mozRequestFullScreen) {
	            this.videoEl.mozRequestFullScreen();
	        } else if (this.videoEl.webkitRequestFullscreen) {
	            this.videoEl.webkitRequestFullscreen();
	        }
	    },

	    /**
	     * Plays the video.
	     * @return {undefined}
	     */
	    play: function play() {
	        this.videoEl.play();
	    },

	    /**
	     * Pauses the video.
	     * @return {undefined}
	     */
	    pause: function pause() {
	        this.videoEl.pause();
	    },

	    /**
	     * Unmutes video.
	     * @return {undefined}
	     */
	    unmute: function unmute() {
	        this.videoEl.muted = false;
	    },

	    /**
	     * Mutes the video.
	     * @return {undefined}
	     */
	    mute: function mute() {
	        this.videoEl.muted = true;
	    },

	    /**
	     * Seeks the video timeline.
	     * @param  {number} time The value in seconds to seek to
	     * @return {undefined}
	     */
	    seek: function seek(time) {
	        this.videoEl.currentTime = time;
	    },

	    /**
	     * Sets the video volume.
	     * @param  {number} volume The volume level between 0 and 1.
	     * @return {undefined}
	     */
	    setVolume: function setVolume(volume) {
	        this.videoEl.volume = volume;
	    },

	    /**
	     * Updates the React component state from the DOM video properties.
	     * This is where the magic happens.
	     * @return {undefined}
	     */
	    updateStateFromVideo: function updateStateFromVideo() {
	        this.setState({
	            // Standard video properties
	            duration: this.videoEl.duration,
	            currentTime: this.videoEl.currentTime,
	            buffered: this.videoEl.buffered,
	            paused: this.videoEl.paused,
	            muted: this.videoEl.muted,
	            volume: this.videoEl.volume,
	            readyState: this.videoEl.readyState,

	            // Non-standard state computed from properties
	            percentageBuffered: this.videoEl.buffered.length && this.videoEl.buffered.end(this.videoEl.buffered.length - 1) / this.videoEl.duration * 100,
	            percentagePlayed: this.videoEl.currentTime / this.videoEl.duration * 100,
	            error: this.videoEl.networkState === this.videoEl.NETWORK_NO_SOURCE,
	            loading: this.videoEl.readyState < this.videoEl.HAVE_ENOUGH_DATA
	        });
	    },

	    /**
	     * Returns everything but 'source' nodes from children
	     * and extends props so all children have access to Video API and state.
	     * If there are no controls provided, returns default Controls.
	     * @return {Array.<ReactElement>} An array of components.
	     */
	    renderControls: function renderControls() {
	        var extendedProps = _Object$assign({
	            // The public methods that all controls should be able to
	            // use.
	            togglePlay: this.togglePlay,
	            toggleMute: this.toggleMute,
	            play: this.play,
	            pause: this.pause,
	            mute: this.mute,
	            unmute: this.unmute,
	            seek: this.seek,
	            fullscreen: this.fullscreen,
	            setVolume: this.setVolume
	        }, this.state, { copyKeys: this.props.copyKeys });

	        var controls = _react2['default'].Children.map(this.props.children, function (child) {
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
	    },

	    /**
	     * Returns video 'source' nodes from children.
	     * @return {Array.<ReactElement>} An array of components.
	     */
	    renderSources: function renderSources() {
	        return _react2['default'].Children.map(this.props.children, function (child) {
	            if (child.type !== 'source') {
	                return void 0;
	            }
	            return child;
	        });
	    },

	    /**
	     * Gets the video class name based on its state
	     * @return {string} Class string
	     */
	    getVideoClassName: function getVideoClassName() {
	        var classString = 'video';

	        if (this.state.error) {
	            classString += ' video--error';
	        } else if (this.state.loading) {
	            classString += ' video--loading';
	        } else if (this.state.paused) {
	            classString += ' video--paused';
	        } else {
	            classString += ' video--playing';
	        }

	        if (this.state.focused) {
	            classString += ' video--focused';
	        }
	        return classString;
	    },

	    /**
	     * Sets state to show focused class on video player.
	     * @return {undefined}
	     */
	    onFocus: function onFocus() {
	        this.setState({
	            focused: true
	        });
	    },

	    /**
	     * Sets state to not be focused to remove class form video
	     * player.
	     * @return {undefined}
	     */
	    onBlur: function onBlur() {
	        this.setState({
	            focused: false
	        });
	    },

	    render: function render() {
	        var _this = this;

	        // If controls prop is provided remove it
	        // and use our own controls.
	        var _props = this.props;
	        var controls = _props.controls;

	        var otherProps = _objectWithoutProperties(_props, ['controls']);

	        return _react2['default'].createElement(
	            'div',
	            { className: this.getVideoClassName(),
	                tabIndex: '0',
	                onFocus: this.onFocus,
	                onBlur: this.onBlur },
	            _react2['default'].createElement(
	                'video',
	                _extends({}, otherProps, {
	                    className: 'video__el',
	                    ref: function (el) {
	                        _this.videoEl = el;
	                    },
	                    onPlay: this._updateStateFromVideo,
	                    onPause: this._updateStateFromVideo,
	                    onVolumeChange: this._updateStateFromVideo,
	                    onTimeUpdate: this._updateStateFromVideo,
	                    onProgress: this._updateStateFromVideo,
	                    onCanPlay: this._updateStateFromVideo,
	                    onCanPlayThrough: this._updateStateFromVideo }),
	                this.renderSources()
	            ),
	            controls ? this.renderControls() : ''
	        );
	    }
	});

	exports['default'] = Video;
	exports.Controls = _controlsControls2['default'];
	exports.Seek = _controlsSeekSeek2['default'];
	exports.Play = _controlsPlayPlay2['default'];
	exports.Mute = _controlsMuteMute2['default'];
	exports.Fullscreen = _controlsFullscreenFullscreen2['default'];
	exports.Time = _controlsTimeTime2['default'];
	exports.Overlay = _overlayOverlay2['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _assign = __webpack_require__(23);

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

	exports.__esModule = true;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	module.exports = __webpack_require__(28).Object.assign;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(26);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(31)});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(27)
	  , core      = __webpack_require__(28)
	  , ctx       = __webpack_require__(29)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 27 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 28 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(30);
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

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(32)
	  , toObject = __webpack_require__(33)
	  , IObject  = __webpack_require__(35);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(37)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 32 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(34);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(36);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	exports.default = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(38)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(39);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(42);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var _spinnerSpinner = __webpack_require__(43);

	var _spinnerSpinner2 = _interopRequireDefault(_spinnerSpinner);

	var Overlay = _react2['default'].createClass({
	    displayName: 'Overlay',

	    propTypes: {
	        error: _react2['default'].PropTypes.bool,
	        togglePlay: _react2['default'].PropTypes.func,
	        paused: _react2['default'].PropTypes.bool,
	        copyKeys: _react2['default'].PropTypes.object,
	        loading: _react2['default'].PropTypes.bool
	    },

	    renderContent: function renderContent() {
	        var content;
	        if (this.props.error) {
	            content = _react2['default'].createElement(
	                'div',
	                { className: 'video-overlay__error' },
	                _react2['default'].createElement(
	                    'p',
	                    { className: 'video-overlay__error-text' },
	                    this.props.copyKeys.sourceError
	                )
	            );
	        } else if (this.props.loading) {
	            content = _react2['default'].createElement(
	                'div',
	                { className: 'video-overlay__loader' },
	                _react2['default'].createElement(_spinnerSpinner2['default'], null)
	            );
	        } else {
	            content = _react2['default'].createElement(
	                'div',
	                { className: 'video-overlay__play', onClick: this.props.togglePlay },
	                this.props.paused ? _react2['default'].createElement(_iconIcon2['default'], { name: 'play-1' }) : ''
	            );
	        }
	        return content;
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'video-overlay' },
	            this.renderContent()
	        );
	    }

	});

	exports['default'] = Overlay;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable */
	/*
	 * Generated by the 'fontello-react' Grunt task.
	 */
	'use strict';

	var _interopRequireDefault = __webpack_require__(38)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(39);

	var _react2 = _interopRequireDefault(_react);

	var Icon = _react2['default'].createClass({
	    displayName: 'Icon',

	    propTypes: {
	        name: _react2['default'].PropTypes.oneOf(['play-1', 'volume-off', 'volume-down', 'volume-up', 'resize-full', 'resize-small', 'pause-1'])
	    },

	    /**
	     * Default the icon to the first one just to show something
	     * @return {Object} The default props
	     */
	    getDefaultProps: function getDefaultProps() {
	        return {
	            name: 'play-1'
	        };
	    },

	    render: function render() {
	        return _react2['default'].createElement('span', { className: 'video-icon video-icon--' + this.props.name });
	    }

	});

	exports['default'] = Icon;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(38)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(39);

	var _react2 = _interopRequireDefault(_react);

	var Spinner = _react2["default"].createClass({
	    displayName: "Spinner",

	    render: function render() {
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

	});

	exports["default"] = Spinner;
	module.exports = exports["default"];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(38)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(39);

	var _react2 = _interopRequireDefault(_react);

	var _playPlay = __webpack_require__(45);

	var _playPlay2 = _interopRequireDefault(_playPlay);

	var _seekSeek = __webpack_require__(46);

	var _seekSeek2 = _interopRequireDefault(_seekSeek);

	var _muteMute = __webpack_require__(51);

	var _muteMute2 = _interopRequireDefault(_muteMute);

	var _timeTime = __webpack_require__(52);

	var _timeTime2 = _interopRequireDefault(_timeTime);

	var _fullscreenFullscreen = __webpack_require__(53);

	var _fullscreenFullscreen2 = _interopRequireDefault(_fullscreenFullscreen);

	var Controls = _react2['default'].createClass({
	    displayName: 'Controls',

	    propTypes: {
	        error: _react2['default'].PropTypes.bool,
	        children: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.node)
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            children: [_react2['default'].createElement(_playPlay2['default'], null), _react2['default'].createElement(_seekSeek2['default'], null), _react2['default'].createElement(_timeTime2['default'], null), _react2['default'].createElement(_muteMute2['default'], null), _react2['default'].createElement(_fullscreenFullscreen2['default'], null)]
	        };
	    },

	    /**
	     * Returns children components with props
	     * from the parent Video component. Needed
	     * for when custom React components are used.
	     * @return {Array.<ReactElement>} An array of components.
	     */
	    renderChildren: function renderChildren() {
	        var _this = this;

	        return _react2['default'].Children.map(this.props.children, function (child) {
	            return _react2['default'].cloneElement(child, _this.props);
	        });
	    },

	    render: function render() {
	        return !this.props.error ? _react2['default'].createElement(
	            'div',
	            { className: 'video-controls video__controls' },
	            this.renderChildren()
	        ) : null;
	    }
	});

	exports['default'] = Controls;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(38)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(39);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(42);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var Play = _react2['default'].createClass({
	    displayName: 'Play',

	    propTypes: {
	        copyKeys: _react2['default'].PropTypes.object,
	        togglePlay: _react2['default'].PropTypes.func,
	        paused: _react2['default'].PropTypes.bool
	    },

	    /**
	     * As controls receive all props for extensibility, we do a quick
	     * check and make sure only the props we care about have changed.
	     * @param  {object} nextProps The next props from parent
	     * @return {boolean}          Whether we re-render or not
	     */
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        return this.props.paused !== nextProps.paused || this.props.togglePlay !== nextProps.togglePlay;
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'button',
	            {
	                className: 'video-play video__control',
	                onClick: this.props.togglePlay,
	                'aria-label': this.props.paused ? this.props.copyKeys.play : this.props.copyKeys.pause },
	            this.props.paused ? _react2['default'].createElement(_iconIcon2['default'], { name: 'play-1' }) : _react2['default'].createElement(_iconIcon2['default'], { name: 'pause-1' })
	        );
	    }
	});

	exports['default'] = Play;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(38)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(39);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(40);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _progressbarProgressbar = __webpack_require__(47);

	var _progressbarProgressbar2 = _interopRequireDefault(_progressbarProgressbar);

	var Seek = _react2['default'].createClass({
	    displayName: 'Seek',

	    propTypes: {
	        copyKeys: _react2['default'].PropTypes.object,
	        seek: _react2['default'].PropTypes.func,
	        percentageBuffered: _react2['default'].PropTypes.number,
	        percentagePlayed: _react2['default'].PropTypes.number,
	        duration: _react2['default'].PropTypes.number
	    },

	    getInitialState: function getInitialState() {
	        return {
	            // When the child range input becomes focused,
	            // we need to set this custom seek bar to look
	            // 'focused' with the correct styles. Need to
	            // do this via a class.
	            focused: false
	        };
	    },

	    /**
	     * Calculates the seek time based on change of input.
	     * @param  {object} e Event object
	     * @return {undefined}
	     */
	    seek: function seek(e) {
	        this.props.seek(e.target.value * this.props.duration / 100);
	    },

	    onFocus: function onFocus() {
	        this.setState({
	            focused: true
	        });
	    },

	    onBlur: function onBlur() {
	        this.setState({
	            focused: false
	        });
	    },

	    render: function render() {
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
	                _react2['default'].createElement(_progressbarProgressbar2['default'], {
	                    onBlur: this.onBlur,
	                    onFocus: this.onFocus,
	                    onChange: this.seek,
	                    progress: this.props.percentagePlayed })
	            )
	        );
	    }
	});

	exports['default'] = Seek;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _defineProperty = __webpack_require__(48)['default'];

	var _interopRequireDefault = __webpack_require__(38)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(39);

	var _react2 = _interopRequireDefault(_react);

	var ProgressBar = _react2['default'].createClass({
	    displayName: 'ProgressBar',

	    propTypes: {
	        orientation: _react2['default'].PropTypes.string,
	        step: _react2['default'].PropTypes.number,
	        progress: _react2['default'].PropTypes.number,
	        onChange: _react2['default'].PropTypes.func,
	        onFocus: _react2['default'].PropTypes.func,
	        onBlur: _react2['default'].PropTypes.func
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            orientation: 'horizontal',
	            step: 0.1,
	            progress: 0,
	            onChange: this.onChange,
	            onFocus: this.onFocus,
	            onBlur: this.onBlur
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        // 'orient' is not supported by React but
	        // is required for Firefox. Setting manually.
	        // https://github.com/facebook/react/issues/2453
	        this.refs.input.setAttribute('orient', this.props.orientation);
	    },

	    onChange: function onChange() {
	        // Placeholder
	    },

	    onFocus: function onFocus() {
	        // Placeholder
	    },

	    onBlur: function onBlur() {
	        // Placeholder
	    },

	    render: function render() {
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
	});

	exports['default'] = ProgressBar;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _defineProperty = __webpack_require__(49);

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

	exports.__esModule = true;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(32);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(38)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(39);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(42);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var _progressbarProgressbar = __webpack_require__(47);

	var _progressbarProgressbar2 = _interopRequireDefault(_progressbarProgressbar);

	var Mute = _react2['default'].createClass({
	    displayName: 'Mute',

	    propTypes: {
	        copyKeys: _react2['default'].PropTypes.object,
	        volume: _react2['default'].PropTypes.number,
	        unmute: _react2['default'].PropTypes.func,
	        setVolume: _react2['default'].PropTypes.func,
	        toggleMute: _react2['default'].PropTypes.func,
	        muted: _react2['default'].PropTypes.bool
	    },

	    /**
	     * As controls receive all props for extensibility, we do a quick
	     * check and make sure only the props we care about have changed.
	     * @param  {object} nextProps The next props from parent
	     * @return {boolean}          Whether we re-render or not
	     */
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        return this.props.muted !== nextProps.muted || this.props.toggleMute !== nextProps.toggleMute || this.props.volume !== nextProps.volume || this.props.setVolume !== nextProps.setVolume || this.props.unmute !== nextProps.unmute;
	    },

	    /**
	     * Calculates the seek time based on click position and element offset.
	     * @param  {object} e Event object
	     * @return {undefined}
	     */
	    changeVolume: function changeVolume(e) {
	        this.props.setVolume(e.target.value / 100);
	        this.props.unmute();
	    },

	    toggleMute: function toggleMute() {
	        // If we volume has been dragged to 0, assume it is in
	        // a muted state and then toggle to full volume.
	        if (this.props.volume <= 0) {
	            this.props.setVolume(1);
	        } else {
	            this.props.toggleMute();
	        }
	    },

	    render: function render() {
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
	                    _react2['default'].createElement(_progressbarProgressbar2['default'], {
	                        orientation: 'vertical',
	                        onChange: this.changeVolume,
	                        progress: this.props.muted ? 0 : this.props.volume * 100
	                    })
	                )
	            )
	        );
	    }
	});

	exports['default'] = Mute;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(38)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(39);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(42);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var Time = _react2['default'].createClass({
	    displayName: 'Time',

	    propTypes: {
	        currentTime: _react2['default'].PropTypes.number,
	        duration: _react2['default'].PropTypes.number
	    },

	    /**
	     * Formats time into a friendlier format
	     * @param  {number} seconds Time in seconds
	     * @return {string}         Timestamp in the format of HH:MM:SS
	     */
	    formatTime: function formatTime(seconds) {
	        var date = new Date(null);
	        seconds = isNaN(seconds) ? 0 : Math.floor(seconds);
	        date.setSeconds(seconds);
	        return date.toISOString().substr(11, 8);
	    },

	    render: function render() {
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
	});

	exports['default'] = Time;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(38)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(39);

	var _react2 = _interopRequireDefault(_react);

	var _iconIcon = __webpack_require__(42);

	var _iconIcon2 = _interopRequireDefault(_iconIcon);

	var Fullscreen = _react2['default'].createClass({
	    displayName: 'Fullscreen',

	    propTypes: {
	        copyKeys: _react2['default'].PropTypes.object,
	        fullscreen: _react2['default'].PropTypes.func
	    },

	    /**
	     * As controls receive all props for extensibility, we do a quick
	     * check and make sure only the props we care about have changed.
	     * @param  {object} nextProps The next props from parent
	     * @return {boolean}          Whether we re-render or not
	     */
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        return this.props.fullscreen !== nextProps.fullscreen;
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'button',
	            {
	                onClick: this.props.fullscreen,
	                className: 'video-fullscreen video__control',
	                'aria-label': this.props.copyKeys.fullscreen },
	            _react2['default'].createElement(_iconIcon2['default'], { name: 'resize-full' })
	        );
	    }
	});

	exports['default'] = Fullscreen;
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var debounce = __webpack_require__(56);

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


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(57);

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


/***/ },
/* 57 */
/***/ function(module, exports) {

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


/***/ },
/* 58 */
/***/ function(module, exports) {

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

/***/ }
/******/ ])
});
;