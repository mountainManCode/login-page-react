import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const HeaderBar = props => {
    const { headerBarTitle } = props.classes;

    return <Typography className={headerBarTitle}>Acme Services</Typography>;
};

HeaderBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderBar);
