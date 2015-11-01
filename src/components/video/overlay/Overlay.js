import React from 'react';
import Icon from './../../icon/icon';
import Spinner from './../../spinner/spinner';

var Overlay = React.createClass({

    propTypes: {
        error: React.PropTypes.bool,
        togglePlay: React.PropTypes.func,
        paused: React.PropTypes.bool,
        copyKeys: React.PropTypes.object,
        loading: React.PropTypes.bool
    },

    renderContent() {
        var content;
        if (this.props.error) {
            content = (
                <div className="video-overlay__error">
                    <p className="video-overlay__error-text">{this.props.copyKeys.sourceError}</p>
                </div>
            );
        } else if (this.props.loading) {
            content = (
                <div className="video-overlay__loader">
                    <Spinner />
                </div>
            );
        } else {
            content = (
                <div className="video-overlay__play" onClick={this.props.togglePlay}>
                    {this.props.paused ? <Icon name="play-1" /> : ''}
                </div>
            );
        }
        return content;
    },

    render() {
        return (
            <div className="video-overlay">
                {this.renderContent()}
            </div>
        );
    }

});

export default Overlay;
