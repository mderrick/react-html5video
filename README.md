# react-html5video

A customizeable HoC (Higher Order Component) for HTML5 Video that allows custom and configurable controls.

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

The simplest way to use this component is to use the default player that is provided. It works the same way as a normal HTML5 video by taking all the supported [HTML5 video attributes](https://developer.mozilla.org/en/docs/Web/HTML/Element/video) except for `controls`. This is now "controlled" and can be an array of supported component names in any order as below:

```js
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
render() {
    return (
        <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="http://sourcefile.webm" type="video/webm" />
            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
        </Video>
    );
}
```

### Advanced Usage

If you want to get creative and create your own video player then you will need to use the higher order component. The HoC connects a React component to all the [HTML5 video attributes](https://developer.mozilla.org/en/docs/Web/HTML/Element/video) and the [HTMLMediaElement](https://developer.mozilla.org/en/docs/Web/API/HTMLMediaElement) of the first video it finds in the component it is wrapping.

```js
import videoConnect from 'react-html5video';

const MyVideoPlayer = ({ video, videoEl, children, ...restProps }) => (
    <div>
        <video {...restProps}>
            { children }
        </video>
        <p>
            Here are the video properties for the above HTML5 video:
            { JSON.stringify(video) }
        </p>
        <a href="#" onClick={(e) => {
            e.preventDefault();
            // You can do what you like with the HTMLMediaElement DOM element also.
            videoEl.pause();
        }}>
            Pause video
        </a>
    </div>
);

export default videoConnect(MyVideoPlayer)
```

The above will simply print out the properties of the HTML5 `<video>` within `MyVideoPlayer`. Now you have these properties and the HTMLMediaElement itself available in your component, it is up to you to create your new custom controls using them. See the default player as an example.

#### API

The API behaves much like the [React Redux](https://github.com/reactjs/react-redux/) connect HoC but instead of using dispatch to change the state, we have access to the [HTMLMediaElement](https://developer.mozilla.org/en/docs/Web/API/HTMLMediaElement).

#### `videoConnect(ReactComponent, [mapStateToProps], [mapVideoElToProps], [mergeProps])`

- `mapStateToProps(videoState, ownProps)` - Use this to return the [HTML5 video attributes](https://developer.mozilla.org/en/docs/Web/HTML/Element/video) required for your component. The plain object returned here will be merged with what is returned from `mapVideoElToProps` using the `mergeProps` function. By Default this returns all video attributes so they are accessible on `this.props.video` in your wrapped component.

- `mapVideoElToProps(videoEl, videoState, ownProps)` - Use this to return a plain object that uses `videoEl` to update the videos state. `videoEl` is the raw [HTMLMediaElement](https://developer.mozilla.org/en/docs/Web/API/HTMLMediaElement). The object returned here will be merged with what is returned from `mapStateToProps` using the `mergeProps` function. By default the `videoEl` will be accessible on `this.props.videoEl` in your wrapped component.

- `mergeProps(stateProps, videoElProps, ownProps)` - If specified, it is passed the result of `mapStateToProps` `mapVideoElToProps` and the parent `props`. The plain object you return will be passed to your wrapped component. By default this will do `Object.assign({}, stateProps, videoElProps, ownProps)`.

## Contributing

### Dev Setup

To run a development server with HMR:

```bash
    $ npm i
    $ npm run i:demo
    $ npm start
```

## License
MIT
