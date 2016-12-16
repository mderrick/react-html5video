import React from 'react';
import styles from './Seek.css';

export default ({ setCurrentTime, duration, currentTime, className }) => {
    const change = (e) => {
        setCurrentTime(e.target.value * duration / 100);
    };
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}>
            <input
                min="0"
                step={1}
                max="100"
                type="range"
                orient="horizontal"
                onChange={change}
                value={currentTime / duration * 100} />
        </div>
    );
};
