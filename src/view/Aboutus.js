import React from 'react'; 
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = {
    headingOne: {
        color: 'gray'
    }
}

function Aboutus(props) {
    const { classes } = props;
    return (
        <Typography variant="h3" className={classes.headingOne}>About us element</Typography>
    );
}

export default withStyles(styles)(Aboutus);