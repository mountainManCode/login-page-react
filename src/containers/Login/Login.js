import React from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    InputLabel,
    Paper,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLock from '@fortawesome/fontawesome-free-solid/faLock';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';

import ValidatedTextField from '../../components/ValidatedTextField/';
import LoginConfirmation from '../../components/LoginConfirmation/';
import '../../styles/css/login.css';

const styles = {
    button: {
        background: '#008080',
        borderRadius: 25,
        border: 0,
        color: 'white',
        fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        height: 48,
        width: '33%',
        minWidth: '150px',
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    },

    loginField: {
        border: '1px solid yellow',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
    },
};
// handleChange={this.props.handleEmail}

const Login = props => (
    <div className="login-container">
        <Paper zDepth={5}>
            <form
                className="login__form-container"
                autoComplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    props.handleLogin();
                }}
            >
                <FormControl fullWidth>
                    <div className="login__form__input-wrapper">
                        <ValidatedTextField
                            handleChange={props.handleEmail}
                            inputIcon={faUser}
                            label="Email"
                            type="email"
                            value={props.email}
                            className="login__text-input"
                        />
                    </div>
                    {/* <ValidatedTextField
                        inputIcon={faUser}
                        label="Email"
                        type="email"
                        className="login__text-input"
                    /> */}
                </FormControl>
                <FormControl fullWidth>
                    <div className="login__form__input-wrapper">
                        <ValidatedTextField
                            handleChange={props.handlePassword}
                            inputIcon={faLock}
                            label="Password"
                            type="password"
                            value={props.password}
                        />
                    </div>
                </FormControl>
                {/* <Button
                    className="login__button"
                    primary
                    variant="raised"
                    type="submit"
                >
                    Enter
                </Button> */}
                <Button className={props.classes.button} type="submit">
                    {props.children ? props.children : 'Log In'}
                </Button>
            </form>
        </Paper>
    </div>
);
// onClick={props.handleToggleDialogue}

export default withStyles(styles)(Login);
