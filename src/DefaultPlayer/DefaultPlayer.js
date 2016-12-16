import React from 'react';
import video from './../video/video';
import {
    setVolume,
    toggleMute,
    togglePause,
    setCurrentTime
} from './../video/api';
import styles from './DefaultPlayer.css';
import PlayPause from './PlayPause/PlayPause';
import Seek from './Seek/Seek';
import Volume from './Volume/Volume';

const DefaultPlayer = (props) => {
    const {
        video,
        style,
        children,
        className,
        setVolume,
        toggleMute,
        togglePause,
        setCurrentTime,
        ...restProps
    } = props;
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
            <div className={styles.controls}>
                <PlayPause
                    togglePause={togglePause}
                    {...video} />
                <Seek
                    setCurrentTime={setCurrentTime}
                    {...video} />
                <Volume
                    setVolume={setVolume}
                    toggleMute={toggleMute}
                    {...video} />
            </div>
        </div>
    );
};

export default video(DefaultPlayer, undefined, (videoEl, state) => ({
    toggleMute: () => toggleMute(videoEl, state),
    togglePause: () => togglePause(videoEl, state),
    setVolume: (value) => setVolume(videoEl, state, value),
    setCurrentTime: (value) => setCurrentTime(videoEl, state, value)
}));
