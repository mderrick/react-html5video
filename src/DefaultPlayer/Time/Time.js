import React from 'react';
import styles from './Time.css';

const formatTime = (seconds) => {
    const date = new Date(Date.UTC(1970,1,1,0,0,0,0));
    seconds = isNaN(seconds) || seconds > 86400
        ? 0
        : Math.floor(seconds);
    date.setSeconds(seconds);
    let timeStamp = date.toISOString();
    if (seconds >= 3600) {
        timeStamp = timeStamp.substr(11, 8);
    } else {
        timeStamp = timeStamp.substr(14, 5);
    }
    return timeStamp;
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
