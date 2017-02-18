import React from 'react';
import styles from './Captions.css';
import ClosedCaptionIcon from './../Icon/closed_caption.svg';

export default ({ textTracks, onClick, onItemClick, className }) => {
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}>
            <button
                type="button"
                onClick={onClick}
                aria-label="Captions"
                className={styles.button}>
                <ClosedCaptionIcon
                    className={styles.icon}
                    fill="#fff" />
            </button>
            <ul className={styles.trackList}>
                { textTracks && [...textTracks].map((track) => (
                    <li
                        key={track.language}
                        className={track.mode === track.SHOWING || track.mode == 'showing'
                            ? styles.activeTrackItem
                            : styles.trackItem}
                        onClick={onItemClick.bind(this, track)}>
                        { track.label }
                    </li>
                ))}
            </ul>
        </div>
    );
};
