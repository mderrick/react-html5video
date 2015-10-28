import React from 'react';
import {default as Video, Controls} from './../../../src/components/video/video';

var Demo = React.createClass({

    getInitialState() {
        return {
            customHtml: false,
            title: 'Ocean clip',
            src: 'http://video-js.zencoder.com/oceans-clip.mp4'
        };
    },

    toggleCustomHtml(e) {
        this.setState({
            customHtml: !this.state.customHtml
        })
    },

    showMovieTrailer() {
        this.setState({
            title: 'Movie trailer',
            src: 'http://media.w3.org/2010/05/sintel/trailer.mp4'
        }, this.reloadVideo);
    },

    showOceanClip() {
        this.setState({
            title: 'Ocean clip',
            src: 'http://video-js.zencoder.com/oceans-clip.mp4'
        }, this.reloadVideo);
    },

    reloadVideo() {
        // When changing a HTML5 video, you have to reload it.
        // We use the HTML5 video API that we expose to interact with
        // it from a parent component.
        this.refs.video.load();
        this.refs.video.play();
    },

    togglePlay() {
        this.refs.video.togglePlay();
    },

    toggleMute() {
        this.refs.video.toggleMute()
    },
    fullscreen() {
        this.refs.video.fullscreen();
    },

    load() {
        this.refs.video.load();
    },

    play() {
        this.refs.video.play();
    },

    pause() {
        this.refs.video.pause();
    },

    unmute() {
        this.refs.video.unmute();
    },

    mute() {
        this.refs.video.mute();
    },

    seek() {
        this.refs.video.seek(this._seekInput.valueAsNumber);
    },

    setVolume() {
        this.refs.video.setVolume(this._volumeInput.valueAsNumber);
    },


    render() {
        var customHtml = (
            <p className="example-video-title">Custom HTML title: {this.state.title}</p>
        );
        return (
            <div>
                <h1>HTML5 Video React Component</h1>
                
                <Video controls autoPlay loop muted ref="video">
                    <source src={this.state.src} type="video/mp4" />     
                    {this.state.customHtml ? customHtml : <div/>}
                    <Controls />
                </Video>

                <h2>Change Video Source</h2>
                <button onClick={this.showMovieTrailer}>Movie Trailer</button>
                <button onClick={this.showOceanClip}>Ocean clip</button>

                <h2>Custom HTML</h2>
                <label htmlFor="showHtml">Show custom HTML:</label>
                <input id="showHtml" checked={this.state.customHtml} type="checkbox" onClick={this.toggleCustomHtml}/>
                

                <h2>Video Methods</h2>
                <p>These methods are available to use in all children components via 'props' and via 'refs' from a parent. 
                e.g: `this.refs.video.X` or `this.props.X`. You can obvioulsy use the DOM elements API directly too.</p>

                <ul>
                    <li>
                        <button onClick={this.play}>play</button>
                    </li>
                    <li>
                        <button onClick={this.pause}>pause</button>
                    </li>
                    <li>
                        <button onClick={this.togglePlay}>togglePlay</button>
                    </li>
                    <li>
                        <button onClick={this.mute}>mute</button>
                    </li>
                    <li>
                         <button onClick={this.unmute}>unmute</button>
                    </li>
                    <li>
                        <button onClick={this.toggleMute}>toggleMute</button>
                    </li>
                    <li>
                        <input defaultValue="30" ref={(c) => this._seekInput = c} type="number" />
                        <button onClick={this.seek}>seek</button>
                    </li>
                    <li>
                        <input defaultValue="1" ref={(c) => this._volumeInput = c} type="number" min="0" max="1" step="0.1"/>
                        <button onClick={this.setVolume}>setVolume</button>
                    </li>
                    <li>
                        <button onClick={this.fullscreen}>fullscreen</button>
                    </li>
                </ul>
            </div>
        );
    }
});

export default Demo;
