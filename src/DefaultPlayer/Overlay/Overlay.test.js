import React from 'react';
import { shallow } from 'enzyme';
import Overlay from './Overlay';
import styles from './Overlay.css';
import PlayArrow from './../Icon/play_arrow.svg';
import Spin from './../Icon/spin.svg';
import Report from './../Icon/report.svg';

describe('Overlay', () => {
    let component;

    beforeAll(() => {
        component = shallow(<Overlay />);
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

    it('shows a PlayArrow icon if paused', () => {
        component.setProps({
            paused: true
        });
        expect(component.html())
            .toContain(PlayArrow);
    });

    it('shows Report icon if error regardless of loading or paused state', () => {
        component.setProps({
            error: true,
            loading: true,
            paused: true
        });
        expect(component.html())
            .toContain(Report);
    });

    it('shows Spin icon if loading regardless of paused state', () => {
        component.setProps({
            loading: true,
            paused: true,
            error: false
        });
        expect(component.html())
            .toContain(Spin);
    });
});
