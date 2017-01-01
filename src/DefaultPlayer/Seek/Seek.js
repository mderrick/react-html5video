import React from 'react';
import styles from './Seek.css';

export default ({ setCurrentTime, duration, percentagePlayed, percentageBuffered, className }) => {
    const change = (e) => {
        setCurrentTime(e.target.value * duration / 100);
    };
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}>
            <div className={styles.track}>
                <div
                    className={styles.buffer}
                    style={{
                        width: `${percentageBuffered || 0}%`
                    }} />
                <div
                    className={styles.fill}
                    style={{
                        width: `${percentagePlayed || 0}%`
                    }} />
                <input
                    min="0"
                    step={1}
                    max="100"
                    type="range"
                    orient="horizontal"
                    onChange={change}
                    className={styles.input}
                    value={percentagePlayed} />
            </div>
        </div>
    );
};
