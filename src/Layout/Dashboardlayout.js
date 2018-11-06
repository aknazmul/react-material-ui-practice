import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
import {
    AppBar, Toolbar, IconButton, Typography, Hidden, Drawer, CssBaseline,
    List, ListItem, Badge
} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'; 
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import InboxIcon from '@material-ui/icons/MoveToInbox'; 
// import SendIcon from '@material-ui/icons/Send';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';

import logo from '../assets/img/logo.png';
import Sidebarnavigation from  '../component/Sidebarnavigation';
// import Header from '../component/Header'

const drawerWidth = 240;
const secondaryColor = '#3C4042';

const theme = createMuiTheme({
  palette: { 
      primary: {
          main: '#027abb',
      },
      primaryLight: {
          main: '#E3F6FF',
      },
      secondary: {
          main: '#3C4042',
      },
  },
});

const dashboardlayoutStyles = theme => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  drawerLogo: {
    background: secondaryColor,
    padding: 0,
    position: 'sticky',
  },
  drawerLogoImg: {
    width: '123px',
    margin: '0 auto',
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

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

class Dashboardlayout extends Component {
    state = {
        mobileOpen: false,
        anchorEl: null,
    } 
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }))
    }

    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    render() {
        const { classes, children } = this.props;
        const { mobileOpen, anchorEl } = this.state;

        const drawer = (
          <MuiThemeProvider theme = {theme}> 
            <List className={classes.drawerLogo}>
              <ListItem button> 
                <img src={logo} alt="logo" className={classes.drawerLogoImg} />
              </ListItem> 
            </List>  
            <Sidebarnavigation /> 
        </MuiThemeProvider>
        );
        
        return (
          <div className={classes.root}>
          <MuiThemeProvider theme = {theme}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} color="inherit">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  React Practice
                </Typography>
                <div className={classes.grow} />
                <div>
                  <IconButton>
                    <Badge badgeContent={4} color="primary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <IconButton>
                    <Badge badgeContent={17} color="primary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    aria-owns={anchorEl ? 'userMenu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    color="primary"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="userMenu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  </Menu>
              </div>
              </Toolbar>
            </AppBar>

            <nav className={classes.drawer}>
              {/* The implementation can be swap with js to avoid SEO duplication of links. */}
              <Hidden mdUp implementation="css">
                <Drawer 
                  container={this.props.container}
                  variant="temporary"
                //   anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={mobileOpen}
                  onClose={this.handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden smDown implementation="css">
                <Drawer 
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  variant="permanent"
                  open
                >
                  {drawer}
                </Drawer>
              </Hidden>
            </nav>

            <main className={classes.content}>
              <div className={classes.toolbar} />
              {children}
            </main>
          </MuiThemeProvider>
        </div>
      );
    }
}

export default withStyles(dashboardlayoutStyles)(Dashboardlayout)