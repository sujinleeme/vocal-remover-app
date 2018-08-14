import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Button
} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link } from 'react-router-dom';
import { modalRequest } from '../modal/actions';
import { SIGN_IN_MODAL } from '../modal/constants';
import UserDropdownMenu from './UserDropdownMenu';

const styles = theme => ({
  root: {
    justifyContent: 'space-between'
  },
  user: {
    display: 'inline-flex',
    alignItems: 'center'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  avatar: {
    margin: 0
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  button: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    color: 'white'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

const Header = ({ classes, modalRequest, user }) => (
  <AppBar position="static">
    <Toolbar className={classes.root}>
      <Link to="/">
        <Typography variant="title" color="inherit">
          Vocal Remover
        </Typography>
      </Link>
      { user ? (
        <div className={classes.user}>
          <Link to="/upload">
            <Button className={classes.button}>
                upload
              <CloudUploadIcon className={classes.rightIcon} />
            </Button>
          </Link>
          <UserDropdownMenu />
        </div>
      )
        : (
          <Button
            className={classes.button}
            onClick={() => modalRequest({ modalOpen: true, modalType: SIGN_IN_MODAL })}
          >
            Sign in
          </Button>
        )
      }
    </Toolbar>
  </AppBar>
);

const mapStateToProps = state => ({
  user: state.client.user
});

export default withStyles(styles)(connect(mapStateToProps, { modalRequest })(Header));
