import PropTypes from 'prop-types';
import React from 'react';
import Icon from './../../icon/Icon';

class Play extends React.Component {
    static propTypes = {
        copyKeys: PropTypes.object,
        togglePlay: PropTypes.func,
        paused: PropTypes.bool
    };

    /**
     * As controls receive all props for extensibility, we do a quick
     * check and make sure only the props we care about have changed.
     * @param  {object} nextProps The next props from parent
     * @return {boolean}          Whether we re-render or not
     */
    shouldComponentUpdate(nextProps) {
        return this.props.paused !== nextProps.paused ||
               this.props.togglePlay !== nextProps.togglePlay;
    }

    render() {
        return (
            <button
                className="video-play video__control"
                onClick={this.props.togglePlay}
                aria-label={this.props.paused
                        ? this.props.copyKeys.play : this.props.copyKeys.pause}>
                {this.props.paused ? <Icon name="play-1" /> : <Icon name="pause-1" />}
            </button>
        );
    }
}

export default Play;
