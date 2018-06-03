import React, { Component } from 'react';
import { Typography } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const HeaderBar = props => {
    const { headerBarTitle, title } = props.classes;

    return <Typography className={headerBarTitle}>Acme Services</Typography>;
};

export default withStyles(styles)(HeaderBar);
