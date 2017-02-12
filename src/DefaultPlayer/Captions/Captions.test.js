import React from 'react';
import { shallow } from 'enzyme';
import Captions from './Captions';
import styles from './Captions.css';

describe('Captions', () => {
    let component;

    beforeAll(() => {
        component = shallow(<Captions />);
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
});
