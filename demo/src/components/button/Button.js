import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {
    static propTypes = {
        active: PropTypes.bool,
        children: PropTypes.string,
        onClick: PropTypes.func
    };

    static defaultProps = {
        active: false,
        onClick: this.onClick,
        text: 'A button'
    };

    onClick = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <button className={'button ' + (this.props.active ? 'button--active' : '')} onClick={this.props.onClick} href="#">
                {this.props.children}
            </button>
        );
    }
}

export default Button;
