import React, { PropTypes } from 'react';
import videoConnect from './../video/video';
import copy from './copy';
import {
    setVolume,
    showTrack,
    toggleTracks,
    toggleMute,
    togglePause,
    setCurrentTime,
    toggleFullscreen,
    getPercentagePlayed,
    getPercentageBuffered
} from './../video/api';
import styles from './DefaultPlayer.css';
import Time from './Time/Time';
import Seek from './Seek/Seek';
import Volume from './Volume/Volume';
import Captions from './Captions/Captions';
import PlayPause from './PlayPause/PlayPause';
import Fullscreen from './Fullscreen/Fullscreen';
import Overlay from './Overlay/Overlay';

export const DefaultPlayer = ({
    copy,
    video,
    style,
    controls,
    children,
    className,
    onSeekChange,
    onVolumeChange,
    onVolumeClick,
    onCaptionsClick,
    onPlayPauseClick,
    onFullscreenClick,
    onCaptionsItemClick,
    ...restProps
}) => {
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}
        style={style}>
            <video
                className={styles.video}
                {...restProps}>
                { children }
            </video>
            <Overlay
                onClick={onPlayPauseClick}
                {...video} />
            { controls && controls.length && !video.error
                ? <div className={styles.controls}>
                        { controls.map((control, i) => {
                            switch (control) {
                                case 'Seek':
                                    return <Seek
                                        key={i}
                                        ariaLabel={copy.seek}
                                        className={styles.seek}
                                        onChange={onSeekChange}
                                        {...video} />;
                                case 'PlayPause':
                                    return <PlayPause
                                        key={i}
                                        ariaLabelPlay={copy.play}
                                        ariaLabelPause={copy.pause}
                                        onClick={onPlayPauseClick}
                                        {...video} />;
                                case 'Fullscreen':
                                    return <Fullscreen
                                        key={i}
                                        ariaLabel={copy.fullscreen}
                                        onClick={onFullscreenClick}
                                        {...video} />;
                                case 'Time':
                                    return <Time
                                        key={i}
                                        {...video} />;
                                case 'Volume':
                                    return <Volume
                                        key={i}
                                        onClick={onVolumeClick}
                                        onChange={onVolumeChange}
                                        ariaLabelMute={copy.mute}
                                        ariaLabelUnmute={copy.unmute}
                                        {...video} />;
                                case 'Captions':
                                    return video.textTracks && video.textTracks.length
                                        ? <Captions
                                            key={i}
                                            onClick={onCaptionsClick}
                                            ariaLabel={copy.captions}
                                            onItemClick={onCaptionsItemClick}
                                            {...video}/>
                                        : null;
                                default:
                                    return null;
                            }
                        }) }
                    </div>
                : null }
        </div>
    );
};

const controls = ['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen', 'Captions'];

DefaultPlayer.defaultProps = {
    copy,
    controls,
    video: {}
};

DefaultPlayer.propTypes = {
    copy: PropTypes.object.isRequired,
    controls: PropTypes.arrayOf(PropTypes.oneOf(controls)),
    video: PropTypes.object.isRequired
};

const READY_STATE_HAVE_METADATA = 1;

export default videoConnect(
    DefaultPlayer,
    ({ networkState, readyState, error, ...restState }) => ({
        video: {
            readyState,
            networkState,
            error: error || networkState === 3,
            loading: readyState < READY_STATE_HAVE_METADATA,
            percentagePlayed: getPercentagePlayed(restState),
            percentageBuffered: getPercentageBuffered(restState),
            ...restState
        }
    }),
    (videoEl, state) => ({
        onFullscreenClick: () => toggleFullscreen(videoEl.parentElement),
        onVolumeClick: () => toggleMute(videoEl, state),
        onCaptionsClick: () => toggleTracks(state),
        onPlayPauseClick: () => togglePause(videoEl, state),
        onCaptionsItemClick: (track) => showTrack(state, track),
        onVolumeChange: (e) => setVolume(videoEl, state, e.target.value),
        onSeekChange: (e) => setCurrentTime(videoEl, state, e.target.value * state.duration / 100)
    })
);
