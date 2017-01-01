import {
    mute,
    unmute,
    setVolume,
    toggleMute,
    togglePause,
    setCurrentTime,
    getPercentagePlayed,
    getPercentageBuffered
} from './api';

describe('api', () => {
    let videoElMock;

    beforeEach(() => {
        videoElMock = {
            play: jest.fn(),
            pause: jest.fn()
        };
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
