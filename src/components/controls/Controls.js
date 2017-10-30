import PropTypes from 'prop-types';
import React from 'react';
import Play from './play/Play';
import Seek from './seek/Seek';
import Mute from './mute/Mute';
import Time from './time/Time';
import Fullscreen from './fullscreen/Fullscreen';

class Controls extends React.Component {
    static propTypes = {
        error: PropTypes.bool,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };

    static defaultProps = {
        children: [
            <Play />,
            <Seek />,
            <Time />,
            <Mute />,
            <Fullscreen />
        ]
    };

    /**
     * Returns children components with props
     * from the parent Video component. Needed
     * for when custom React components are used.
     * @return {Array.<ReactElement>} An array of components.
     */
    renderChildren = () => {
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {...this.props});
        });
    };

    render() {
        return (
            !this.props.error ? (
                <div className="video-controls video__controls">
                    {this.renderChildren()}
                </div>
            ) : null
        );
    }
}

export default Controls;
