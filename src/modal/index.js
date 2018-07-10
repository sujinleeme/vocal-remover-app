import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { Modal, Button, IconButton, Typography, Icon } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import { modalRequest } from "./actions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { modalContents } from "./contents"
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

// Signin.propTypes = {
// 	classes: PropTypes.object.isRequired,
// 	view: PropTypes.string.isRequired,
// 	modalRequest: PropTypes.func.isRequired
// }

const Signin = (props) => {
	
	const {classes, modalRequest, view} = props
	
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
				<Button variant="outlined" className={ classes.social }>
					<FontAwesomeIcon
						icon={ ["fab", "facebook"] }
						className={ classes.icon }/>
					{ body.facebook }
				</Button>
				<Button variant="outlined" className={ classes.social }>
					<FontAwesomeIcon
						className={ classes.icon }
						icon={ ["fab", "google"] }/>
					{ body.google }
				</Button>
			</div>
			<div>
				<Button disabled={ true }>{ body.bottom }</Button>
				<Button className={ classes.button }
				        onClick={ () => modalRequest({modalProps: true, modalType: body.nextView}) }
				>{ body.button }
				</Button>
			</div>
		</div>
	)
}

// SigninModal.propTypes = {
// 	classes: PropTypes.object.isRequired,
// 	_isOpen: PropTypes.bool.isRequired,
// 	modalRequest: PropTypes.func.isRequired,
// 	modalView: PropTypes.oneOf(["SIGN_IN", "SIGN_UP", null])
// }

class SigninModal extends React.Component {
	render() {
		const {classes, _isOpen, modalRequest, modalView} = this.props
		return (
			<div>
				<Modal
					open={ _isOpen }
					disableAutoFocus={ true }
				>
					<div style={ getModalStyle() } className={ classes.paper }>
						<div className={ classes.closeButton }>
							
							<IconButton className={ classes.button }
							            aria-label="SING_IN"
							            onClick={ () => modalRequest({modalProps: false}) }
							>
								<CloseIcon/>
							
							</IconButton>
						</div>
						<Signin
							classes={ classes }
							modalRequest={ modalRequest }
							view={ modalView }
						/>
					</div>
				</Modal>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	_isOpen: state.modal.modalProps,
	modalView: state.modal.modalType
})

export default withStyles(styles)(connect(mapStateToProps, {modalRequest})(SigninModal))
