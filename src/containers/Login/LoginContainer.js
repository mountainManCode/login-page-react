import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './Login';

import { updateToggleDialogue } from '../../redux/modules/login';

class LoginContainer extends Component {
    propTypes = {};
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleToggleDialogue = () => {
        this.props.dispatch(updateToggleDialogue());
    };

    handleEmail = e => {
        this.setState({ emailInputValue: e.target.value });
    };
    handlePassword = e => {
        this.setState({ passwordInputValue: e.target.value });
    };

    render() {
        return (
            <Login
                dialogue={this.props.dialogue}
                handleToggleDialogue={this.handleToggleDialogue}
                handleClose={this.handleClose}
                handleEmail={this.handleEmail}
                handlePassword={this.handlePassword}
            />
        );
    }
}

const mapStateToProps = state => ({
    dialogue: state.login.dialogue,
});

export default connect(mapStateToProps)(LoginContainer);
