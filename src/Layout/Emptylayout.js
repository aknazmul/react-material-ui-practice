import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
import {
      CssBaseline,
} from '@material-ui/core';
// import { Menu } from '@material-ui/icons'; 
// import DraftsIcon from '@material-ui/icons/Drafts';
// import InboxIcon from '@material-ui/icons/MoveToInbox'; 
// import SendIcon from '@material-ui/icons/Send';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';

// import logo from '../assets/img/logo.png'; 
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

const emptylayoutStyles = theme => ({
  root: {
    display: 'flex',
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

class Emptylayout extends Component {
    state = {
        mobileOpen: false
    } 
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }))
    }

    render() {
        const { classes, children } = this.props;
        
        return (
          <div className={classes.root}>
          <MuiThemeProvider theme = {theme}>
            <CssBaseline />  
            <main className={classes.content}>
              <div className={classes.toolbar} />
              {children}
            </main>
          </MuiThemeProvider>
        </div>
      );
    }
}

export default withStyles(emptylayoutStyles)(Emptylayout)