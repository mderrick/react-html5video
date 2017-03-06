import {
    mute,
    unmute,
    setVolume,
    showTrack,
    toggleMute,
    hideTracks,
    togglePause,
    toggleTracks,
    setCurrentTime,
    toggleFullscreen,
    getPercentagePlayed
} from './api';

describe('api', () => {
    let videoElMock;
    let textTracksMock;

    beforeEach(() => {
        videoElMock = {
            play: jest.fn(),
            pause: jest.fn()
        };
        textTracksMock = [{
            id: 1,
            mode: 'showing'
        }, {
            id: 2,
            mode: 'disabled'
        }, {
            id: 3,
            mode: 'disabled'
        }];
    });

    describe('togglePause', () => {
        it('plays if the video is paused', () => {
            expect(videoElMock.play).not.toHaveBeenCalled();
            togglePause(videoElMock, { paused: true });
            expect(videoElMock.play).toHaveBeenCalled();
            expect(videoElMock.pause).not.toHaveBeenCalled();
        });

        it('pauses if the video is playing', () => {
            expect(videoElMock.pause).not.toHaveBeenCalled();
            togglePause(videoElMock, { paused: false });
            expect(videoElMock.pause).toHaveBeenCalled();
            expect(videoElMock.play).not.toHaveBeenCalled();
        });
    });

    describe('setCurrentTime', () => {
        it('sets the current time', () => {
            expect(videoElMock.currentTime).toBe(undefined);
            setCurrentTime(videoElMock, undefined, 10);
            expect(videoElMock.currentTime).toBe(10);
        });
    });

    describe('setVolume', () => {
        it('unmutes', () => {
            expect(videoElMock.muted).toBe(undefined);
            setVolume(videoElMock, undefined, 10);
            expect(videoElMock.muted).toBe(false);
        });

        it('sets the volume', () => {
            expect(videoElMock.volume).toBe(undefined);
            setVolume(videoElMock, undefined, 10);
            expect(videoElMock.volume).toBe(10);
        });
    });

    describe('mute', () => {
        it('mutes', () => {
            expect(videoElMock.muted).toBe(undefined);
            mute(videoElMock);
            expect(videoElMock.muted).toBe(true);
        });
    });

    describe('unmute', () => {
        it('unmutes', () => {
            expect(videoElMock.muted).toBe(undefined);
            unmute(videoElMock);
            expect(videoElMock.muted).toBe(false);
        });
    });

    describe('toggleMute', () => {
        it('unmutes if muted and does not change volume', () => {
            expect(videoElMock.muted).toBe(undefined);
            toggleMute(videoElMock, { volume: 0.5, muted: true });
            expect(videoElMock.volume).toBe(undefined);
            expect(videoElMock.muted).toBe(false);
        });

        it('mutes if unmuted and does not change volume', () => {
            expect(videoElMock.muted).toBe(undefined);
            toggleMute(videoElMock, { volume: 0.5, muted: false });
            expect(videoElMock.volume).toBe(undefined);
            expect(videoElMock.muted).toBe(true);
        });

        it('sets volume to max if volume is 0', () => {
            expect(videoElMock.muted).toBe(undefined);
            expect(videoElMock.volume).toBe(undefined);
            toggleMute(videoElMock, { volume: 0, muted: false });
            expect(videoElMock.volume).toBe(1);
            expect(videoElMock.muted).toBe(false);
        });

        it('unmutes and sets volume to max if volume is 0', () => {
            expect(videoElMock.muted).toBe(undefined);
            expect(videoElMock.volume).toBe(undefined);
            toggleMute(videoElMock, { volume: 0, muted: true });
            expect(videoElMock.volume).toBe(1);
            expect(videoElMock.muted).toBe(false);
        });
    });

    describe('toggleFullscreen', () => {
        describe('going fullscreen', () => {
            it('requestsFullscreen', () => {
                videoElMock.requestFullscreen = jest.fn();
                toggleFullscreen(videoElMock);
                expect(videoElMock.requestFullscreen).toHaveBeenCalled();
            });

            it('requestsFullscreen for ms', () => {
                videoElMock.msRequestFullscreen = jest.fn();
                toggleFullscreen(videoElMock);
                expect(videoElMock.msRequestFullscreen).toHaveBeenCalled();
            });

            it('requestsFullscreen for moz', () => {
                videoElMock.mozRequestFullScreen = jest.fn();
                toggleFullscreen(videoElMock);
                expect(videoElMock.mozRequestFullScreen).toHaveBeenCalled();
            });

            it('requestsFullscreen for webkit', () => {
                videoElMock.webkitRequestFullscreen = jest.fn();
                toggleFullscreen(videoElMock);
                expect(videoElMock.webkitRequestFullscreen).toHaveBeenCalled();
            });
        });

        describe('exiting fullscreen', () => {
            beforeEach(() => {
                document.exitFullscreen = undefined;
                document.msExitFullscreen = undefined;
                document.mozCancelFullScreen = undefined;
                document.webkitExitFullscreen = undefined;
                document.fullscreenElement = undefined;
                document.msFullscreenElement = undefined;
                document.mozFullScreenElement = undefined;
                document.webkitFullscreenElement = undefined;
            });

            it('exitFullscreen', () => {
                document.fullscreenElement = videoElMock;
                document.exitFullscreen = jest.fn();
                toggleFullscreen(videoElMock);
                expect(document.exitFullscreen).toHaveBeenCalled();
            });

            it('exitFullscreen for ms', () => {
                document.msFullscreenElement = videoElMock;
                document.msExitFullscreen = jest.fn();
                toggleFullscreen(videoElMock);
                expect(document.msExitFullscreen).toHaveBeenCalled();
            });

            it('exitFullscreen for moz', () => {
                document.mozFullScreenElement = videoElMock;
                document.mozCancelFullScreen = jest.fn();
                toggleFullscreen(videoElMock);
                expect(document.mozCancelFullScreen).toHaveBeenCalled();
            });

            it('exitFullscreen for webkit', () => {
                document.webkitFullscreenElement = videoElMock;
                document.webkitExitFullscreen = jest.fn();
                toggleFullscreen(videoElMock);
                expect(document.webkitExitFullscreen).toHaveBeenCalled();
            });
        });
    });

    describe('hideTracks', () => {
        it('hides all of the tracks', () => {
            expect(textTracksMock[0].mode).toBe('showing');
            hideTracks({ textTracks: textTracksMock });
            expect(textTracksMock[0].mode).toBe('disabled');
        });

        it('uses constants on text tracks if they exist for IE', () => {
            textTracksMock[0].DISABLED = 3;
            expect(textTracksMock[0].mode).toBe('showing');
            hideTracks({ textTracks: textTracksMock });
            expect(textTracksMock[0].mode).toBe(3);
        });
    });

    describe('showTrack', () => {
        it('hides all of the tracks', () => {
            expect(textTracksMock[0].mode).toBe('showing');
            showTrack({ textTracks: textTracksMock }, textTracksMock[2]);
            expect(textTracksMock[0].mode).toBe('disabled');
        });

        it('sets the given track to show', () => {
            expect(textTracksMock[2].mode).toBe('disabled');
            showTrack({ textTracks: textTracksMock }, textTracksMock[2]);
            expect(textTracksMock[2].mode).toBe('showing');
        });

        it('uses constants on text tracks if they exist for IE', () => {
            textTracksMock[2].SHOWING = 2;
            expect(textTracksMock[2].mode).toBe('disabled');
            showTrack({ textTracks: textTracksMock }, textTracksMock[2]);
            expect(textTracksMock[2].mode).toBe(2);
        });
    });

    describe('toggleTracks', () => {
        it('shows the first track if no tracks are showing and there is no previously active track', () => {
            textTracksMock[0].mode = 'disabled';
            expect(textTracksMock[0].mode).toBe('disabled');
            toggleTracks({ textTracks: textTracksMock });
            expect(textTracksMock[0].mode).toBe('showing');
        });

        it('hides all tracks if a current track is showing', () => {
            expect(textTracksMock[0].mode).toBe('showing');
            toggleTracks({ textTracks: textTracksMock });
            expect(textTracksMock[0].mode).toBe('disabled');
            expect(textTracksMock[1].mode).toBe('disabled');
            expect(textTracksMock[2].mode).toBe('disabled');
        });

        it('shows the previously active track if no tracks are showing', () => {
            expect(textTracksMock[0].mode).toBe('showing');
            toggleTracks({ textTracks: textTracksMock });
            expect(textTracksMock[0].mode).toBe('disabled');
            toggleTracks({ textTracks: textTracksMock });
            expect(textTracksMock[0].mode).toBe('showing');
            showTrack({ textTracks: textTracksMock }, textTracksMock[2]);
            expect(textTracksMock[2].mode).toBe('showing');
            toggleTracks({ textTracks: textTracksMock });
            expect(textTracksMock[2].mode).toBe('disabled');
            toggleTracks({ textTracks: textTracksMock });
            expect(textTracksMock[2].mode).toBe('showing');
        });
    });

    describe('getPercentagePlayed', () => {
        it('returns correct percentage played', () => {
            expect(getPercentagePlayed({
                currentTime: 10,
                duration: 100
            })).toBe(10);

            expect(getPercentagePlayed({
                currentTime: 1,
                duration: 10
            })).toBe(10);

            expect(getPercentagePlayed({
                currentTime: 5,
                duration: 20
            })).toBe(25);
        });
    });
});
