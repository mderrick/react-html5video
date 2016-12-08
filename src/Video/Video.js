/**
 * This is a HoC that finds a single
 * <video> in a component and makes
 * all its PROPERTIES and METHODS
 * available as props.
 */
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import toClass from 'recompose/toClass';

const EVENTS = [
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onError',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting'
];

const METHODS = [
    'addTextTrack',
    'canPlayType',
    'load',
    'play',
    'pause'
];

const PROPERTIES = [
    'audioTracks',
    'autoPlay',
    'buffered',
    'controller',
    'controls',
    'currentSrc',
    'currentTime',
    'defaultMuted',
    'defaultPlaybackRate',
    'duration',
    'ended',
    'error',
    'loop',
    'mediaGroup',
    'muted',
    'networkState',
    'paused',
    'playbackRate',
    'played',
    'preload',
    'readyState',
    'seekable',
    'seeking',
    'src',
    'startDate',
    'textTracks',
    'videoTracks',
    'volume'
];

export default (BaseComponent) => {
    const BaseComponentClass = toClass(BaseComponent);

    class Video extends Component {
        constructor(props) {
            super(props);
            this.getVideoEl = this.getVideoEl.bind(this);
            this.updateState = this.updateState.bind(this);
        }

        getVideoEl() {
            return this.videoEl;
        }

        updateState() {
            this.setState(
                PROPERTIES.reduce((p, c) => {
                    p[c] = this.videoEl[c];
                    return p;
                }, {})
            );
        }

        componentDidMount() {
            this.videoEl = this.el.getElementsByTagName('video')[0];
            EVENTS.forEach(event => {
                this.videoEl[event.toLowerCase()] = this.updateState.bind(this);
            });
            this.methods = METHODS.reduce((p, c) => {
                p[c] = (...args) => {
                    if (this.videoEl[c]) this.videoEl[c].apply(this.videoEl, args);
                };
                return p;
            }, {});
        }

        render() {
            return (
                <BaseComponentClass
                    ref={(el) => this.el = findDOMNode(el)}
                    video={Object.assign({
                        // getVideoEl is used to update the video
                        // using the HTMLMediaElement API.
                        // e.g getVideoEl().muted = true;
                        getVideoEl: this.getVideoEl,
                        // forceUpdateState should never be used
                        // unless changing a video property that
                        // does not trigger an EVENT.
                        // See CaptionMenu component.
                        forceUpdateState: this.updateState,
                    }, this.methods, this.state, this.props)}
                    {...this.props} />
            );
        }
    }
    return Video;
}
