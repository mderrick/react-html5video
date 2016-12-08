import React from 'react';
import video from './../Video/Video';
import styles from './DefaultPlayer.css';
import PlayPause from './PlayPause/PlayPause';
import Seek from './Seek/Seek';
import Volume from './Volume/Volume';

const DefaultPlayer = (props) => {
    const {
        video,
        children,
        className,
        ...restProps
    } = props;
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}>
            <video
                className={styles.video}
                {...restProps}>
                { children }
            </video>
            <div className={styles.controls}>
                <PlayPause {...video} />
                <Seek {...video} />
                <Volume {...video} />
            </div>
        </div>
    );
};

export default video(DefaultPlayer);
