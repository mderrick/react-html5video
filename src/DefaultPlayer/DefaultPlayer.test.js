import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPlayer, isLoading } from './DefaultPlayer';
import styles from './DefaultPlayer.css';
import Time from './Time/Time';
import Seek from './Seek/Seek';
import Volume from './Volume/Volume';
import PlayPause from './PlayPause/PlayPause';
import Fullscreen from './Fullscreen/Fullscreen';
import Overlay from './Overlay/Overlay';

describe('DefaultPlayer', () => {
    let component;

    beforeAll(() => {
        component = shallow(<DefaultPlayer />);
    });

    it('should accept a className prop and append it to the components class', () => {
        const newClassNameString = 'a new className';
        expect(component.prop('className'))
            .toContain(styles.component);
        component.setProps({
            className: newClassNameString
        });
        expect(component.prop('className'))
            .toContain(styles.component);
        expect(component.prop('className'))
            .toContain(newClassNameString);
    });

    it('applies `style` prop if provided', () => {
        component.setProps({
            style: { color: 'red' }
        });
        expect(component.prop('style'))
            .toEqual({ color: 'red' });
    });

    it('spreads all parent props on the video element', () => {
        component.setProps({
            autoPlay: true
        });
        expect(component.find('video').prop('autoPlay'))
            .toEqual(true);
    });

    it('has an overlay component', () => {
        expect(component.find(Overlay).exists())
            .toBeTruthy();
    });

    it('renders some default controls in a default order', () => {
        const controlsComponent = component.find(`.${styles.controls}`);
        expect(controlsComponent.childAt(0).is(PlayPause))
            .toBeTruthy();
        expect(controlsComponent.childAt(1).is(Seek))
            .toBeTruthy();
        expect(controlsComponent.childAt(2).is(Time))
            .toBeTruthy();
        expect(controlsComponent.childAt(3).is(Volume))
            .toBeTruthy();
        expect(controlsComponent.childAt(4).is(Fullscreen))
            .toBeTruthy();
    });

    it('renders controls in a given custom order', () => {
        component.setProps({
            controls: ['Fullscreen', 'Seek', 'Time']
        });
        const controlsComponent = component.find(`.${styles.controls}`);
        expect(controlsComponent.childAt(0).is(Fullscreen))
            .toBeTruthy();
        expect(controlsComponent.childAt(1).is(Seek))
            .toBeTruthy();
        expect(controlsComponent.childAt(2).is(Time))
            .toBeTruthy();
    });

    it('renders no controls when given an empty array', () => {
        expect(component.find(`.${styles.controls}`).exists())
            .toBeTruthy();
        component.setProps({
            controls: []
        });
        expect(component.find(`.${styles.controls}`).exists())
            .toBeFalsy();
    });

    it('renders no controls when there is an error', () => {
        component.setProps({
            controls: ['PlayPause'],
            video: {
                error: false
            }
        });
        expect(component.find(`.${styles.controls}`).exists())
            .toBeTruthy();
        component.setProps({
            controls: ['PlayPause'],
            video: {
                error: true
            }
        });
        expect(component.find(`.${styles.controls}`).exists())
            .toBeFalsy();
    });
});

describe('isLoading', () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState
    const HAVE_NOTHING = 0;
    const HAVE_CURRENT_DATA = 2;
    const HAVE_ENOUGH_DATA = 4;
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/networkState
    const NETWORK_EMPTY = 0;
    const NETWORK_IDLE = 1;
    const NETWORK_LOADING = 2;

    it('is true when empty', () => {
      expect(isLoading(HAVE_NOTHING, NETWORK_EMPTY, 'Mozilla')).toBe(true);
    });
    it('is false when nothing and idle', () => {
      expect(isLoading(HAVE_NOTHING, NETWORK_IDLE, 'Mozilla')).toBe(false);
    });
    it('depends on UA when current', () => {
      expect(isLoading(HAVE_CURRENT_DATA, NETWORK_IDLE, 'Mozilla')).toBe(true);
      expect(isLoading(HAVE_CURRENT_DATA, NETWORK_LOADING, 'Mozilla')).toBe(true);
      expect(isLoading(HAVE_CURRENT_DATA, NETWORK_IDLE, 'iPad')).toBe(false);
      expect(isLoading(HAVE_CURRENT_DATA, NETWORK_LOADING, 'iPad')).toBe(false);
    });
    it('is false when enough', () => {
      expect(isLoading(HAVE_ENOUGH_DATA, NETWORK_IDLE, 'Mozilla')).toBe(false);
      expect(isLoading(HAVE_ENOUGH_DATA, NETWORK_LOADING, 'Mozilla')).toBe(false);
      expect(isLoading(HAVE_ENOUGH_DATA, NETWORK_IDLE, 'iPad')).toBe(false);
    });
});
