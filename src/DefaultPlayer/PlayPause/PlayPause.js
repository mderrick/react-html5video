import React from 'react';
import styles from './PlayPause.css';
import PlayArrow from './../Icon/play_arrow.svg';
import Pause from './../Icon/pause.svg';

export default ({ onClick, paused, className, ariaLabelPlay, ariaLabelPause }) => {
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}>
            <button
                className={styles.button}
                onClick={onClick}
                aria-label={ paused
                    ? ariaLabelPlay
                    : ariaLabelPause }
                type="button">
                { paused
                    ? <PlayArrow
                        className={styles.icon}
                        fill="#fff" />
                    : <Pause
                        className={styles.icon}
                        fill="#fff" /> }
            </button>
        </div>
    );
};
