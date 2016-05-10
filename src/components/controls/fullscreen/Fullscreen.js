import React from 'react';
import Icon from './../../icon/icon';

var Fullscreen = React.createClass({

    propTypes: {
        copyKeys: React.PropTypes.object,
        toggleFullscreen: React.PropTypes.func
    },

    /**
     * As controls receive all props for extensibility, we do a quick
     * check and make sure only the props we care about have changed.
     * @param  {object} nextProps The next props from parent
     * @return {boolean}          Whether we re-render or not
     */
    shouldComponentUpdate(nextProps) {
        return this.props.toggleFullscreen !== nextProps.toggleFullscreen;
    },

    render() {
        return (
            <button
                onClick={this.props.toggleFullscreen}
                className="video-fullscreen video__control"
                aria-label={this.props.copyKeys.fullscreen}>
                <Icon name="resize-full" />
            </button>
        );
    }
});

export default Fullscreen;
