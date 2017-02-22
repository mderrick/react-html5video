import React from 'react';
import styles from './Seek.css';

export default ({ onChange, percentagePlayed, percentageBuffered, className, ariaLabel }) => {
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
                    onChange={onChange}
                    aria-label={ariaLabel}
                    className={styles.input}
                    value={percentagePlayed} />
            </div>
        </div>
    );
};
