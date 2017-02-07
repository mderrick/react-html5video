import React from 'react';
import videoConnect from './../video/video';
import {
    setVolume,
    fullscreen,
    toggleMute,
    togglePause,
    setCurrentTime,
    getPercentagePlayed,
    getPercentageBuffered
} from './../video/api';
import styles from './DefaultPlayer.css';
import PlayPause from './PlayPause/PlayPause';
import Seek from './Seek/Seek';
import Volume from './Volume/Volume';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import Time from './Time/Time';
import Fullscreen from './Fullscreen/Fullscreen';

const DefaultPlayer = ({
    video,
    style,
    children,
    className,
    onSeekChange,
    onVolumeChange,
    onVolumeClick,
    onPlayPauseClick,
    onFullscreenClick,
    ...restProps
}) => {
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}
        style={style}>
            { video.error
                ? <ErrorMessage
                    className={styles.error}
                    {...video} />
                : null }
            <video
                className={styles.video}
                {...restProps}>
                { children }
            </video>
            <div className={styles.controls}>
                <PlayPause
                    onClick={onPlayPauseClick}
                    {...video} />
                <Seek
                    className={styles.seek}
                    onChange={onSeekChange}
                    {...video} />
                <Time {...video} />
                <Volume
                    onChange={onVolumeChange}
                    onClick={onVolumeClick}
                    {...video} />
                <Fullscreen
                    onClick={onFullscreenClick}
                    {...video} />
            </div>
        </div>
    );
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
        onPlayPauseClick: () => togglePause(videoEl, state),
        onVolumeChange: (e) => setVolume(videoEl, state, e.target.value),
        onSeekChange: (e) => setCurrentTime(videoEl, state, e.target.value * state.duration / 100)
    })
);
