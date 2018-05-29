import React, { Component } from 'react';

import HeaderBar from './components/HeaderBar/HeaderBar';
import LoginContainer from './containers/Login/LoginContainer';
import './styles/css/App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="app-container">
                <HeaderBar />
                <LoginContainer />
            </div>
        );
    }
}

export default App;
