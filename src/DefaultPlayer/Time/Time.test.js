import React from 'react';
import { shallow } from 'enzyme';
import Time from './Time';
import styles from './Time.css';

describe('Time', () => {
    let component;

    beforeAll(() => {
        component = shallow(<Time />);
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

    it('shows video duration', () => {
        component.setProps({
            duration: 10
        });
        expect(component.find(`.${styles.duration}`).text())
            .toEqual('00:00:10');
    });

    it('shows current video elapsed time', () => {
        component.setProps({
            currentTime: 10
        });
        expect(component.find(`.${styles.current}`).text())
            .toEqual('00:00:10');
    });

    it('can handle minutes, hours and seconds', () => {
        component.setProps({
            currentTime: 60 * 2
        });
        expect(component.find(`.${styles.current}`).text())
            .toEqual('00:02:00');

        component.setProps({
            currentTime: 60 * 60 * 3
        });
        expect(component.find(`.${styles.current}`).text())
            .toEqual('03:00:00');

        component.setProps({
            currentTime: 60 * 60 * 3 + 72
        });
        expect(component.find(`.${styles.current}`).text())
            .toEqual('03:01:12');
    });

    it('fails gracefully and shows 00:00:00 when video is greater than 24 hours', () => {
        // Who has a video longer than 24 hours? If this ever occurs then we
        // should consider adding it.
        component.setProps({
            currentTime: 86401
        });
        expect(component.find(`.${styles.current}`).text())
            .toEqual('00:00:00');

        component.setProps({
            currentTime: 86400
        });
        expect(component.find(`.${styles.current}`).text())
            .toEqual('00:00:00');
    });

    it('fails gracefully and shows 00:00:00 when not given a number', () => {
        component.setProps({
            currentTime: null
        });
        expect(component.find(`.${styles.current}`).text())
            .toEqual('00:00:00');

        component.setProps({
            currentTime: undefined
        });
        expect(component.find(`.${styles.current}`).text())
            .toEqual('00:00:00');
    });
});
