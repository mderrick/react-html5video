import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPlayer } from './DefaultPlayer';
import styles from './DefaultPlayer.css';
import Time from './Time/Time';
import Seek from './Seek/Seek';
import Volume from './Volume/Volume';
import PlayPause from './PlayPause/PlayPause';
import Fullscreen from './Fullscreen/Fullscreen';
import ErrorMessage from './ErrorMessage/ErrorMessage';

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

    it('shows the error component when required', () => {
        expect(component.find(ErrorMessage).exists())
            .toBeFalsy();
        component.setProps({
            video: {
                error: true
            }
        });
        expect(component.find(ErrorMessage).exists())
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
});
