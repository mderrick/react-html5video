import React from 'react';

var ProgressBar = React.createClass({

    propTypes: {
        orientation: React.PropTypes.string,
        step: React.PropTypes.number,
        progress: React.PropTypes.number,
        onChange: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            orientation: 'horizontal',
            step: 0.1,
            progress: 0,
            onChange: this.onChange
        };
    },

    onChange() {},

    render() {
        return (
            <div className={'video-progress-bar ' + (this.props.orientation === 'horizontal' ?
                'video-progress-bar--horizontal' : 'video-progress-bar--vertical')}>
                <div className="video-progress-bar__fill" style={{
                    [this.props.orientation === 'horizontal' ? 'width' : 'height']: this.props.progress + '%'
                }} />
                <input className="video-progress-bar__input"
                    orient={this.props.orientation}
                    onChange={this.props.onChange}
                    type="range"
                    min="0"
                    max="100"
                    value={this.props.progress}
                    step={this.props.step} />
            </div>
        );
    }
});

export default ProgressBar;
