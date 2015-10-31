import React from 'react';
import Icon from './../../icon/icon';

var Header = React.createClass({

    render() {
        return (
            <div className="header">
                <a className="header__github-link" href="https://github.com/mderrick/react-html5video">
                    <Icon name="github-circled-alt2" />
                    View on GitHub
                </a>
            </div>
        );
    }

});

export default Header;
