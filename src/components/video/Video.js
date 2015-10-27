import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './../controls/controls';
import Seek from './../controls/seek/seek';
import Play from './../controls/play/play';
import Mute from './../controls/mute/mute';
import Fullscreen from './../controls/fullscreen/fullscreen';
import Icon from './../icon/icon';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import throttle from 'lodash.throttle';

var Video = React.createClass({

    propTypes: {
        autoPlay: React.PropTypes.bool,
        muted: React.PropTypes.bool,
        controls: React.PropTypes.bool,
        children: React.PropTypes.node
    },

    mixins: [PureRenderMixin],

    getInitialState() {
        // Set state from props and always use these
        // to check state of video as they will update
        // on the video events. Changing this state however will not
        // change the video. The API methods must be used.
        return {
            paused: !this.props.autoPlay,
            muted: !!this.props.muted,
            volume: 1
        };
    },

    /**
     * Creates a throttle update method.
     * @return {undefined}
     */
    componentWillMount: function() {
        this._updateStateFromVideo = throttle(this.updateStateFromVideo, 100);
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
     * Sets the video to fullscreen.
     * @return {undefined}
     */
    fullscreen() {
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

            // Non-standard state computed from properties
            percentageBuffered: this.videoEl.buffered.length && this.videoEl.buffered.end(this.videoEl.buffered.length - 1) / this.videoEl.duration * 100,
            percentagePlayed: this.videoEl.currentTime / this.videoEl.duration * 100
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
            fullscreen: this.fullscreen,
            setVolume: this.setVolume
        }, this.state);

        var controls = React.Children.map(this.props.children, (child) => {
            if (child.type === 'source') {
                return void 0;
            }
            return React.cloneElement(child, extendedProps);
        });

        if (!controls.length) {
            controls = <Controls {...extendedProps} />;
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

    render() {
        // If controls prop is provided remove it
        // and use our own controls.
        var {controls, ...otherProps} = this.props;
        return (
            <div className={'video ' + (!this.state.paused ? 'video--playing' : 'video--paused')}>
                <video
                    {...otherProps}
                    className="video__el"
                    ref={(el) => {
                        this.videoEl = el;
                    }}
                    onPlay={this._updateStateFromVideo}
                    onPause={this._updateStateFromVideo}
                    onVolumeChange={this._updateStateFromVideo}
                    onTimeUpdate={this._updateStateFromVideo}
                    onProgress={this._updateStateFromVideo}>
                        {this.renderSources()}
                </video>
                <div className="video__overlay-play" onClick={this.togglePlay}>
                    {this.state.paused ? <Icon name="play-1" /> : ''}
                </div>
                {controls ? this.renderControls() : ''}
            </div>
        );
    }
});

export {Video as default, Controls, Seek, Play, Mute, Fullscreen};
