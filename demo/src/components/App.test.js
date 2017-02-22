import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import styles from './App.css';

describe('App', () => {
    let component;

    beforeEach(() => {
        component = shallow(
      <App />
    );
    });

    it('contains heading text', () => {
        expect(component.find('h1').text())
            .toEqual('React HTML5 Video');
    });

    it('has a className', () => {
        expect(component.prop('className'))
            .toEqual(styles.component);
    });
});
