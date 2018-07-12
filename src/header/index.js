import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import { modalRequest } from "../modal/actions"
import { SIGN_IN_MODAL } from "../modal/constants"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import UserDropdownMenu from "./UserDropdownMenu"

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
	}
}

const Header = (props) => {
	const {classes, modalRequest, user} = props
	console.log(props)
	return (
		<AppBar position="static">
			<Toolbar className={ classes.root }>
				<div>
					<Typography variant="title" color="inherit">
						Vocal Remover
					</Typography>
				</div>
				
				{ user ?
					<UserDropdownMenu
						name={ user.name }
						src={ user.picture.data.url }
					/>
					:
					<UserDropdownMenu
						name={ "sujin" }
						src={ "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1865112950222953&height=50&width=50&ext=1531636574&hash=AeT2tsCtxPzcP9H7" }
					/>
					
				}
			
			
			</Toolbar>
		</AppBar>
	)
}

// { /*<Button*/ }
// { /*onClick={ () => modalRequest({modalProps: true, modalType: SIGN_IN_MODAL}) }*/ }
// { /*color="inherit">Sign in*/ }
// { /*</Button>*/ }

Header.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	user: state.auth.user
})

export default withStyles(styles)(connect(mapStateToProps, {modalRequest})(Header))

