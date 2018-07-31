import React from 'react';
import { Grid, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4
  },
});

const Layout = ({ classes, children }) => (
  <Grid container>
    <Grid item xs={1} sm={2} />
    <Grid item xs={10} sm={8}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        className={classes.root}
      >
        { children }
      </Grid>
    </Grid>
    <Grid item xs={1} sm={2} />
  </Grid>
);

export default withStyles(styles)(Layout);
