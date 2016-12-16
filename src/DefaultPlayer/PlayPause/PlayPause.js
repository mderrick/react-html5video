import React from 'react';
import styles from './PlayPause.css';

export default ({ togglePause, paused, className }) => {
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}>
            <button
                onClick={togglePause}
                type="button">
                { paused
                    ? 'Play'
                    : 'Pause' }
            </button>
        </div>
    );
};
