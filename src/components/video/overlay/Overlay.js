import PropTypes from 'prop-types';
import React from 'react';
import Icon from './../../icon/Icon';
import Spinner from './../../spinner/Spinner';

class Overlay extends React.Component {
    static propTypes = {
        error: PropTypes.bool,
        togglePlay: PropTypes.func,
        paused: PropTypes.bool,
        copyKeys: PropTypes.object,
        loading: PropTypes.bool
    };

    renderContent = () => {
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
    };

    render() {
        return (
            <div className="video-overlay">
                {this.renderContent()}
            </div>
        );
    }
}

export default Overlay;
