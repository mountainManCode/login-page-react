import React from 'react';
import PropTypes from 'prop-types';
import {
    Input,
    InputAdornment,
    InputLabel,
    FormControl,
    TextField,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from './styles';

const ValidatedTextField = props => {
    const {
        autoFocus,
        handleChange,
        inputIcon,
        id,
        label,
        type,
        value,
        className,
    } = props;
    const { errorStyle, inputFocused, textField } = props.classes;

    return (
        <div>
            <TextField
                autoFocus={autoFocus}
                className={textField}
                error
                errorStyle={errorStyle}
                id={type}
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment position="start">
                            <FontAwesomeIcon icon={inputIcon} />
                        </InputAdornment>
                    ),
                    classes: {
                        input: inputFocused,
                    },
                }}
                margin="normal"
                onChange={handleChange}
                placeholder={label}
                underlineStyle={{ display: 'none' }}
                type={type || 'text'}
                value={value}
            />
        </div>
    );
};

ValidatedTextField.propTypes = {
    label: PropTypes.string.isRequired,
};

export default withStyles(styles)(ValidatedTextField);
