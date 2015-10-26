# react-html5video

A really simple customizeable HTML5 Video that uses the familiar HTML5 video markup with custom controls. View the [demo](http://mderrick.github.io/react-html5video/).

## Usage

`npm install react-html5video --save`

Then use the component as a normal HTML5 `<video>` element using all the normal [html attributes](https://developer.mozilla.org/en/docs/Web/HTML/Element/video) and include `dist/ReactHtml5Video.css`.

```
    import Video from 'react-html5video';

    ...

    render() {
        return (
            <Video controls autoPlay loop muted poster="http://sourceposter.jpg">
                <source src="http://sourcefile.mp4" type="video/mp4" />
                <source src="http://sourcefile.webm" type="video/webm" />
            </Video>
        );
    }
```

## Customize controls

Add/Remove/Reorder the provided custom controls:

```
    import Video, { Controls, Mute, Play, Seek, Fullscreen } from 'react-html5video';

    ...

    render() {
        return (
            <Video controls>
                <source src="http://sourcefile.mp4" type="video/mp4" />
                <source src="http://sourcefile.webm" type="video/webm" />
                <Controls>
                    <Play />
                    <Seek />
                    ... Move them around and/or add more.
                </Controls>
            </Video>
        );
    }
```

You can also create your very own custom children components that can also interact with the video. All your custom children components will receive props to access these [video properties and methods](#props-and-methods). Obviously you can still call methods and set properties on the HTML5 DOM element directly if you have access to it.

```
    import Video, { Controls, Play, Mute } from 'react-html5video';
    import YourCustomControl from './your/custom/control';
    import YourCustomOverlayControl from './your/custom/overlay/control';

    ...

    render() {
        return (
            <Video controls autoPlay loop>
                <source src="http://sourcefile.mp4" type="video/mp4" />
                <source src="http://sourcefile.webm" type="video/webm" />
                
                <h1>Add your own HTML and React components</h1>
                <YourCustomOverlayControl />

                <Controls>
                    <Play />
                    <YourCustomControl />
                    <Mute />
                </Controls>
            </Video>
        );
    }
```

## Props and Methods

All children components of a `react-htmlvideo` will receive the following properties via props:
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
- `setVolume`.


## TODO

- Slider click areas need adjusting and fine tuning because of the range inputs are
a little off a long with the drag position.
- Firefox fonts need fixing.
- Need to smooth sliders animation.
- Add an elapsed time control.
- Readme to include image/gif.
- Style the demo to look somewhat respectable (bootstrap?).
- Allow drag and drop of components in demo.
- Bower setup.
- Don't Base64 encoding font files into CSS. Think of a neater way of using this components icons.
- Create base CSS that is functional and then create some themes!
- Document the development process
- Pre-commit hooks, for testing and linting.
- Unit tests and jenkins build.
- Include pre minified dists.
- Add Webpack as a Gruntfile task.