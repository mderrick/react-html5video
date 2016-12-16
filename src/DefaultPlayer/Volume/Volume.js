import React from 'react';
import styles from './Volume.css';

export default ({ setVolume, toggleMute, volume, muted, className }) => {
    const change = (e) => {
        setVolume(e.target.value);
    };
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}>
            <button
                onClick={toggleMute}
                type="button">
                { muted || volume <= 0
                    ? 'Unmute'
                    : 'Mute'
                }
            </button>
            <input
                min="0"
                step={0.1}
                max="1"
                type="range"
                onChange={change}
                value={muted
                    ? 0
                    : +volume}  />
        </div>
    );
};
