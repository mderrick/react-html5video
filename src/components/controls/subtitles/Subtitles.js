import React from 'react';

var Subtitles = React.createClass({

    propTypes: {
        copyKeys: React.PropTypes.object,
        setSubtitles: React.PropTypes.func
    },

    render() {
        return (
            <button
                className="video-play video__control"
                onClick={this.props.setSubtitles}>
                CC
            </button>
        );
    }
});

export default Subtitles;
