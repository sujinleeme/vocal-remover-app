import React from 'react';
import {
  withStyles, AppBar, Toolbar, Typography
} from '@material-ui/core';

const styles = {
  root: {
  }
};

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="subheading" align="center" color="inherit">
            Music and Audio Research Group at Seoul National University
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Footer);
