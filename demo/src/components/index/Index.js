import React from 'react';
import Header from './header/header';
import Main from './main/main';

var Index = React.createClass({

    render() {
        return (
            <div className="index">
                <Header />
                <Main />
            </div>
        );
    }
});

export default Index;
