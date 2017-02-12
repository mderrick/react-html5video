import React, { PropTypes } from 'react';
import videoConnect from './../video/video';
import {
    setVolume,
    showTrack,
    toggleTracks,
    fullscreen,
    toggleMute,
    togglePause,
    setCurrentTime,
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
import ErrorMessage from './ErrorMessage/ErrorMessage';

export const DefaultPlayer = ({
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
            { video && video.error
                ? <ErrorMessage
                    className={styles.error}
                    {...video} />
                : null }
            <video
                className={styles.video}
                {...restProps}>
                { children }
            </video>
            { controls && controls.length
                ? <div className={styles.controls}>
                        { controls.map((control, i) => {
                            switch (control) {
                                case 'Seek':
                                    return <Seek
                                        key={i}
                                        className={styles.seek}
                                        onChange={onSeekChange}
                                        {...video} />;
                                case 'PlayPause':
                                    return <PlayPause
                                        key={i}
                                        onClick={onPlayPauseClick}
                                        {...video} />;
                                case 'Fullscreen':
                                    return <Fullscreen
                                        key={i}
                                        onClick={onFullscreenClick}
                                        {...video} />;
                                case 'Time':
                                    return <Time
                                        key={i}
                                        {...video} />;
                                case 'Volume':
                                    return <Volume
                                        key={i}
                                        onChange={onVolumeChange}
                                        onClick={onVolumeClick}
                                        {...video} />;
                                case 'Captions':
                                    return video && video.textTracks && video.textTracks.length
                                        ? <Captions
                                            key={i}
                                            onClick={onCaptionsClick}
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
    controls
};

DefaultPlayer.propTypes = {
    controls: PropTypes.arrayOf(PropTypes.oneOf(controls))
};

export default videoConnect(
    DefaultPlayer,
    ({ networkState, error, ...restState }) => ({
        video: {
            error: error || networkState === 3,
            percentagePlayed: getPercentagePlayed(restState),
            percentageBuffered: getPercentageBuffered(restState),
            ...restState
        }
    }),
    (videoEl, state) => ({
        onFullscreenClick: () => fullscreen(videoEl),
        onVolumeClick: () => toggleMute(videoEl, state),
        onCaptionsClick: () => toggleTracks(state),
        onPlayPauseClick: () => togglePause(videoEl, state),
        onCaptionsItemClick: (track) => showTrack(state, track),
        onVolumeChange: (e) => setVolume(videoEl, state, e.target.value),
        onSeekChange: (e) => setCurrentTime(videoEl, state, e.target.value * state.duration / 100)
    })
);
