import React from 'react';
import { connect } from 'react-redux';
import {
  IconButton, MenuItem, Menu, Avatar, withStyles
} from '@material-ui/core';
import { signupRequest } from '../signup/actions';
import { unsetClient } from '../client/actions';
import { forwardTo } from '../lib';

const styles = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right'
  },

  transformOrigin: {
    vertical: -64,
    horizontal: 'right'
  }
};

class UserDropdownMenu extends React.Component {
  state = {
    anchorEl: null
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  handleLogout = () => {
    this.props.unsetClient();
  }

  openMyProfile = () => {
    this.setState({ anchorEl: null });
    return forwardTo('/me');
  }

  mouseHover = (e) => {
    e.target.style.backgroundColor = 'transparent';
  }

  render() {
    const { classes, user } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <Avatar
            alt={user.name}
            src={user.picture
              ? user.picture.data.url
              : ''
            }
          />

        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={styles.anchorOrigin}
          transformOrigin={styles.transformOrigin}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem
            // remove hover
            onMouseEnter={this.mouseHover}
            onMouseLeave={this.mouseHover}
            onClick={this.handleClose}
          >
            { user.name }
          </MenuItem>
          <MenuItem onClick={this.openMyProfile}>
            Profile
          </MenuItem>
          <MenuItem onClick={this.handleLogout}>
            Log out
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.client.user
});

export default withStyles(styles)(connect(mapStateToProps, { signupRequest, unsetClient })(UserDropdownMenu));
