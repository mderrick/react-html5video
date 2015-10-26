import React from 'react';
import ReactDOM from 'react-dom';

var Seek = React.createClass({

    propTypes: {
        seek: React.PropTypes.func,
        percentageBuffered: React.PropTypes.number,
        percentagePlayed: React.PropTypes.number,
        duration: React.PropTypes.number
    },

    /**
     * Calculates the seek time based on change of input.
     * @param  {object} e Event object
     * @return {undefined}
     */
    seek(e) {
        this.props.seek(e.target.value * this.props.duration);
    },

    render() {
        return (
            <div className="video-seek video__control">
                <div className="video-seek__container">
                    <div style={{
                        width: this.props.percentageBuffered + '%'
                    }} className="video-seek__buffer-bar">
                    </div>
                    <div style={{
                        width: this.props.percentagePlayed + '%'
                    }} className="video-seek__progress-bar">
                        <div className="video-seek__handle"></div>
                    </div>
                    <input className="video-seek__input"
                           onChange={this.seek}
                           type="range"
                           min="0"
                           max="1"
                           value={this.props.percentagePlayed / 100}
                           step="0.01" />
                </div>
            </div>
        );
    }
});

export default Seek;
