# react-html5video

A customizeable HTML5 Video that uses the familiar HTML5 video markup but with custom and configurable controls with i18n and a11y.

[![Build Status](https://travis-ci.org/mderrick/react-html5video.svg?branch=master)](https://travis-ci.org/mderrick/react-html5video)
[![npm version](https://img.shields.io/npm/v/react-html5video.svg?style=flat-square)](https://www.npmjs.com/package/react-html5video)
[![npm downloads](https://img.shields.io/npm/dm/react-html5video.svg?style=flat-square)](https://www.npmjs.com/package/react-html5video)

<img src="http://mderrick.github.io/react-html5video/example.png?v=1" align="center" height="337" width="600" />

View the [demo](http://mderrick.github.io/react-html5video/).

## Install

`npm install react-html5video --save`

### Peer Dependencies

- `react@>=15.0.x`
- `react-dom@>=15.0.x`

## Usage

### Simple Usage

Use normal HTML5 `<video>` markup with all the standard [html attributes](https://developer.mozilla.org/en/docs/Web/HTML/Element/video) and supported [React media events](https://facebook.github.io/react/docs/events.html#media-events):

```js
import Video from 'react-html5video';
import 'react-html5video/dist/styles.css';
render() {
    return (
        <Video controls autoPlay loop muted
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="http://sourcefile.webm" type="video/webm" />
        </Video>
    );
}
```

### Advanced Usage

You can configure, customize and modify the controls by adding, removing and shuffling them as you desire. You can create your very own custom children components and controls that can interact with the video. All children components will receive [these props](#props-and-methods). Obviously you can still call methods and set properties on the HTML5 DOM element directly if you have access to it with `refs`:

```js
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';
import 'react-html5video/dist/styles.css';

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
- `playbackRate`
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
- `setPlaybackRate`

## Contributing

### Dev Setup

To run a development server with HMR:

```bash
    $ npm i
    $ npm run i:demo
    $ npm start
```

### Issues

Feel free to raise and solve any existing issues as desired. Where possible please do try and replicate any bugs you may have using the [react-html5video jsfiddle](https://jsfiddle.net/mderrick/7s9a311q/1/) and include them in your ticket.

## Thank You

<img src="http://mderrick.github.io/react-html5video/browserstack.png?v=1" height="22" width="100" />

[BrowserStack](http://www.browserstack.com) for a free subscription to help test cross browser.

## License
MIT
