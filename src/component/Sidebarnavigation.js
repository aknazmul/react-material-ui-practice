import React from 'react';  
import PropTypes from "prop-types";
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { 
  List, ListItem, ListItemIcon, ListItemText, Divider, ListSubheader, Collapse
} from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/MoveToInbox'; 
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const secondaryColor = '#3C4042';
const secondaryTextColor = '#a8b2b7'

const theme = createMuiTheme({
  palette: { 
      primary: {
          main: '#027abb',
          contrastText: '#ffffff',
      },
      primaryLight: {
          main: '#E3F6FF',
      },
      secondary: {
          main: '#3C4042',
          contrastText: '#a8b2b7',
      },
  },
});

const sideNavStyles = {
    root: {
        flexGrow: 1,
    },
    linkText: {
      textDecoration: 'none',
      color: secondaryTextColor,
      '& a': {
        textDecoration: 'none',
        display: 'block',
      },
      '& .active': {
        textDecoration: 'none',
        backgroundColor: secondaryColor,
      },
      '& svg': {
        color: secondaryTextColor,
      },
      '& span': {
        color: secondaryTextColor,
      }
    },
    menuItems: {
      background: '#4e5152',
      height: '100%', 
      overflow: 'auto',
    },
    // menuItems: { 
    //   '&:hover': {
    //     overflow: 'auto',
    //   },  
    // }
    lightText: {
      color: '#ffffff',
      span: {
        color: '#ffffff',
      }
    },
    dividerLighten: {
      backgroundColor: '#707577',
    },
    navMenuHeader: {
      background: '#585a5a',
      color: secondaryTextColor,
    }
}

class Sidebarnavigation extends React.Component {
    state = {
      open: false,
    }
    handleClick = () => {
      this.setState(state => ({ open: !state.open }));
    }

    render() {
      const { classes } = this.props; 

      return (
        <MuiThemeProvider theme = {theme}> 
          <div className={classes.menuItems}> 
            <List component="nav" className={classes.lightMenu}> 
              <ListItem button className={classes.linkText}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button className={classes.linkText}>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
            <Divider className={classes.dividerLighten} />
            <List component="nav" className={classes.linkText}>
              <NavLink to="/home" activeClassName="active">
                <ListItem button>
                  <ListItemText color="primary" primary="Home" />
                </ListItem>
              </NavLink>
              <NavLink to="/about-us" activeClassName="active">
                <ListItem button>
                  <ListItemText primary="About Us" />
                </ListItem>
              </NavLink> 
              <NavLink to="/login" activeClassName="active">
                <ListItem button>
                  <ListItemText primary="Login" />
                </ListItem>
              </NavLink> 
            </List>
            <List
              component="nav"
              subheader={<ListSubheader className={classes.navMenuHeader} component="div">Nested List Items</ListSubheader>}
            > 
            <ListItem button className={classes.linkText}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText inset primary="Sent mail" />
            </ListItem>
            <ListItem button className={classes.linkText}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText inset primary="Drafts" />
            </ListItem>
            <ListItem button className={classes.linkText} onClick={this.handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText inset primary="Inbox" />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding className={classes.linkText}>
                <ListItem button className={classes.nested} color="primary">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>
      </MuiThemeProvider>
    );
  }
};


Sidebarnavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(sideNavStyles)(Sidebarnavigation);