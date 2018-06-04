import React from 'react';
import PropTypes from 'prop-types';
import { InputAdornment, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from './styles';

const ValidatedTextField = props => {
    const {
        autoFocus, handleChange, inputIcon, label, type, value
    } = props;
    const { inputFocused, textField } = props.classes;

    return (
        <div>
            <TextField
                autoFocus={autoFocus}
                className={textField}
                error
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
                underlinestyle={{ display: 'none' }}
                type={type || 'text'}
                value={value}
            />
        </div>
    );
};

ValidatedTextField.propTypes = {
    autoFocus: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    inputIcon: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default withStyles(styles)(ValidatedTextField);
