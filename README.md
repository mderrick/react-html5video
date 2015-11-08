# react-html5video

A customizeable HTML5 Video that uses the familiar HTML5 video markup but with custom and configurable controls with i18n and a11y.

<img src="http://mderrick.github.io/react-html5video/example.png?v=1" align="center" height="337" width="600" />

View the [demo](http://mderrick.github.io/react-html5video/).

## Install

`npm install react-html5video --save` or `bower install react-html5video --save`

Include `dist/ReactHtml5Video.css` if you do not want to build your own CSS. Alternatively require `src/assets/video.css` if you want to compile the CSS yourself with [css-loaders](https://github.com/webpack/css-loader) and [url-loaders](https://github.com/webpack/url-loader) etc. See the demo [Webpack config](https://github.com/mderrick/react-html5video/blob/master/demo/webpack.config.js) as an example.

### Peer Dependencies

This component uses ES2015 and needs to be transpiled using something like [babel-loader](https://github.com/babel/babel-loader). It depends on:
- `react@0.14.x`
- `react-dom@0.14.x`
- `react-addons-pure-render-mixin@0.14.x`
- `lodash.throttle@latest`.

### UMD

If using the UMD module it is already transpiled to ES5 and `lodash.throttle` is included. You can find this build in the `dist` directory:

```js
// Includes lodash.throttle and is transpiled already
var Video = require('react-html5video/dist/ReactHtml5Video');  
```

```js
// Exports to this global
var Video = window.ReactHtml5Video;
```

```js
// Requires es6 transpiling and all peer dependencies installed
import { Video as Default, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';
```


## Usage

Use normal HTML5 `<video>` markup with all the standard [html attributes](https://developer.mozilla.org/en/docs/Web/HTML/Element/video) and configure the controls by adding, removing and shuffling them as you desire.

```js
import { Video as default, Controls, Mute, Play, Seek, Fullscreen, Time, Overlay } from 'react-html5video';
render() {
    return (
        <Video controls autoPlay loop muted poster="http://sourceposter.jpg">
            <source src="http://sourcefile.mp4" type="video/mp4" />
            <source src="http://sourcefile.webm" type="video/webm" />
            <h1>Optional HTML and components can be added also</h1>
            <CustomComponent />

            /* As soon as a child is supplied that is not a `<source>`
            you have to define all controls and overlays as the default
            controls will have been removed. They are however exported
            and can be re-applied as below in any order. */
            <Overlay />
            <Controls>
                <Play />
                <Seek />
                <Time />
                <Mute />
                <Fullscreen />
                <CustomControlComponent />
            </Controls>
        </Video>
    );
}
```

You can create your very own custom children components and controls that can interact with the video. All children components will receive [these props](#props-and-methods). Obviously you can still call methods and set properties on the HTML5 DOM element directly if you have access to it with `refs`.

## i18n

There is some text used that could require translations. This can be done like so:

```js
<Video copyKeys={{ key: value }}>
```

The default english `copyKeys` can be found in [here](https://github.com/mderrick/react-html5video/tree/master/src/assets/copy.js).

## a11y*

The custom controls provided are built using `<button>` and `<input type="range">` which means basic keyboard controls are available when they are focused. For example, you can and hit the space bar on mute, play and fullscreen buttons as well as seek using the arrow keys when focused on the slider. All inputs have a visible focus outline and can be tabbed to. `aria-label` attributes for screen readers have been used where user interaction is required. Try tabbing through the [demo](http://mderrick.github.io/react-html5video/) with [Vox](http://www.chromevox.com/) enabled.

*Disclaimer: Unfortuantely I don't much experience with a11y but I have tried to use some of the features from [PayPal's accessible HTML5 player](https://github.com/paypal/accessible-html5-video-player). If anyone has further input on this please raise an issue or a pull request.


## Props and Methods

All children components will receive the following properties via props:
- `copyKeys`
- `duration`
- `currentTime`
- `buffered`
- `paused`
- `muted`
- `volume`
- `percentageBuffered`
- `percentagePlayed`

All children components receive the following methods via props:
- `play`
- `pause`
- `togglePlay`
- `mute`
- `unmute`
- `toggleMute`
- `seek`
- `fullscreen`
- `setVolume`


## License
MIT
