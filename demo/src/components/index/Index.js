import React from 'react';
import Header from './header/Header';
import Main from './main/Main';

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
