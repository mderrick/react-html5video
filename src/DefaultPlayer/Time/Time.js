import React from 'react';
import styles from './Time.css';

const formatTime = (seconds) => {
    const date = new Date(Date.UTC(1970,1,1,0,0,0,0));
    seconds = isNaN(seconds) || seconds > 86400
        ? 0
        : Math.floor(seconds);
    date.setSeconds(seconds);
    const duration = date.toISOString().substr(11, 8).replace(/^0{1,2}:?0{0,1}/,'');
    return duration;
};

export default ({ currentTime, duration, className }) => {
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}>
            <span className={styles.current}>
                { formatTime(currentTime) }
            </span>
            /
            <span className={styles.duration}>
                { formatTime(duration) }
            </span>
        </div>
    );
};
