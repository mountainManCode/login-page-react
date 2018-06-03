import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './Login';
import LoginConfirmation from '../../components/LoginConfirmation/LoginConfirmation';

import {
    fetchEmail,
    fetchPassword,
    fetchUser,
    updateToggleDialogue,
} from '../../redux/modules/login';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmail = e => {
        this.setState({ email: e.target.value });
    };
    handlePassword = e => {
        this.setState({ password: e.target.value });
    };
    handleLogin = () => {
        const { email, password } = this.state;
        const userEmail = Object.values({ email }).toString();
        const userPassword = Object.values({ password }).toString();

        this.props.dispatch(fetchUser(email, password));
        // .then(this.props.dispatch(updateToggleDialogue()));
    };
    handleToggleDialogue = () => {
        this.props.dispatch(updateToggleDialogue());
    };

    render() {
        return (
            <Login
                dialogue={this.props.dialogue}
                error={this.props.error}
                handleToggleDialogue={this.handleToggleDialogue}
                handleEmail={this.handleEmail}
                handleLogin={this.handleLogin}
                handlePassword={this.handlePassword}
                email={this.state.email}
                password={this.state.password}
                user={this.props.user}
            />
        );
    }
}

LoginContainer.propTypes = {
    dialogue: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    dialogue: state.login.dialogue,
    email: state.login.email,
    error: state.login.error,
    password: state.login.password,
    user: state.login.user,
});

export default connect(mapStateToProps)(LoginContainer);
