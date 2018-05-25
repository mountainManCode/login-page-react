import React, { Component } from 'react';
import logo from './logo.svg';

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
                <LoginContainer />
            </div>
        );
    }
}

export default App;
