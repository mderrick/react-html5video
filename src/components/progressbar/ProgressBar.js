import React from 'react';
import throttle from 'lodash.throttle';

var ProgressBar = React.createClass({

    propTypes: {
        orientation: React.PropTypes.string,
        step: React.PropTypes.number,
        progress: React.PropTypes.number,
        onChange: React.PropTypes.func,
        onFocus: React.PropTypes.func,
        onBlur: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            orientation: 'horizontal',
            step: 0.1,
            progress: 0,
            onChange: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.onBlur
        };
    },

    componentDidMount() {
        // 'orient' is not supported by React but
        // is required for Firefox. Setting manually.
        // https://github.com/facebook/react/issues/2453
        this.refs.input.setAttribute('orient', this.props.orientation);

        // There is a known issue with the range input onChange event in IE
        // https://github.com/facebook/react/issues/3096
        //
        // Until that is resolved, the workaround here is to also use the
        // onClick event in addition to onChange.
        //
        // And here we throttle our event handler so we don't double
        // post events in browsers that support both onChange and onClick.
        this.throttledOnChange = throttle(this.onChange, 200);
    },

    onChange(e) {
        if (e.target) {
            this.props.onChange(e);
        }
    },

    onFocus() {
        // Placeholder
    },

    onBlur() {
        // Placeholder
    },

    render() {
        return (
            <div className={'video-progress-bar ' + (this.props.orientation === 'horizontal'
                ? 'video-progress-bar--horizontal' : 'video-progress-bar--vertical')}>
                <div className="video-progress-bar__fill" style={{
                    [this.props.orientation === 'horizontal' ? 'width' : 'height']: this.props.progress + '%'
                }} />
                <input className="video-progress-bar__input"
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                    ref="input"
                    onChange={this.throttledOnChange}
                    onClick={this.throttledOnChange}
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
