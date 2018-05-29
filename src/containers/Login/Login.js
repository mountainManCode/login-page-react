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

const Login = props => (
    <div className="login-container">
        <Paper zDepth={5}>
            <form className="login__form-container" autoComplete="off">
                <FormControl fullWidth>
                    <div className="login__form__input-wrapper">
                        <ValidatedTextField
                            inputIcon={faUser}
                            label="Email"
                            type="email"
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

                <div className="login__form__input-wrapper">
                    <ValidatedTextField
                        inputIcon={faLock}
                        label="Password"
                        type="password"
                    />
                </div>
                {/* <Button
                    className="login__button"
                    primary
                    variant="raised"
                    type="submit"
                >
                    Enter
                </Button> */}
                <Button className={props.classes.button}>
                    {props.children ? props.children : 'Log In'}
                </Button>
            </form>
        </Paper>
    </div>
);

export default withStyles(styles)(Login);
