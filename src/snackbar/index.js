import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {Snackbar, IconButton, withStyles} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import {LOG_OUT} from "./constants"
import { snackbarRequest } from "../snackbar/actions"
import { snackbarContents } from "./contents"
// yield put(snackbarRequest({snackbarType: LOG_OUT, snackbarOpen: false}))

const styles = theme => ({
	close: {
		width: theme.spacing.unit * 4,
		height: theme.spacing.unit * 4
	}
})

class NotificationBar extends React.Component {
	
	handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return
		}
		this.props.snackbarRequest({snackbarType: LOG_OUT, snackbarOpen: false})
	}
	
	render() {
		
		const {classes, snackbarOpen, snackbarType} = this.props
		const messageText = snackbarContents({type: snackbarType})
		//
		return (
			<Snackbar
				anchorOrigin={ {vertical: "bottom", horizontal: "right"} }
				open={ snackbarOpen }
				autoHideDuration={ 2000 }
				onClose={ this.handleClose }
				ContentProps={ {
					"aria-describedby": "message-id"
				} }
				message={ <span id="message-id">{messageText.text}</span> }
				action={ [
					<IconButton
						key="close"
						aria-label="Close"
						color="inherit"
						className={ classes.close }
						onClick={ this.handleClose }
					>
						<CloseIcon/>
					</IconButton>
				] }
			/>
		)
	}
}

NotificationBar.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	snackbarOpen: state.snackbar.snackbarOpen,
	snackbarType: state.snackbar.snackbarType
})

export default withStyles(styles)(connect(mapStateToProps, {snackbarRequest})(NotificationBar))

