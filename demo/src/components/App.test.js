import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import styles from './App.css';
import pkg from './../../../package.json';

describe('App', () => {
    let component;

    beforeEach(() => {
        component = shallow(
      <App />
    );
    });

    it('contains heading text', () => {
        expect(component.find('h1').text())
            .toEqual(`This is a demo for "${pkg.name}".`);
    });

    it('has a className', () => {
        expect(component.prop('className'))
            .toEqual(styles.component);
    });
});
