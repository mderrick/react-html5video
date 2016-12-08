import React from 'react';
import { shallow } from 'enzyme';
import video from './Video';

const TestComponent = () => (
    <div>
        <video></video>
    </div>
);

describe('Video', () => {
    let Component;
    let component;

    beforeAll(() => {
        Component = video(TestComponent);
        component = shallow(
            <Component />
        );
    });

    it('returns a component with `video.forceUpdateState` method', () => {
        expect(component.prop('video').forceUpdateState)
            .toBe(component.instance().updateState);
    });

    it('returns a component with `video.getVideoEl` method', () => {
        expect(component.prop('video').getVideoEl)
            .toBe(component.instance().getVideoEl);
    });

    it('returns a component with all its state on the `video` prop', () => {
        const state = {
            html5: '1',
            dom: 2,
            properties: function() {
                return 3;
            }
        };
        component.setState(state);
        expect(component.prop('video').html5)
            .toEqual(state.html5);
        expect(component.prop('video').dom)
            .toEqual(state.dom);
        expect(component.prop('video').properties)
            .toEqual(state.properties);
    });
});
