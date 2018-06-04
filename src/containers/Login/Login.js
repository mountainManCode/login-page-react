import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import {
    Button,
    FormControl,
    IconButton,
    Paper,
    Typography,
    withWidth,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLock from '@fortawesome/fontawesome-free-solid/faLock';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import ValidatedTextField from '../../components/ValidatedTextField/';
import LoginConfirmation from '../../components/LoginConfirmation/';
import styles from './styles';

const Login = props => {
    const {
        email,
        error,
        handleEmail,
        handleLogin,
        handlePassword,
        password,
    } = props;
    const {
        button,
        buttonRegister,
        buttonResetPassword,
        form,
        formControl,
        loginTitleWrapper,
        paper,
        registerWrapper,
        textField,
    } = props.classes;

    return (
        <Paper elevation={4} className={paper}>
            <form
                className={form}
                autoComplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    handleLogin();
                }}
            >
                <div className={loginTitleWrapper}>
                    <Typography variant="headline">Log In</Typography>
                    <IconButton>
                        <FontAwesomeIcon icon={faTimes} />
                    </IconButton>
                </div>
                <FormControl className={formControl} fullWidth>
                    <ValidatedTextField
                        autoFocus
                        className={textField}
                        handleChange={handleEmail}
                        inputIcon={faUser}
                        label="Email"
                        type="email"
                        value={email}
                    />
                </FormControl>

                <FormControl className={formControl} fullWidth>
                    <ValidatedTextField
                        autoFocus={false}
                        handleChange={handlePassword}
                        inputIcon={faLock}
                        label="Password"
                        type="password"
                        value={password}
                    />
                </FormControl>

                <Typography color="error">{error}</Typography>

                <Button className={button} type="submit">
                    {props.children ? props.children : 'Log In'}
                </Button>
                <div>
                    <Button size="small" className={buttonResetPassword}>
                        Forgot Password
                    </Button>
                </div>
                <div className={registerWrapper}>
                    <Typography variant="subheading">
                        Don't have an account? You can
                    </Typography>
                    <Button size="small" className={buttonRegister}>
                        register now.
                    </Button>
                </div>
            </form>
            {props.user ? <LoginConfirmation /> : null}
        </Paper>
    );
};

Login.propTypes = {
    children: PropTypes.object,
    classes: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    handleEmail: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handlePassword: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    user: PropTypes.array.isRequired,
};

export default compose(withStyles(styles), withWidth())(Login);
