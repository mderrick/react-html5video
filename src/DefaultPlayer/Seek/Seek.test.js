import React from 'react';
import { shallow } from 'enzyme';
import Seek from './Seek';
import styles from './Seek.css';

describe('Seek', () => {
    let component;

    beforeAll(() => {
        component = shallow(<Seek />);
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

    it('has a range input with correct ranges and percentagePlayed value', () => {
        component.setProps({
            percentagePlayed: 10
        });
        const rangeInput = component.find(`.${styles.input}`);
        expect(rangeInput.prop('type'))
            .toEqual('range');
        expect(rangeInput.prop('orient'))
            .toEqual('horizontal');
        expect(rangeInput.prop('step'))
            .toEqual(1);
        expect(rangeInput.prop('min'))
            .toEqual('0');
        expect(rangeInput.prop('max'))
            .toEqual('100');
        expect(rangeInput.prop('value'))
            .toEqual(10);
    });

    it('changes the played fill bar width', () => {
        component.setProps({
            percentagePlayed: 0
        });
        expect(component.find(`.${styles.fill}`).prop('style').width)
            .toEqual('0%');
        component.setProps({
            percentagePlayed: 11
        });
        expect(component.find(`.${styles.fill}`).prop('style').width)
            .toEqual('11%');
    });

    it('changes the buffer bar width', () => {
        component.setProps({
            percentageBuffered: 0
        });
        expect(component.find(`.${styles.buffer}`).prop('style').width)
            .toEqual('0%');
        component.setProps({
            percentageBuffered: 11
        });
        expect(component.find(`.${styles.buffer}`).prop('style').width)
            .toEqual('11%');
    });
});
