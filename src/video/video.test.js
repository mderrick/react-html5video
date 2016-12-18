import React from 'react';
import { mount, shallow } from 'enzyme';
import video from './video';

const TestControl = ({ duration }) => {
    return (
        <div>
            { duration }
        </div>
    );
};

const TestVideo = ({ video, ...restProps }) => {
    // Remove `videoEl` so we do not spread an unsupported
    // prop onto a DOM element.
    delete restProps.videoEl;
    return (
        <div>
            <video {...restProps}>
                <source src="1" />
            </video>
            <TestControl {...video} />
        </div>
    );
};

describe('video', () => {
    let Component;
    let component;

    beforeAll(() => {
        Component = video(TestVideo);
    });

    describe('the wrapped component', () => {
        beforeEach(() => {
            component = mount(
                <Component autoPlay />
            );
        });

        describe('HTMLMediaElement API as props', () => {
            let testControl;
            beforeEach(() => {
                component = mount(
                    <Component autoPlay />
                );
                testControl = component.find(TestControl);
                expect(testControl.props()).toEqual({});
            });

            it('should be provided when a video event is triggered', () => {
                component.find('video').node.dispatchEvent(new Event('play'));
            });

            it('should be provided when an error occurs on last source element', () => {
                component.find('source').node.dispatchEvent(new Event('error'));
            });

            afterEach(() => {
                // Only matching a subset is sufficient.
                expect(testControl.props()).toMatchObject({
                    controller: undefined,
                    autoPlay: undefined,
                    controls: false,
                    currentSrc: '',
                    currentTime: 0,
                    defaultMuted: false,
                    defaultPlaybackRate: 1,
                    duration: 0,
                    ended: false,
                    error: undefined,
                    loop: false,
                    mediaGroup: undefined,
                    muted: false,
                    networkState: 0,
                    paused: true,
                    playbackRate: 1,
                    preload: '',
                    readyState: 0,
                    seeking: false,
                    src: '',
                    startDate: undefined,
                    volume: 1
                });
            });
        });
    });

    describe('mapping to props', () => {
        let videoEl = {};

        beforeAll(() => {
            component = shallow(
                <Component autoPlay />
            );
            // Emulate videoEl being present
            // e.g. componentDidMount fired.
            component.instance().videoEl = videoEl;
            component.instance().forceUpdate();
        });

        beforeEach(() => {
            // Reset spy
            videoEl.play = jest.fn();
        });

        it('returns a component with it\'s ownProps', () => {
            expect(component.prop('autoPlay'))
                .toBe(true);
        });

        it('returns a component with a videoEl prop', () => {
            expect(component.prop('videoEl'))
                .toBe(videoEl);
        });

        it('returns a component with all of its state on the `video` prop', () => {
            const state = {
                html5: '1',
                dom: 2,
                properties: function() {
                    return 3;
                }
            };
            component.setState(state);
            expect(component.prop('video'))
                .toEqual(state);
        });

        it('can customise the mapping of props using mapToProps', () => {
            const Component = video(TestVideo, (state, ownProps) => {
                return {
                    state,
                    ownProps
                };
            });
            const component = shallow(
                <Component autoPlay />
            );
            component.setState({
                paused: true
            });
            expect(component.prop('state').paused)
                .toBe(true);
            expect(component.prop('ownProps').autoPlay)
                .toBe(true);
        });

        it('can map videoEl to props for creating custom API methods', () => {
            const Component = video(TestVideo, undefined, (el, state, ownProps) => {
                return {
                    togglePlay: () => {
                        el.play(ownProps.testProp);
                    }
                }
            });
            const component = shallow(
                <Component autoPlay testProp="testValue" />
            );
            component.instance().videoEl = videoEl;
            component.instance().forceUpdate();
            component.prop('togglePlay')();
            expect(videoEl.play).toHaveBeenCalledWith('testValue');
        });

        it('allows mapVideoElToProps to take precedence over mapStateToProps', () => {
            const Component = video(TestVideo, () => ({
                duplicateKey: 'mapStateToProps'
            }), () => ({
                duplicateKey: 'mapVideoElToProps'
            }));
            const component = shallow(
                <Component />
            );
            expect(component.prop('duplicateKey')).toBe('mapVideoElToProps');
        });

        it('allows ownProps to take precedence over mapVideoElToProps and mapStateToProps', () => {
            const Component = video(TestVideo, () => ({
                duplicateKey: 'mapStateToProps'
            }), () => ({
                duplicateKey: 'mapVideoElToProps'
            }));
            const component = shallow(
                <Component duplicateKey="ownProps" />
            );
            expect(component.prop('duplicateKey')).toBe('ownProps');
        });

        it('allows cusomtisation of merging ownProps, mapVideoElToProps and mapStateToProps to change the merging precedence', () => {
            const Component = video(TestVideo, () => ({
                duplicateKey: 'mapStateToProps'
            }), () => ({
                duplicateKey: 'mapVideoElToProps'
            }), (stateProps, videoElProps, ownProps) =>
                Object.assign({}, ownProps, stateProps, videoElProps));
            const component = shallow(
                <Component duplicateKey="ownProps" />
            );
            expect(component.prop('duplicateKey')).toBe('mapVideoElToProps');
        });
    });
});



