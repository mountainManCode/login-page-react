import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import HeaderBar from './components/HeaderBar/HeaderBar';
import LoginContainer from './containers/Login/LoginContainer';
import LoginConfirmation from './components/LoginConfirmation/LoginConfirmation';
import './styles/css/App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Provider store={store}>
                <div className="app-container">
                    <HeaderBar />
                    <LoginContainer />
                    <LoginConfirmation />
                </div>
            </Provider>
        );
    }
}

export default App;
