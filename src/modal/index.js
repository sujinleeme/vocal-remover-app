import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { Modal, Button, IconButton, Typography, Icon } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import { modalRequest } from "./actions"
import { modalContents } from "./contents"

import Signup from "../signup"
import { alignStyle } from "../common-styles"

const styles = theme => ({
	container: alignStyle.center,
	
	footer: {
		display: "flex"
	},
	button: {
		margin: theme.spacing.unit
	},
	social: {
		width: "100%",
		margin: theme.spacing.unit
	},
	icon: {
		fontSize: "24px",
		marginRight: theme.spacing.unit
	},
	paper: {
		position: "absolute",
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4
	},
	buttonGroup: {
		marginTop: theme.spacing.unit * 2,
		padding: theme.spacing.unit
	},
	closeButton: alignStyle.right
})

const getModalStyle = () => {
	const top = 50
	const left = 50
	
	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	}
}

const Signin = ({classes, modalRequest, view}) => {
	const body = modalContents({state: view})
	return (
		<div className={ classes.container }>
			<Typography align="center" variant="title" id="modal-title">
				{ body.title }
			</Typography>
			<Typography align="center" variant="subheading" id="simple-modal-description">
				{ body.subtitle }
			</Typography>
			<div className={ `${classes.container} ${classes.buttonGroup}` }>
				<Signup
					textButton={ {facebook: body.facebook, google: body.google} }
					classes={ classes }
				/>
			</div>
			<div>
				<Button disabled={ true }>{ body.bottom }</Button>
				<Button className={ classes.button }
				        onClick={ () => modalRequest({modalOpen: true, modalType: body.nextView}) }
				>{ body.button }
				</Button>
			</div>
		</div>
	)
}

// Signin.propTypes = {
// 	classes: PropTypes.object.isRequired,
// 	view: PropTypes.string.isRequired,
// 	modalRequest: PropTypes.func.isRequired
// }

// SigninModal.propTypes = {
// 	classes: PropTypes.object.isRequired,
// 	_isOpen: PropTypes.bool.isRequired,
// 	modalRequest: PropTypes.func.isRequired,
// 	modalView: PropTypes.oneOf(["SIGN_IN", "SIGN_UP", null])
// }

const SigninModal = (props) => {
	const {classes, modalOpen, modalRequest, modalType} = props
	return (
		<div>
			<Modal
				open={ modalOpen }
				disableAutoFocus={ true }
			>
				<div style={ getModalStyle() } className={ classes.paper }>
					<div className={ classes.closeButton }>
						<IconButton className={ classes.button }
						            aria-label="SING_IN"
						            onClick={ () => modalRequest({modalOpen: false}) }
						>
							<CloseIcon/>
						</IconButton>
					</div>
					<Signin
						classes={ classes }
						view={ modalType }
						modalRequest={ modalRequest }
					/>
				</div>
			</Modal>
		</div>
	)
}

const mapStateToProps = state => ({
	modalOpen: state.modal.modalOpen,
	modalType: state.modal.modalType
})

export default withStyles(styles)(connect(mapStateToProps, {modalRequest})(SigninModal))
