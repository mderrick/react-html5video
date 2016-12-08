import React from 'react';
import styles from './PlayPause.css';

export default ({ pause, play, paused, className }) => {
    const toggle = () => {
        if (paused) {
            play();
        } else {
            pause();
        }
    };
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}>
            <button
                onClick={toggle}
                type="button">
                { paused
                    ? 'Play'
                    : 'Pause' }
            </button>
        </div>
    );
};
