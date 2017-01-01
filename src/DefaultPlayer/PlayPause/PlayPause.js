import React from 'react';
import styles from './PlayPause.css';
import PlayArrow from './../Icon/play_arrow.svg';
import Pause from './../Icon/pause.svg';

export default ({ togglePause, paused, className }) => {
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}>
            <button
                className={styles.button}
                onClick={togglePause}
                aria-label={ paused
                    ? 'Play'
                    : 'Pause' }
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
