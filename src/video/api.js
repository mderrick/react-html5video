/**
 * These are custom helper methods that are not native
 * to the HTMLMediaElement API. Pass in the native
 * Video element, state and optional desired value to
 * set. To be primarily used in `mapVideoElToProps`.
 */
export const togglePause = (videoEl, { paused }) => {
    if (paused) {
        videoEl.play();
    } else {
        videoEl.pause();
    }
};

export const setCurrentTime = (videoEl, state, value) => {
    videoEl.currentTime = value;
};

export const setVolume = (videoEl, state, value) => {
    videoEl.muted = false;
    videoEl.volume = value;
};

export const mute = (videoEl) => {
    videoEl.muted = true;
};

export const unmute = (videoEl) => {
    videoEl.muted = false;
};

export const toggleMute = (videoEl, { volume, muted }) => {
    if (muted || volume <= 0) {
        if (volume <= 0) {
            videoEl.volume = 1;
        }
        videoEl.muted = false;
    } else {
        videoEl.muted = true;
    }
};

export const fullscreen = (videoEl) => {
    if (document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) {
        if (document.exitFullscreen){
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen){
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else if (videoEl.requestFullscreen) {
        videoEl.requestFullscreen();
    } else if (videoEl.msRequestFullscreen) {
        videoEl.msRequestFullscreen();
    } else if (videoEl.mozRequestFullScreen) {
        videoEl.mozRequestFullScreen();
    } else if (videoEl.webkitRequestFullscreen) {
        videoEl.webkitRequestFullscreen();
    }
};

export const showTrack = ({ textTracks }, track) => {
    hideTracks({ textTracks });
    track.mode = track.SHOWING || 'showing';
};

export const hideTracks = ({ textTracks }) => {
    for (var i = 0; i < textTracks.length; i++) {
        textTracks[i].mode = textTracks[i].DISABLED || 'disabled';
    }
};

export const toggleTracks = (() => {
    let previousTrack;
    return ({ textTracks }) => {
        let currentTrack = [...textTracks]
            .filter((track) => track.mode === track.SHOWING || track.mode === 'showing')[0];
        if (currentTrack) {
            hideTracks({ textTracks });
            previousTrack = currentTrack;
        } else {
            showTrack({ textTracks }, previousTrack || textTracks[0]);
        }
}})();

/**
 * Custom getter methods that are commonly used
 * across video layouts. To be primarily used in
 * `mapStateToProps`
 */
export const getPercentageBuffered = ({ buffered, duration }) =>
    buffered && buffered.length && buffered.end(buffered.length - 1) / duration * 100 || 0;

export const getPercentagePlayed = ({ currentTime, duration }) =>
    currentTime / duration * 100;
