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

// import { blueGrey900 } from '@material-ui/core/styles/colors';

const styles = {
    fieldStyle: {
        width: '50%',
    },
    errorStyle: {
        color: 'red',
        position: 'absolute',
        bottom: '-0.42rem',
    },
    underlineStyle: {
        backgroundColor: 'yellow',
    },
    outlinedTextStyle: {
        backgroundColor: 'yellow',
    },
};
//  width: '10%',
// borderColor: 'blue',
const inputProps = {
    step: 300,
};

const ValidatedTextField = ({
    handleChange,
    inputIcon,
    id,
    label,
    type,
    value,
    className,
}) => (
    <div>
        <TextField
            autoFocus
            error
            className={className}
            errorStyle={styles.errorStyle}
            id={type}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <FontAwesomeIcon icon={inputIcon} />
                    </InputAdornment>
                ),
            }}
            floatingLabelText={label}
            fullWidth
            onChange={handleChange}
            margin="normal"
            placeholder={label}
            value={value}
            style={{
                border: '1px solid blue',
                borderRadius: 5,
                backgroundColor: '#FFFFFF',
            }}
            type={type || 'text'}
        />
    </div>
);

ValidatedTextField.propTypes = {
    label: PropTypes.string.isRequired,
};

export default withStyles(styles)(ValidatedTextField);
