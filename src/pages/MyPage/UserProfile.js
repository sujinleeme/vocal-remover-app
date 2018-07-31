import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  withStyles, Avatar, Typography, Paper
} from '@material-ui/core';

const styles = theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  bigAvatar: {
    width: 120,
    height: 120
  }
});

const UserProfile = ({ classes, user }) => (
  <Paper className={classes.row}>
    { user
    && (
      <div className={classes.row}>
        <Typography variant="headline" component="h2">
          { user.name }
        </Typography>
        <Avatar
          alt={user.name}
          src={user.picture
            ? user.picture.data.url
            : ''
          }
          className={classNames(classes.bigAvatar)}
        />
      </div>
    )
    }
  </Paper>
);

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserProfile);
