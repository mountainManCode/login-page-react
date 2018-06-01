import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './Login';

import {
    fetchEmail,
    fetchPassword,
    fetchUser,
    updateToggleDialogue,
} from '../../redux/modules/login';

const USERS_URL = 'http://localhost:3004/users';

class LoginContainer extends Component {
    propTypes = {};
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            // profile: [],
        };
    }
    componentDidMount() {
        // TODO: fetch JSON and attach state!
        // const users = fetch(USERS_URL).then(r => r.json());
        // Promise.all([users]).then(response => {
        //     const [usersList] = response;
        //     console.log(usersList);
        //     //   const combined = List.map(item => {
        //     //     item.itemowner = usersList.find(user => user.id === item.itemowner);
        //     //     return item;
        //     //   });
        //     const profile = usersList.filter(user =>
        //         user.email === 'bart@simpsons.com' && user.password === 'password');
        //     console.log(profile);
        //     this.setState({ profile });
        // });
    }

    handleToggleDialogue = () => {
        this.props.dispatch(updateToggleDialogue());
    };

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
    };
    // handleEmail = email => {
    //     this.props.dispatch(fetchEmail(email));
    // };
    // handlePassword = password => {
    //     this.props.dispatch(fetchPassword(password));
    // };
    // this.state.email && this.state.password
    // login = (email, password) => {
    //     async function getUser() {
    //         try {
    //             console.log(response);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // };

    render() {
        // console.log(this.props);
        return (
            <Login
                dialogue={this.props.dialogue}
                handleToggleDialogue={this.handleToggleDialogue}
                handleEmail={this.handleEmail}
                handleLogin={this.handleLogin}
                handlePassword={this.handlePassword}
                email={this.state.email}
                password={this.state.password}
            />
        );
    }
}

const mapStateToProps = state => ({
    dialogue: state.login.dialogue,
    email: state.login.email,
    password: state.login.password,
    user: state.login.profile,
});

export default connect(mapStateToProps)(LoginContainer);
