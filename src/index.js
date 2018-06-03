import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import HeaderBar from './components/HeaderBar/HeaderBar';
import LoginContainer from './containers/Login/LoginContainer';

import './styles/index.css';

const App = () => (
    <Provider store={store}>
        <div className="app-container">
            <HeaderBar />
            <LoginContainer />
        </div>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
