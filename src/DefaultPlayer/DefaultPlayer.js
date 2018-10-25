import React from 'react';
import PropTypes from 'prop-types';
import videoConnect from './../video/video';
import copy from './copy';
import {
    setVolume,
    showTrack,
    toggleTracks,
    toggleMute,
    togglePause,
    setCurrentTime,
    toggleFullscreen,
    getPercentagePlayed,
    getPercentageBuffered
} from './../video/api';
import styles from './DefaultPlayer.css';
import Time from './Time/Time';
import Seek from './Seek/Seek';
import Volume from './Volume/Volume';
import Captions from './Captions/Captions';
import PlayPause from './PlayPause/PlayPause';
import Fullscreen from './Fullscreen/Fullscreen';
import Overlay from './Overlay/Overlay';

const DefaultPlayer = ({
    copy,
    video,
    style,
    controls,
    children,
    className,
    onSeekChange,
    onVolumeChange,
    onVolumeClick,
    onCaptionsClick,
    onPlayPauseClick,
    onFullscreenClick,
    onCaptionsItemClick,
    ...restProps
}) => {
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}
        style={style}>
            <video
                className={styles.video}
                {...restProps}>
                { children }
            </video>
            <Overlay
                onClick={onPlayPauseClick}
                {...video} />
            { controls && controls.length && !video.error
                ? <div className={styles.controls}>
                        { controls.map((control, i) => {
                            switch (control) {
                                case 'Seek':
                                    return <Seek
                                        key={i}
                                        ariaLabel={copy.seek}
                                        className={styles.seek}
                                        onChange={onSeekChange}
                                        {...video} />;
                                case 'PlayPause':
                                    return <PlayPause
                                        key={i}
                                        ariaLabelPlay={copy.play}
                                        ariaLabelPause={copy.pause}
                                        onClick={onPlayPauseClick}
                                        {...video} />;
                                case 'Fullscreen':
                                    return <Fullscreen
                                        key={i}
                                        ariaLabel={copy.fullscreen}
                                        onClick={onFullscreenClick}
                                        {...video} />;
                                case 'Time':
                                    return <Time
                                        key={i}
                                        {...video} />;
                                case 'Volume':
                                    return <Volume
                                        key={i}
                                        onClick={onVolumeClick}
                                        onChange={onVolumeChange}
                                        ariaLabelMute={copy.mute}
                                        ariaLabelUnmute={copy.unmute}
                                        ariaLabelVolume={copy.volume}
                                        {...video} />;
                                case 'Captions':
                                    return video.textTracks && video.textTracks.length
                                        ? <Captions
                                            key={i}
                                            onClick={onCaptionsClick}
                                            ariaLabel={copy.captions}
                                            onItemClick={onCaptionsItemClick}
                                            {...video}/>
                                        : null;
                                default:
                                    return null;
                            }
                        }) }
                    </div>
                : null }
        </div>
    );
};

const controls = ['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen', 'Captions'];

DefaultPlayer.defaultProps = {
    copy,
    controls,
    video: {}
};

DefaultPlayer.propTypes = {
    copy: PropTypes.object.isRequired,
    controls: PropTypes.arrayOf(PropTypes.oneOf(controls)),
    video: PropTypes.object.isRequired
};

function isLoading(readyState, networkState, userAgent) {
  if (readyState == 0 && networkState == 1) {
    // If nothing fetched but idle likely preload=none so not loading.
    return false;
  }
  // TODO: This is not pretty. Doing device detection to remove spinner on iOS
  // devices for a quick and dirty win. We should see if we can use the same
  // readyState check safely across all browsers.
  const readyEnough = /iPad|iPhone|iPod/.test(userAgent) ? 1 : 4;
  return readyState < readyEnough;
}

const connectedPlayer = videoConnect(
    DefaultPlayer,
    ({ networkState, readyState, error, ...restState }) => ({
        video: {
            readyState,
            networkState,
            loading: isLoading(readyState, networkState, navigator.userAgent),
            error: error || networkState === 3,
            percentagePlayed: getPercentagePlayed(restState),
            percentageBuffered: getPercentageBuffered(restState),
            ...restState
        }
    }),
    (videoEl, state) => ({
        onFullscreenClick: () => toggleFullscreen(videoEl.parentElement),
        onVolumeClick: () => toggleMute(videoEl, state),
        onCaptionsClick: () => toggleTracks(state),
        onPlayPauseClick: () => togglePause(videoEl, state),
        onCaptionsItemClick: (track) => showTrack(state, track),
        onVolumeChange: (e) => setVolume(videoEl, state, e.target.value),
        onSeekChange: (e) => setCurrentTime(videoEl, state, e.target.value * state.duration / 100)
    })
);

export {
    connectedPlayer as default,
    isLoading,
    DefaultPlayer,
    Time,
    Seek,
    Volume,
    Captions,
    PlayPause,
    Fullscreen,
    Overlay
};
