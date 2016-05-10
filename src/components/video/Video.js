import React from 'react';
import Overlay from './overlay/overlay';
import Controls from './../controls/controls';
import Seek from './../controls/seek/seek';
import Play from './../controls/play/play';
import Mute from './../controls/mute/mute';
import Fullscreen from './../controls/fullscreen/fullscreen';
import Time from './../controls/time/time';
import throttle from 'lodash.throttle';
import copy from './../../assets/copy';

var EVENTS = [
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

var Video = React.createClass({

    propTypes: {
        // Non-standard props
        copyKeys: React.PropTypes.object,
        children: React.PropTypes.node,

        // HTML5 Video standard attributes
        autoPlay: React.PropTypes.bool,
        muted: React.PropTypes.bool,
        controls: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            copyKeys: copy
        };
    },

    getInitialState() {
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
    componentWillMount() {
        // Also bind 'this' as we call _updateStateFromVideo outside
        // of Reacts synthetic events as well.
        this._updateStateFromVideo = throttle(this.updateStateFromVideo, 100).bind(this);
        // Set up all React media events and call method
        // on props if provided.
        this.mediaEventProps = EVENTS.reduce((p, c) => {
            p[c] = () => {
                if (c in this.props && typeof this.props[c] === 'function') {
                    // A prop exists for this mediaEvent, call it.
                    this.props[c]();
                }
                this._updateStateFromVideo();
            };
            return p;
        }, {});
    },

    /**
     * Bind eventlisteners not supported by React's synthetic events
     * https://facebook.github.io/react/docs/events.html
     * @return {undefined}
     */
    componentDidMount() {
        // Listen to error of last source.
        this.videoEl.children[this.videoEl.children.length - 1]
            .addEventListener('error', this._updateStateFromVideo);
    },

    /**
     * Removes event listeners bound outside of React's synthetic events
     * @return {undefined}
     */
    componentWillUnmount() {
        // Remove event listener from video.
        this.videoEl.children[this.videoEl.children.length - 1]
            .removeEventListener('error', this._updateStateFromVideo);
    },

    /**
     * Toggles the video to play and pause.
     * @return {undefined}
     */
    togglePlay() {
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
    toggleMute() {
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
    load() {
        this.videoEl.load();
    },

    /**
     * toggle the video to fullscreen and window.
     * @return {undefined}
     */
    toggleFullscreen() {
        const ce = this.containerEl;
        if (!this.isFullscreen()) {
            if (ce.requestFullscreen) {
                ce.requestFullscreen();
            } else if (ce.msRequestFullscreen) {
                ce.msRequestFullscreen();
            } else if (ce.mozRequestFullScreen) {
                ce.mozRequestFullScreen();
            } else if (ce.webkitRequestFullscreen) {
                ce.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            this.onBlur();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    },

    /**
     * Is full screen?
     */
    isFullscreen() {
        return document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement;
    },

    /**
     * Plays the video.
     * @return {undefined}
     */
    play() {
        this.videoEl.play();
    },

    /**
     * Pauses the video.
     * @return {undefined}
     */
    pause() {
        this.videoEl.pause();
    },

    /**
     * Unmutes video.
     * @return {undefined}
     */
    unmute() {
        this.videoEl.muted = false;
    },

    /**
     * Mutes the video.
     * @return {undefined}
     */
    mute() {
        this.videoEl.muted = true;
    },

    /**
     * Seeks the video timeline.
     * @param  {number} time The value in seconds to seek to
     * @return {undefined}
     */
    seek(time) {
        this.videoEl.currentTime = time;
    },

    /**
     * Sets the video volume.
     * @param  {number} volume The volume level between 0 and 1.
     * @return {undefined}
     */
    setVolume(volume) {
        this.videoEl.volume = volume;
    },

    /**
     * Updates the React component state from the DOM video properties.
     * This is where the magic happens.
     * @return {undefined}
     */
    updateStateFromVideo() {
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
    renderControls() {
        var extendedProps = Object.assign({
            // The public methods that all controls should be able to
            // use.
            togglePlay: this.togglePlay,
            toggleMute: this.toggleMute,
            play: this.play,
            pause: this.pause,
            mute: this.mute,
            unmute: this.unmute,
            seek: this.seek,
            toggleFullscreen: this.toggleFullscreen,
            isFullscreen: this.isFullscreen,
            setVolume: this.setVolume
        }, this.state, {copyKeys: this.props.copyKeys});

        var controls = React.Children.map(this.props.children, (child) => {
            if (child.type === 'source') {
                return void 0;
            }
            return React.cloneElement(child, extendedProps);
        });

        if (!controls.length) {
            controls = (
                <div>
                    <Overlay {...extendedProps} />
                    <Controls {...extendedProps} />
                </div>
            );
        }
        return controls;
    },

    /**
     * Returns video 'source' nodes from children.
     * @return {Array.<ReactElement>} An array of components.
     */
    renderSources() {
        return React.Children.map(this.props.children, (child) => {
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
    getVideoClassName() {
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
    onFocus() {
        if (!this.isFullscreen()) {
            this.setState({
                focused: true
            });
        }
    },

    /**
     * Sets state to not be focused to remove class form video
     * player.
     * @return {undefined}
     */
    onBlur() {
        this.setState({
            focused: false
        });
    },

    render() {
        // If controls prop is provided remove it
        // and use our own controls.
        var {controls, ...otherProps} = this.props;
        return (
            <div className={this.getVideoClassName()}
                tabIndex="0"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                ref={ref => {
                    this.containerEl = ref;
                }}>
                <video
                    {...otherProps}
                    className="video__el"
                    ref={(el) => {
                        this.videoEl = el;
                    }}
                    //  We have throttled `_updateStateFromVideo` so listen to
                    //  every available Media event that React allows and
                    //  infer the Video state in that method from the Video properties.
                    {...this.mediaEventProps}>
                        {this.renderSources()}
                </video>
                {controls ? this.renderControls() : ''}
            </div>
        );
    }
});

export {Video as default, Controls, Seek, Play, Mute, Fullscreen, Time, Overlay};
