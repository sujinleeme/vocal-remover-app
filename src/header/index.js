import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import { modalRequest } from "../modal/actions"
import { SIGN_IN_MODAL } from "../modal/constants"
import UserDropdownMenu from "./UserDropdownMenu"
import { forwardTo } from "../lib"
import { Link } from "react-router-dom"

const styles = {
	root: {
		justifyContent: "space-between"
		// flexGrow: 1
	},
	flex: {
		flex: 1
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
	button: {}
}

const Header = ({classes, modalRequest, user}) => {
	return (
		<AppBar position="static">
			<Toolbar className={ classes.root }>
				<Link to="/">
					<Typography variant="title" color="inherit">
						Vocal Remover
					</Typography>
				</Link>
				{ user ?
					<UserDropdownMenu/> :
					<Button className={ classes.button }
					        onClick={ () => modalRequest({modalOpen: true, modalType: SIGN_IN_MODAL}) }
					>Sign in
					</Button> }
			</Toolbar>
		</AppBar>
	)
}
Header.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	user: state.client.user
})

export default withStyles(styles)(connect(mapStateToProps, {modalRequest})(Header))

