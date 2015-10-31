import React from 'react';

var Button = React.createClass({

    propTypes: {
        active: React.PropTypes.bool,
        children: React.PropTypes.string,
        onClick: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            active: false,
            onClick: this.onClick,
            text: 'A button'
        };
    },

    onClick(e) {
        e.preventDefault();
    },

    render() {
        return (
            <a className={'button ' + (this.props.active ? 'button--active' : '')} onClick={this.props.onClick} href="#">
                {this.props.children}
            </a>
        );
    }

});

export default Button;
