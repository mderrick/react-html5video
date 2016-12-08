import React from 'react';
import styles from './Volume.css';

export default ({ getVideoEl, volume, muted, className }) => {
    const setVolume = (v) => {
        getVideoEl().volume = v;
    };
    const change = (e) => {
        getVideoEl().muted = false;
        setVolume(e.target.value);
    };
    const toggleMute = () => {
        if (muted || volume <= 0) {
            if (volume <= 0) {
                setVolume(1);
            }
            getVideoEl().muted = false;
        } else {
            getVideoEl().muted = true;
        }
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
