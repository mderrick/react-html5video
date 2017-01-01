import React from 'react';
import { shallow } from 'enzyme';
import PlayPause from './PlayPause';
import styles from './PlayPause.css';
import PlayArrow from './../Icon/play_arrow.svg';
import Pause from './../Icon/pause.svg';

describe('PlayPause', () => {
    let component;

    beforeAll(() => {
        component = shallow(<PlayPause />);
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

    it('triggers \'togglePause\' prop when the button is clicked', () => {
        const spy = jest.fn();
        component.setProps({
            togglePause: spy
        });
        expect(spy)
            .not.toHaveBeenCalled();
        component.find('button').simulate('click');
        expect(spy)
            .toHaveBeenCalled();
    });

    describe('when paused', () => {
        beforeAll(() => {
            component.setProps({
                paused: true
            });
        });

        it('shows a play icon', () => {
            expect(component.html())
                .toContain(PlayArrow);
            expect(component.html())
                .not.toContain(Pause);
        });

        it('has correct aria-label', () => {
            expect(component.find('button').prop('aria-label'))
                .toEqual('Play');
        });
    });

    describe('when playing', () => {
        beforeAll(() => {
            component.setProps({
                paused: false
            });
        });

        it('shows a pause icon', () => {
            expect(component.html())
                .toContain(Pause);
            expect(component.html())
                .not.toContain(PlayArrow);
        });

        it('has correct aria-label', () => {
            expect(component.find('button').prop('aria-label'))
                .toEqual('Pause');
        });
    });
});
