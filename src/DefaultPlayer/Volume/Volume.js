import React from 'react';
import styles from './Volume.css';
import VolumeOff from './../Icon/volume_off.svg';
import VolumeUp from './../Icon/volume_up.svg';

export default ({ onChange, onClick, volume, muted, className, ariaLabelMute, ariaLabelUnmute }) => {
    const volumeValue = muted
        ? 0
        : +volume;
    const isSilent = muted || volume <= 0;
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}>
            <button
                aria-label={isSilent
                    ? ariaLabelUnmute
                    : ariaLabelMute}
                className={styles.button}
                onClick={onClick}
                type="button">
                { isSilent
                    ? <VolumeOff
                        height={20}
                        width={20}
                        className={styles.icon}
                        fill="#fff" />
                    : <VolumeUp
                        height={20}
                        width={20}
                        className={styles.icon}
                        fill="#fff"/> }
            </button>
            <div className={styles.slider}>
                <div className={styles.track}>
                    <div
                        className={styles.fill}
                        style={{
                            height: `${volumeValue * 100}%`
                        }} />
                    <input
                        min="0"
                        step={0.1}
                        max="1"
                        type="range"
                        orient="vertical"
                        onChange={onChange}
                        className={styles.input}
                        value={volumeValue} />
                </div>
            </div>
        </div>
    );
};
