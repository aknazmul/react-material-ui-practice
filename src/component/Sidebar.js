import React from 'react';
// import propTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    },
}

function Sidebar(probs) {
    const { classes } = probs;
    return (
        <div className={classes.root}> 
            <Typography variant="h6" color="inherit">
                Side bar
            </Typography> 
        </div>
    );
}

// Sidebar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default withStyles(styles)(Sidebar);

