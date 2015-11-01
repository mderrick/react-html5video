import React from 'react';
import Play from './play/play';
import Seek from './seek/seek';
import Mute from './mute/mute';
import Fullscreen from './fullscreen/fullscreen';

var Controls = React.createClass({

    propTypes: {
        error: React.PropTypes.bool,
        children: React.PropTypes.arrayOf(React.PropTypes.node)
    },

    getDefaultProps() {
        return {
            children: [
                <Play />,
                <Seek />,
                <Mute />,
                <Fullscreen />
            ]
        };
    },

    /**
     * Returns children components with props
     * from the parent Video component. Needed
     * for when custom React components are used.
     * @return {Array.<ReactElement>} An array of components.
     */
    renderChildren() {
        return React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, this.props);
        });
    },

    render() {
        return (
            !this.props.error ? (
                <div className="video-controls video__controls">
                    {this.renderChildren()}
                </div>
            ) : null
        );
    }
});

export default Controls;
