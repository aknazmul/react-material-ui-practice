import React from 'react';
import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Menu } from '@material-ui/icons';  
import { IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

// import { Link } from 'react-router-dom';

const drawerWidth = 240; 

const headerStyles = theme => ({
    root: {
      display: 'flex',
    }, 
    drawerLogoImg: {
      width: '170px',
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      marginRight: 20,
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
  });

class Header extends React.Component {
    state = {
        mobileOpen: false
    } 
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }))
    }

    render() {
      const { classes } = this.props; 

      return (  
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerToggle}
            className={classes.menuButton}
        >
            <Menu />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
            React Practice
        </Typography>
        </Toolbar> 
    );
  }
};


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyles)(Header);
