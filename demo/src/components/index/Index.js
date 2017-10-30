import React from 'react';
import Header from './header/Header';
import Main from './main/Main';

class Index extends React.Component {
    render() {
        return (
            <div className="index">
                <Header />
                <Main />
            </div>
        );
    }
}

export default Index;
