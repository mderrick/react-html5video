import React from 'react';
import styles from './Captions.css';

export default ({ textTracks, getVideoEl, forceUpdateState, className }) => {
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}>
            <button className={styles.button}>
                CC
            </button>
            <ul className={styles.trackList}>
                { textTracks && Array.prototype.slice.call(textTracks).map((track, i) => (
                    <li
                        className={track.mode === 'showing'
                            ? styles.activeTrack
                            : styles.trackItem}
                        onClick={() => {
                            const videoEl = getVideoEl()
                            if (track.mode !== 'showing') {
                                videoEl.textTracks[i].mode = 'showing';
                            } else {
                                videoEl.textTracks[i].mode = 'disabled';
                            }
                            // There is no `onTrackChange` event so we
                            // have to forcibly update the video state
                            // in order for the UI to update.
                            forceUpdateState();
                        }}
                        key={track.language}>
                        { track.label }
                    </li>
                ))}
            </ul>
        </div>
    );
};
