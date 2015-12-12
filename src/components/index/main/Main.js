import React from 'react';
import Button from './../../button/button';
import browserStackLogo from './../../../../browserstack.png';
import {default as Video, Controls, Overlay} from './../../../../../src/components/video/video';

var videos = [
    // TODO: Don't hot link these. upload them somewhere.
    'http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov',
    'http://media.w3.org/2010/05/sintel/trailer.mp4',
    'http://media.w3.org/2010/05/video/movie_300.mp4',
    // Purposefully not a video to deomnstrate source error state
    'https://github.com/mderrick/react-html5video'
];

var Main = React.createClass({

    getInitialState() {
        return {
            videoId: 0
        };
    },

    showVideo(id) {
        this.setState({
            videoId: id
        }, this.reloadVideo);
    },

    reloadVideo() {
        // When changing a HTML5 video, you have to reload it.
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
        return (
            <div className="main">
                <h1 className="main__title">
                    <span className="main__react-logo"></span> React HTML5 Video
                </h1>
                <div className="main__video">
                    <Video controls autoPlay loop muted ref="video">
                        <source src={videos[this.state.videoId]} type="video/mp4" />
                        <Overlay />
                        <Controls />
                    </Video>
                </div>
                <div className="main__cols">
                    <div className="main__col1">                        
                        <h2 className="main__h2">Change Video Source</h2>
                        <ul className="main__ul">
                            <li><Button active={this.state.videoId === 0} onClick={this.showVideo.bind(this, 0)}>1</Button></li>
                            <li><Button active={this.state.videoId === 1} onClick={this.showVideo.bind(this, 1)}>2</Button></li>
                            <li><Button active={this.state.videoId === 2} onClick={this.showVideo.bind(this, 2)}>3</Button></li>
                            <li><Button active={this.state.videoId === 3} onClick={this.showVideo.bind(this, 3)}>Unsupported Source</Button></li>
                        </ul>
                    </div>
                    <div className="main__col2">
                        <h2 className="main__h2">Video API</h2>
                        <ul className="main__ul">
                            <li>
                                <Button onClick={this.play}>play</Button>
                            </li>
                            <li>
                                <Button onClick={this.pause}>pause</Button>
                            </li>
                            <li>
                                <Button onClick={this.togglePlay}>togglePlay</Button>
                            </li>
                            <li>
                                <Button onClick={this.mute}>mute</Button>
                            </li>
                            <li>
                                <Button onClick={this.unmute}>unmute</Button>
                            </li>
                            <li>
                                <Button onClick={this.toggleMute}>toggleMute</Button>
                            </li>
                            <li>
                                <Button onClick={this.seek}>seek</Button>
                                <input className="main__input" defaultValue="30" ref={(c) => this._seekInput = c} type="number" min="0" max="30" step="1" />
                            </li>
                            <li>
                                <Button onClick={this.setVolume}>setVolume</Button>
                                <input className="main__input" defaultValue="1" ref={(c) => this._volumeInput = c} type="number" min="0" max="1" step="0.1"/>
                            </li>
                            <li>
                                <Button onClick={this.fullscreen}>fullscreen</Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main__browser-stack">
                    <p>Thanks to <a href="http://www.browserstack.com" target="_blank"><img className="main__browser-stack-logo" src={browserStackLogo} /></a> for a free subscription to help test cross browser.</p>
                </div>
            </div>
        );
    }
});

export default Main;
