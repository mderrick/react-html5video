import React from 'react';
import Icon from './../../icon/icon';

var Play = React.createClass({

    propTypes: {
        togglePlay: React.PropTypes.func,
        paused: React.PropTypes.bool
    },

    /**
     * As controls receive all props for extensibility, we do a quick
     * check and make sure only the props we care about have changed.
     * @param  {object} nextProps The next props from parent
     * @return {boolean}          Whether we re-render or not
     */
    shouldComponentUpdate(nextProps) {
        return this.props.paused !== nextProps.paused ||
               this.props.togglePlay !== nextProps.togglePlay;
    },

    render() {
        return (
            <button onClick={this.props.togglePlay} className="video-play video__control">
                {this.props.paused ? <Icon name="play-1" /> : <Icon name="pause-1" />}
            </button>
        );
    }
});

export default Play;
