import React from 'react';
import { shallow } from 'enzyme';
import Fullscreen from './Fullscreen';
import styles from './Fullscreen.css';

describe('Fullscreen', () => {
    let component;

    beforeAll(() => {
        component = shallow(<Fullscreen />);
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

    it('triggers \'onClick\' prop when the button is clicked', () => {
        const spy = jest.fn();
        component.setProps({
            onClick: spy
        });
        expect(spy)
            .not.toHaveBeenCalled();
        component.find('button').simulate('click');
        expect(spy)
            .toHaveBeenCalled();
    });

    it('has correct aria-label', () => {
        expect(component.find('button').prop('aria-label'))
            .toEqual('Fullscreen');
    });
});
