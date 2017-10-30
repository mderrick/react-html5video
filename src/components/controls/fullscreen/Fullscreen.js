import PropTypes from 'prop-types';
import React from 'react';
import Icon from './../../icon/Icon';

class Fullscreen extends React.Component {
    static propTypes = {
        copyKeys: PropTypes.object,
        fullscreen: PropTypes.func
    };

    /**
     * As controls receive all props for extensibility, we do a quick
     * check and make sure only the props we care about have changed.
     * @param  {object} nextProps The next props from parent
     * @return {boolean}          Whether we re-render or not
     */
    shouldComponentUpdate(nextProps) {
        return this.props.fullscreen !== nextProps.fullscreen;
    }

    render() {
        return (
            <button
                onClick={this.props.fullscreen}
                className="video-fullscreen video__control"
                aria-label={this.props.copyKeys.fullscreen}>
                <Icon name="resize-full" />
            </button>
        );
    }
}

export default Fullscreen;
