import React from "react"
import PropTypes from "prop-types"
import { withStyles, AppBar, Toolbar, Typography } from "@material-ui/core"

const styles = {
  root: {
    flexGrow: 1,
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0
  }
}

const Footer = ({classes}) => {
  return (
    <div className={ classes.root }>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="subheading" align="center" color="inherit">
            Music and Audio Research Group at Seoul National University
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
