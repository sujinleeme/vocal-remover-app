import React from "react"
import { connect } from "react-redux"

import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import Modal from "@material-ui/core/Modal"
import Button from "@material-ui/core/Button"
import { openSigninModal, closeSigninModal } from "./actions"

const styles = theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200
	},
	menu: {
		width: 200
	}
})

class SigninModal extends React.Component {
	
	render() {
		// const {classes} = this.props
		
		return (
			<div>
				{/*<Modal*/}
					{/*aria-labelledby="simple-modal-title"*/}
					{/*aria-describedby="simple-modal-description"*/}
					{/*open="false"*/}
					{/*// onClose={ this.handleClose }*/}
				{/*>*/}
					<h1>hi!!</h1>
				
				{/*</Modal>*/}
			</div>
		)
	}
}

//
// TextFields.propTypes = {
// 	classes: PropTypes.object.isRequired
// }



export default withStyles(styles)(SigninModal)
