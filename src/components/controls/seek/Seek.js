import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './../../progressbar/progressbar';

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
        this.props.seek(e.target.value * this.props.duration / 100);
    },

    render() {
        return (
            <div className="video-seek video__control">
                <div className="video-seek__container">
                    <div style={{
                        width: this.props.percentageBuffered + '%'
                    }} className="video-seek__buffer-bar">
                    </div>
                    <ProgressBar
                        onChange={this.seek}
                        progress={this.props.percentagePlayed} />
                </div>
            </div>
        );
    }
});

export default Seek;
