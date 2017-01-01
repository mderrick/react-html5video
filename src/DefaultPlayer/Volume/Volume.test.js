import React from 'react';
import { shallow } from 'enzyme';
import Volume from './Volume';
import styles from './Volume.css';
import VolumeOff from './../Icon/volume_off.svg';
import VolumeUp from './../Icon/volume_up.svg';

describe('Volume', () => {
    let component;

    beforeAll(() => {
        component = shallow(<Volume />);
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

    it('has a vertical range input with correct ranges and step', () => {
        const rangeInput = component.find(`.${styles.input}`);
        expect(rangeInput.prop('type'))
            .toEqual('range');
        expect(rangeInput.prop('orient'))
            .toEqual('vertical');
        expect(rangeInput.prop('step'))
            .toEqual(0.1);
        expect(rangeInput.prop('min'))
            .toEqual('0');
        expect(rangeInput.prop('max'))
            .toEqual('1');
    });

    it('triggers \'toggleMute\' prop when the button is clicked', () => {
        const spy = jest.fn();
        component.setProps({
            toggleMute: spy
        });
        expect(spy)
            .not.toHaveBeenCalled();
        component.find('button').simulate('click');
        expect(spy)
            .toHaveBeenCalled();
    });

    describe('when muted', () => {
        beforeAll(() => {
            component.setProps({
                muted: true,
                volume: 0.5
            });
        });

        it('shows a muted icon', () => {
            expect(component.html())
                .toContain(VolumeOff);
            expect(component.html())
                .not.toContain(VolumeUp);
        });

        it('has an empty track fill and range input', () => {
            expect(component.find(`.${styles.fill}`).prop('style').height)
                .toEqual('0%');
            expect(component.find(`.${styles.input}`).prop('value'))
                .toEqual(0);
        });

        it('has correct aria-label', () => {
            expect(component.find('button').prop('aria-label'))
                .toEqual('Unmute');
        });
    });

    describe('when unmuted but has no volume', () => {
        beforeAll(() => {
            component.setProps({
                muted: false,
                volume: 0
            });
        });

        it('shows a muted icon', () => {
            expect(component.html())
                .toContain(VolumeOff);
            expect(component.html())
                .not.toContain(VolumeUp);
        });

        it('has an empty track fill and range input', () => {
            expect(component.find(`.${styles.fill}`).prop('style').height)
                .toEqual('0%');
            expect(component.find(`.${styles.input}`).prop('value'))
                .toEqual(0);
        });

        it('has correct aria-label', () => {
            expect(component.find('button').prop('aria-label'))
                .toEqual('Unmute');
        });
    });

    describe('when has volume and is not muted', () => {
        beforeAll(() => {
            component.setProps({
                muted: false,
                volume: 0.5
            });
        });

        it('shows an unmute icon', () => {
            expect(component.html())
                .toContain(VolumeUp);
            expect(component.html())
                .not.toContain(VolumeOff);
        });

        it('has some track filled and a range input value', () => {
            expect(component.find(`.${styles.fill}`).prop('style').height)
                .toEqual('50%');
            expect(component.find(`.${styles.input}`).prop('value'))
                .toEqual(0.5);
        });

        it('has correct aria-label', () => {
            expect(component.find('button').prop('aria-label'))
                .toEqual('Mute');
        });
    });
});
