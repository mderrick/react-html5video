import React from 'react';
import video from './../video/video';
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
    setVolume,
    toggleMute,
    togglePause,
    setCurrentTime,
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
                    togglePause={togglePause}
                    {...video} />
                <Seek
                    className={styles.seek}
                    setCurrentTime={setCurrentTime}
                    {...video} />
                <Time {...video} />
                <Volume
                    setVolume={setVolume}
                    toggleMute={toggleMute}
                    {...video} />
                <Fullscreen
                    onClick={onFullscreenClick}
                    {...video} />
            </div>
        </div>
    );
};

export default video(
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
        toggleMute: () => toggleMute(videoEl, state),
        togglePause: () => togglePause(videoEl, state),
        setVolume: (value) => setVolume(videoEl, state, value),
        setCurrentTime: (value) => setCurrentTime(videoEl, state, value)
    })
);
