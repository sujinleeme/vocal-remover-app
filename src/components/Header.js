import React from "react"
import PropTypes from "prop-types"

import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Icon from '@material-ui/core/Icon';

import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { Link } from "react-router-dom"
import { modalRequest } from "../modal/actions"

const styles = {
	root: {
		flexGrow: 1
	},
	flex: {
		flex: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
}

const Header = (props) => {
	const {classes, modalRequest} = props
	return (
		<div className={ classes.root }>
			<AppBar position="static">
				<Toolbar>
					<Link to="/">
						<Typography variant="title" color="inherit" className={ classes.flex }>
							Vocal Remover
						</Typography>
					</Link>
					<Button
						onClick={ () => props.modalRequest({modalProps: true, modalType: "SIGN_IN"}) }
						color="inherit">Sign in</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
}
//
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		// showModal: () => dispatch(showModal({
// 		// 	modalType: "SINGIN",
// 		// 	modalProps: true
// 		// }))
// 		openModal: () => dispatch(openModal({
// 			modalType: "SIGN_IN",
// 			modalProps: true
// 		}))
// 	}
// }

export default withStyles(styles)(connect(null, {modalRequest})(Header))

